const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('captureButton');
const apiKeyInput = document.getElementById('apiKey');
const resultDiv = document.getElementById('result');

// Přístup ke kameře
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Chyba při získávání přístupu ke kameře: ", err);
        alert("Nepodařilo se získat přístup ke kameře. Zkontrolujte oprávnění.");
    });

// Pořízení fotky po kliknutí na tlačítko
captureButton.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    sendToOpenAI(dataUrl);
});

// Odeslání obrázku do OpenAI (simulace, pro reálné API uprav)
function sendToOpenAI(imageData) {
    const apiKey = apiKeyInput.value;
    if (!apiKey) {
        alert("Prosím, vložte váš OpenAI API klíč.");
        return;
    }

    // Simulace odpovědi z OpenAI (pro reálné API nahraď voláním)
    setTimeout(() => {
        const analysisResult = "Legenda nonstopu"; // Příklad výsledku
        displayResult(analysisResult);
    }, 1000);

    // Pokud chceš reálné API volání, odkomentuj níže a uprav:
    /*
    fetch('https://api.openai.com/v1/vision/analyze', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image: imageData,
            prompt: "Analyzuj obličej a urč, jak moc vypadá unaveně."
        })
    })
    .then(response => response.json())
    .then(data => {
        const analysisResult = data.result; // Uprav podle skutečné odpovědi API
        displayResult(analysisResult);
    })
    .catch(err => {
        console.error("Chyba při volání OpenAI API: ", err);
        alert("Nepodařilo se analyzovat obrázek.");
    });
    */
}

// Zobrazení výsledku s vtipným popisem
function displayResult(level) {
    const levels = {
        "Začátečník večírků": "Seš ready na další kolo?",
        "Pátek odpoledne": "Jdi radši spát",
        "Sobota po tahu": "Mírná devastace, ale ještě to jde",
        "Legenda nonstopu": "Masivní kruhy pod očima, bledost",
        "Zombie z baru": "Totální troska, rudý oči",
        "Chce to detox, kámo": "Nekomentovatelný stav"
    };

    resultDiv.innerHTML = `<p>${level}</p><p>${levels[level]}</p>`;
}
