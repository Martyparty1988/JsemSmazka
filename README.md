# 🍺 Jsem smažka?

AI aplikace pro detekci party devastace pomocí analýzy obličeje.

![Demo](https://img.shields.io/badge/demo-live-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 O aplikaci

"Jsem smažka?" je zábavná webová aplikace, která pomocí AI (Google Gemini nebo OpenAI) analyzuje váš obličej a určuje, jak moc vypadáte unavení/po párty/s kocovinou. Aplikace vás zařadí do jedné ze 6 kategorií devastace.

**✨ Nově s Google Gemini - ZDARMA až 1500 analýz denně!**

## ✨ Funkce

- 📸 **Zachytávání z kamery** - vyfoťte se přímo v prohlížeči
- 🤖 **AI analýza** - Google Gemini nebo OpenAI
- ✨ **Google Gemini ZDARMA** - 1500 analýz denně bez platby!
- 🎮 **DEMO režim** - funguje i bez API klíče
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

Aplikace je dostupná na: **[Martyparty1988.github.io/JsemSmazka](https://martyparty1988.github.io/JsemSmazka)**

### Možnost 1: DEMO režim 🎮

**Nejrychlejší - funguje okamžitě!**

1. Vyberte "🎮 DEMO" režim
2. Vyfoťte se a klikněte "Analyzovat"
3. Získáte náhodný vtipný výsledek

⚠️ Negeneruje skutečnou AI analýzu, jen náhodný výsledek.

---

### Možnost 2: Google Gemini ✨ **DOPORUČENO!**

**Nejlepší volba - velký FREE tier!**

#### Proč Gemini?
- ✅ **ZDARMA** až 15 požadavků/minuta, 1500/den
- ✅ Kvalitní AI analýza
- ✅ Žádný billing není potřeba
- ✅ Snadné nastavení

#### Získání API klíče:

1. Jděte na [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Přihlaste se Google účtem
3. Klikněte "Create API Key"
4. Zkopírujte klíč (začíná `AIza...`)

#### Použití:

1. V aplikaci vyberte "✨ Google Gemini"
2. Vložte váš API klíč
3. Vyfoťte se a analyzujte!

---

### Možnost 3: OpenAI 🤖

**Placené - pouze pokud už máte kredit**

#### Získání API klíče:

1. Jděte na [OpenAI Platform](https://platform.openai.com/api-keys)
2. Vytvořte si účet nebo se přihlaste
3. Vytvořte nový API klíč
4. Zkopírujte klíč (začíná `sk-...`)
5. **Důležité:** Nastavte billing na [platform.openai.com/billing](https://platform.openai.com/billing)

#### Použití:

1. V aplikaci vyberte "🤖 OpenAI"
2. Vložte váš API klíč
3. Vyfoťte se a analyzujte!

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
- **AI služby**:
  - Google Gemini 1.5 Flash (doporučeno - FREE)
  - OpenAI GPT-4o Vision
  - DEMO režim (offline)
- **Camera**: MediaDevices API
- **Storage**: LocalStorage API
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🔒 Soukromí a bezpečnost

- ✅ Fotky se zpracovávají pouze přes vybranou AI službu (Gemini/OpenAI)
- ✅ Žádné fotky se neukládají na náš server
- ✅ API klíč je uložen pouze lokálně ve vašem prohlížeči
- ✅ Vše probíhá client-side (v prohlížeči)
- ⚠️ API klíč nikdy nesdílejte s nikým
- ⚠️ Pravidelně rotujte váš API klíč
- 🎮 DEMO režim vůbec neposílá data nikam

## 💰 Náklady

### Google Gemini ✨ DOPORUČENO
- **ZDARMA:** 15 požadavků/minuta, 1500/den
- Ideální pro běžné použití
- Žádný billing potřeba

### OpenAI 🤖
- **Placené:** GPT-4o Vision cca $0.01 za obrázek
- Vyžaduje nastavení platební metody
- Vhodné pokud už máte kredit

### DEMO režim 🎮
- **ZDARMA:** Neomezené použití
- Náhodné výsledky (ne skutečná AI)

## ⚠️ Řešení problémů

### Gemini API problémy

#### "Překročen limit" (RESOURCE_EXHAUSTED)
**Příčina:** Příliš mnoho požadavků (free tier: 15/min)

**Řešení:**
1. ✅ Počkejte 1 minutu a zkuste znovu
2. ✅ Gemini má limit 15 požadavků za minutu
3. ✅ Denní limit je 1500 požadavků
4. ✅ **Nebo použijte DEMO režim**

#### "Neplatný API klíč" (API_KEY_INVALID)
**Řešení:**
1. Zkontrolujte, že klíč začíná `AIza`
2. Vygenerujte nový klíč na [ai.google.dev](https://aistudio.google.com/app/apikey)
3. Zkopírujte celý klíč včetně `AIza`

#### "Přístup zamítnut" (Error 403)
**Řešení:**
1. Zkontrolujte, že máte povolené Gemini API
2. Jděte na [Google AI Studio](https://aistudio.google.com)
3. Zkontrolujte omezení API klíče

---

### OpenAI API problémy

#### "Překročen limit API" (Error 429)
**Příčiny:**
- Příliš mnoho požadavků za krátký čas
- Překročen měsíční limit
- Nedostatečný billing

**Řešení:**
1. ✅ Počkejte 1-2 minuty a zkuste znovu
2. ✅ Zkontrolujte usage na [platform.openai.com/usage](https://platform.openai.com/usage)
3. ✅ Přidejte kredit na [platform.openai.com/billing](https://platform.openai.com/billing)
4. ✅ **Nebo použijte Google Gemini (ZDARMA!)**

#### "Nedostatek kreditů" (Error 402)
**Řešení:**
1. Přidejte platební metodu na OpenAI
2. Dobijte kredit (min. $5)
3. Zkontrolujte billing settings
4. **Nebo použijte Google Gemini (ZDARMA!)**

#### "Neplatný API klíč" (Error 401)
**Řešení:**
1. Zkontrolujte, že klíč začíná `sk-`
2. Vygenerujte nový klíč na [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
3. Zkopírujte celý klíč včetně `sk-`

---

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
