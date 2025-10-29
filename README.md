# 🍺 Jsem smažka?

AI aplikace pro detekci party devastace pomocí analýzy obličeje.

![Demo](https://img.shields.io/badge/demo-live-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 O aplikaci

"Jsem smažka?" je zábavná webová aplikace, která pomocí OpenAI GPT-4o Vision API analyzuje váš obličej a určuje, jak moc vypadáte unavení/po párty/s kocovinou. Aplikace vás zařadí do jedné ze 6 kategorií devastace.

## ✨ Funkce

- 📸 **Zachytávání z kamery** - vyfoťte se přímo v prohlížeči
- 🤖 **AI analýza** - využití OpenAI GPT-4o Vision API
- 👁️ **Náhled fotky** - zobrazení před analýzou
- 🔄 **Možnost opakování** - vyfoťte se znovu, pokud nejste spokojeni
- 💾 **Lokální uložení** - API klíč se ukládá v prohlížeči
- 🎨 **Moderní design** - responzivní UI s animacemi
- 🔒 **Soukromí** - vše probíhá lokálně, fotky se neukládají

## 🎭 Kategorie devastace

1. 😊 **Začátečník večírků** - svěží, ready na další kolo
2. 😴 **Pátek odpoledne** - lehká únava, měl by jít spát
3. 🥴 **Sobota po tahu** - mírná devastace, ale ještě to jde
4. 😵 **Legenda nonstopu** - masivní kruhy pod očima, bledost
5. 🧟 **Zombie z baru** - totální troska, rudé oči
6. 💀 **Chce to detox, kámo** - nekomentovatelný stav

## 🚀 Jak to použít

### 1. Získejte OpenAI API klíč

1. Jděte na [OpenAI Platform](https://platform.openai.com/api-keys)
2. Vytvořte si účet nebo se přihlaste
3. Vytvořte nový API klíč
4. Zkopírujte klíč (začíná `sk-...`)

### 2. Otevřete aplikaci

Aplikace je dostupná na: **[Martyparty1988.github.io/JsemSmazka](https://martyparty1988.github.io/JsemSmazka)**

### 3. Zadejte API klíč

- Vložte váš OpenAI API klíč do pole
- Klíč se automaticky uloží do vašeho prohlížeče
- Můžete použít tlačítko 👁️ pro zobrazení/skrytí klíče

### 4. Vyfoťte se

1. Povolte přístup ke kameře
2. Klikněte na "Vyfoť obličej"
3. Zkontrolujte náhled
4. Pokud nejste spokojeni, klikněte "Vyfoť znovu"

### 5. Analyzujte

- Klikněte na "Analyzovat"
- Počkejte na výsledek (pár sekund)
- Získáte vtipnou analýzu vašeho stavu

## 💻 Lokální spuštění

```bash
# Naklonujte repozitář
git clone https://github.com/Martyparty1988/JsemSmazka.git

# Otevřete v prohlížeči
cd JsemSmazka
# Otevřete index.html v prohlížeči
# Nebo použijte lokální server:
python -m http.server 8000
# Poté otevřete http://localhost:8000
```

## 🛠️ Technologie

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **AI**: OpenAI GPT-4o Vision API
- **Camera**: MediaDevices API
- **Storage**: LocalStorage API
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🔒 Soukromí a bezpečnost

- ✅ Fotky se zpracovávají pouze přes OpenAI API
- ✅ Žádné fotky se neukládají na server
- ✅ API klíč je uložen pouze lokálně ve vašem prohlížeči
- ✅ Vše probíhá client-side
- ⚠️ API klíč nikdy nesdílejte s nikým
- ⚠️ Pravidelně rotujte váš API klíč

## 💰 Náklady

Aplikace používá OpenAI API, které je placené:
- GPT-4o Vision: cca $0.01 za obrázek
- Používejte s rozvahou
- Nastavte si limity na OpenAI platformě

## 🤝 Přispívání

Pull requesty jsou vítány! Pro větší změny prosím nejprve otevřete issue.

## 📝 Licence

MIT

## 🎉 Autoři

- Vytvořeno s pomocí Claude Code
- Original idea: Martyparty1988

## ⚠️ Disclaimer

Tato aplikace je pouze pro zábavu. Výsledky nejsou medicínsky přesné a neměly by být brány vážně. Pokud máte zdravotní problémy, konzultujte s lékařem.

---

**Užijte si zábavu a pijte zodpovědně!** 🍺
