// DOM Elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('captureButton');
const retakeButton = document.getElementById('retakeButton');
const analyzeButton = document.getElementById('analyzeButton');
const apiKeyInput = document.getElementById('apiKey');
const toggleApiKeyButton = document.getElementById('toggleApiKey');
const resultDiv = document.getElementById('result');
const loadingDiv = document.getElementById('loading');
const previewContainer = document.getElementById('previewContainer');
const previewImg = document.getElementById('preview');
const cameraError = document.getElementById('cameraError');

// State
let currentImageData = null;
let cameraStream = null;

// Load API key from localStorage
const savedApiKey = localStorage.getItem('openai_api_key');
if (savedApiKey) {
    apiKeyInput.value = savedApiKey;
}

// Save API key to localStorage when it changes
apiKeyInput.addEventListener('change', () => {
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
        localStorage.setItem('openai_api_key', apiKey);
    }
});

// Toggle API key visibility
toggleApiKeyButton.addEventListener('click', () => {
    if (apiKeyInput.type === 'password') {
        apiKeyInput.type = 'text';
        toggleApiKeyButton.textContent = '🙈';
    } else {
        apiKeyInput.type = 'password';
        toggleApiKeyButton.textContent = '👁️';
    }
});

// Initialize camera
async function initCamera() {
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'user',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            }
        });
        video.srcObject = cameraStream;
        cameraError.classList.add('hidden');
    } catch (err) {
        console.error("Chyba při získávání přístupu ke kameře: ", err);
        cameraError.textContent = "⚠️ Nepodařilo se získat přístup ke kameře. Zkontrolujte oprávnění.";
        cameraError.classList.remove('hidden');
        captureButton.disabled = true;
    }
}

// Stop camera stream
function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
}

// Capture photo
captureButton.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    currentImageData = canvas.toDataURL('image/jpeg', 0.8);

    // Show preview
    previewImg.src = currentImageData;
    previewContainer.classList.remove('hidden');

    // Hide video
    video.style.display = 'none';

    // Show/hide buttons
    captureButton.classList.add('hidden');
    retakeButton.classList.remove('hidden');
    analyzeButton.classList.remove('hidden');

    // Hide previous result
    resultDiv.classList.add('hidden');
});

// Retake photo
retakeButton.addEventListener('click', () => {
    // Show video again
    video.style.display = 'block';
    previewContainer.classList.add('hidden');

    // Show/hide buttons
    captureButton.classList.remove('hidden');
    retakeButton.classList.add('hidden');
    analyzeButton.classList.add('hidden');

    // Clear result
    resultDiv.classList.add('hidden');
    currentImageData = null;
});

// Analyze photo
analyzeButton.addEventListener('click', () => {
    if (!currentImageData) {
        alert("Nejprve vyfotěte obličej!");
        return;
    }

    const apiKey = apiKeyInput.value.trim();
    if (!apiKey) {
        // Demo mode without API key
        if (confirm("Nemáte zadaný API klíč. Chcete spustit DEMO režim? (náhodný výsledek)")) {
            runDemoMode();
        }
        return;
    }

    sendToOpenAI(currentImageData, apiKey);
});

// Send image to OpenAI Vision API
async function sendToOpenAI(imageData, apiKey) {
    // Show loading
    loadingDiv.classList.remove('hidden');
    resultDiv.classList.add('hidden');
    analyzeButton.disabled = true;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    {
                        role: "user",
                        content: [
                            {
                                type: "text",
                                text: `Analyzuj tento obličej a rozhodni, jak moc vypadá unavený/po párty/s kocovinou.

Vyber PŘESNĚ jednu z těchto kategorií:
1. "Začátečník večírků" - svěží, ready na další kolo
2. "Pátek odpoledne" - lehká únava, měl by jít spát
3. "Sobota po tahu" - mírná devastace, ale ještě to jde
4. "Legenda nonstopu" - masivní kruhy pod očima, bledost
5. "Zombie z baru" - totální troska, rudé oči
6. "Chce to detox, kámo" - nekomentovatelný stav

Odpověz pouze názvem kategorie a stručným vtipným komentářem (1-2 věty) v češtině.`
                            },
                            {
                                type: "image_url",
                                image_url: {
                                    url: imageData
                                }
                            }
                        ]
                    }
                ],
                max_tokens: 300
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const analysisText = data.choices[0].message.content;

        displayResult(analysisText);

    } catch (err) {
        console.error("Chyba při volání OpenAI API: ", err);

        let errorMessage = "Nepodařilo se analyzovat obrázek.\n\n";

        if (err.message.includes('401')) {
            errorMessage += "❌ Neplatný API klíč.\n\nŘešení:\n• Zkontrolujte, že klíč začíná 'sk-'\n• Vygenerujte nový klíč na platform.openai.com";
        } else if (err.message.includes('429')) {
            errorMessage += "⚠️ PŘEKROČEN LIMIT API!\n\nŘešení:\n1. Počkejte pár minut a zkuste znovu\n2. Zkontrolujte kredity na platform.openai.com/usage\n3. Nastavte billing na platform.openai.com/billing\n4. Nebo použijte DEMO režim (smažte API klíč)";
        } else if (err.message.includes('402') || err.message.includes('insufficient')) {
            errorMessage += "💳 NEDOSTATEK KREDITŮ!\n\nŘešení:\n1. Přidejte kredit na platform.openai.com/billing\n2. Zkontrolujte billing settings\n3. Zkuste DEMO režim místo toho";
        } else {
            errorMessage += err.message;
        }

        alert(errorMessage);
    } finally {
        loadingDiv.classList.add('hidden');
        analyzeButton.disabled = false;
    }
}

// Display result with styling
function displayResult(analysisText) {
    // Try to extract category and description
    const lines = analysisText.split('\n').filter(line => line.trim());

    let category = '';
    let description = '';

    // Check if first line contains a known category
    const categories = [
        "Začátečník večírků",
        "Pátek odpoledne",
        "Sobota po tahu",
        "Legenda nonstopu",
        "Zombie z baru",
        "Chce to detox, kámo"
    ];

    const firstLine = lines[0] || analysisText;
    const foundCategory = categories.find(cat => firstLine.includes(cat));

    if (foundCategory) {
        category = foundCategory;
        description = lines.slice(1).join(' ') || analysisText;
    } else {
        // If no category found, use the whole text
        category = "Výsledek analýzy";
        description = analysisText;
    }

    // Get appropriate emoji
    const emojiMap = {
        "Začátečník večírků": "😊",
        "Pátek odpoledne": "😴",
        "Sobota po tahu": "🥴",
        "Legenda nonstopu": "😵",
        "Zombie z baru": "🧟",
        "Chce to detox, kámo": "💀"
    };

    const emoji = emojiMap[category] || "🤖";

    resultDiv.innerHTML = `
        <h2>${emoji} ${category}</h2>
        <p class="description">${description}</p>
    `;

    resultDiv.classList.remove('hidden');
}

// Demo mode - runs without API key
function runDemoMode() {
    // Show loading
    loadingDiv.classList.remove('hidden');
    resultDiv.classList.add('hidden');
    analyzeButton.disabled = true;

    // Demo categories with descriptions
    const demoResults = [
        {
            category: "Začátečník večírků",
            description: "Vypadáš svěže! Ještě máš energii na další kolo. Dej si vodku!"
        },
        {
            category: "Pátek odpoledne",
            description: "Vidím lehkou únavu v očích. Možná by bylo dobrý jít domů a vyspat se."
        },
        {
            category: "Sobota po tahu",
            description: "No jo, vidím to na tobě. Kruhy pod očima a trochu bledší. Ale ještě to není katastrofa!"
        },
        {
            category: "Legenda nonstopu",
            description: "Masivní devastace! Kruhy pod očima jako pandě a bledost. Respekt za výdrž!"
        },
        {
            category: "Zombie z baru",
            description: "Totální troska! Vypadáš jak zombie. Rudé oči, pomačkaná ksicht. Běž spát, kámo!"
        },
        {
            category: "Chce to detox, kámo",
            description: "Nekomentovatelný stav. Okamžitě do postele, hodně vody a vitamíny. SOS!"
        }
    ];

    // Simulate API delay
    setTimeout(() => {
        const randomResult = demoResults[Math.floor(Math.random() * demoResults.length)];
        const demoText = `${randomResult.category}\n${randomResult.description}\n\n⚠️ DEMO REŽIM - náhodný výsledek`;

        displayResult(demoText);

        loadingDiv.classList.add('hidden');
        analyzeButton.disabled = false;
    }, 2000);
}

// Initialize camera on load
initCamera();

// Clean up camera on page unload
window.addEventListener('beforeunload', () => {
    stopCamera();
});
