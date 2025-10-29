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

### Možnost 1: DEMO režim (bez API klíče) 🎮

**Nejjednodušší způsob - funguje okamžitě!**

1. Otevřete aplikaci: **[Martyparty1988.github.io/JsemSmazka](https://martyparty1988.github.io/JsemSmazka)**
2. Nechte pole API klíče **prázdné**
3. Vyfoťte se a klikněte "Analyzovat"
4. Potvrdťte DEMO režim
5. Získáte náhodný vtipný výsledek

⚠️ DEMO režim negeneruje skutečnou AI analýzu, jen náhodný výsledek.

### Možnost 2: S OpenAI API klíčem (skutečná AI analýza) 🤖

#### 1. Získejte OpenAI API klíč

1. Jděte na [OpenAI Platform](https://platform.openai.com/api-keys)
2. Vytvořte si účet nebo se přihlaste
3. Vytvořte nový API klíč
4. Zkopírujte klíč (začíná `sk-...`)
5. **Důležité:** Nastavte billing na [platform.openai.com/billing](https://platform.openai.com/billing)

#### 2. Otevřete aplikaci

Aplikace je dostupná na: **[Martyparty1988.github.io/JsemSmazka](https://martyparty1988.github.io/JsemSmazka)**

#### 3. Zadejte API klíč

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

**Alternativa:** Použijte zdarma DEMO režim!

## ⚠️ Řešení problémů

### "Překročen limit API" (Error 429)

**Příčiny:**
- Příliš mnoho požadavků za krátký čas
- Překročen měsíční limit
- Nedostatečný billing

**Řešení:**
1. ✅ Počkejte 1-2 minuty a zkuste znovu
2. ✅ Zkontrolujte usage na [platform.openai.com/usage](https://platform.openai.com/usage)
3. ✅ Přidejte kredit na [platform.openai.com/billing](https://platform.openai.com/billing)
4. ✅ Nastavte vyšší rate limit v nastavení
5. ✅ **Nebo použijte DEMO režim** (smažte API klíč)

### "Nedostatek kreditů" (Error 402)

**Řešení:**
1. Přidejte platební metodu na OpenAI
2. Dobijte kredit (min. $5)
3. Zkontrolujte billing settings
4. **Nebo použijte DEMO režim**

### "Neplatný API klíč" (Error 401)

**Řešení:**
1. Zkontrolujte, že klíč začíná `sk-`
2. Vygenerujte nový klíč na [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
3. Zkopírujte celý klíč včetně `sk-`

### Kamera nefunguje

**Řešení:**
1. Povolte přístup ke kameře v prohlížeči
2. Zkontrolujte, že používáte HTTPS
3. Zkuste jiný prohlížeč (Chrome, Firefox)

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
