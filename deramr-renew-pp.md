# Derma Renew Complex – Advertorial Landing Page
## Complete Copy + Design Specification for AI Coding Assistant

---

## OVERVIEW & CONTEXT

This document contains the full rewritten copy and detailed design/layout instructions for a landing page promoting **Dermapuris Derma Renew Complex** — a skin supplement (capsules) for women that supports skin renewal, reduces fine lines and wrinkles, and promotes a more youthful, glowing appearance from the inside out.

The page is modeled 1:1 after a competitor advertorial page (Natur Gesund Check promoting "Grüne Helfer"). The structure, visual hierarchy, conversion elements, and direct-response principles are replicated, but all copy is rewritten for Derma Renew Complex.

**Brand:** Dermapuris  
**Product:** Derma Renew Complex (capsules, not powder)  
**Target Audience:** Women 30–60+, German-speaking (DACH market)  
**Publisher Brand (Advertorial):** Haut Gesund Journal (fictional editorial brand, equivalent to "Natur Gesund Check")  
**Tone:** Warm, editorial, trustworthy, conversational German — not overly salesy, but persuasive. Feels like a personal recommendation from a health/beauty magazine.  
**Language:** German  

---

## GLOBAL DESIGN NOTES

- **Mobile-first but also desktop-ready.** On mobile, the layout is single-column, full-width. On desktop (>768px), content should be centered in a max-width container (~640px) to maintain the mobile-optimized feel while looking intentional on larger screens. Consider a subtle background color (light gray or soft beige) outside the content container on desktop.
- **Primary Color:** #2D6A4F (deep forest green — ties to "natural" positioning)
- **Accent Color:** #E07A5F (warm terracotta/coral — for CTA buttons and highlights)
- **Secondary Accent:** #F4A261 (golden amber — for badges, countdown, urgency elements)
- **Background:** #FFFFFF (white) for content areas, #F8F6F2 (warm off-white) for alternating sections
- **Text:** #1A1A1A (near-black) for body, #2D6A4F for headings
- **Font:** System sans-serif stack (e.g., -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)
- **CTA Buttons:** Large, rounded (8px radius), background #E07A5F, white text, bold. Full-width on mobile. Subtle hover effect (darken 10%).
- **All CTA links point to:** `https://dermapuris.de/product/derma-renew-komplex/` (placeholder — will be updated)

---

## PAGE STRUCTURE & COPY

---

### SECTION 1: STICKY HEADER BAR
**Design:** Thin bar at very top of page, background #2D6A4F, white text, sticky on scroll.  
**Content:**

```
HAUT GESUND JOURNAL | Ihr Ratgeber für natürliche Hautpflege
```

Small social media icons (Facebook, Instagram, Pinterest) aligned right — decorative only, no real links needed. Use placeholder `#` links.

---

### SECTION 2: URGENCY BANNER + COUNTDOWN
**Design:** Full-width section below header. Background: gradient from #F4A261 to #E07A5F. White bold text, centered.

**Content:**

```
EXKLUSIVES FEBRUAR ANGEBOT*
```

**Countdown Timer:**  
4 boxes in a row (dark background #1A1A1A, white text, rounded corners), showing:
- TAGE | STUNDEN | MINUTEN | SEKUNDEN
- The timer should be a functional JavaScript countdown. Set it to count down to the end of the current day (midnight), then reset daily so it always shows time remaining today.

---

### SECTION 3: HERO SECTION
**Design:** White background. Centered layout.

**Top label (small caps, green text #2D6A4F, above headline):**
```
HAUT GESUND JOURNAL EMPFIEHLT
```

**Star Rating (below label):**  
Display 4.8 out of 5 stars (filled gold stars ★) with text:
```
4,8 (3.847 Bewertungen)
```

**Main Headline (large, bold, dark text, ~24px mobile / ~32px desktop):**
```
Hautpflege von innen: Falten reduzieren, Ausstrahlung stärken und jünger aussehen – ganz natürlich
```

**Product Image Area:**  
Placeholder image area (rounded rectangle, light gray background with dashed border). Show a centered placeholder that says:  
`[PRODUKTBILD: Derma Renew Complex Flasche mit Kapseln – Frau hält Produkt lächelnd]`  
Dimensions: roughly 300x300px on mobile, centered.

**Sub-label beneath product image (green background badge, white text, rounded):**
```
ANGENEHM LEICHT EINZUNEHMEN
```

**Flavor/Format note (below badge, italic, smaller text):**
```
Praktische Kapseln – einfach mit Wasser einnehmen
```

**CTA Button (full width on mobile, centered on desktop):**
```
Jetzt zum Angebot
und bis zu 40% sparen!
```

**Benefit Bullets (below CTA, each with a green checkmark ✓ icon):**
```
✓ Glattere, straffere Haut statt Falten & feiner Linien
✓ Strahlender Teint statt fahlem, müdem Hautbild
✓ Stärkere Haare & Nägel als positiver Nebeneffekt
✓ Mehr Selbstbewusstsein & Wohlbefinden im Alltag
```

**Urgency line (red text, centered, with 🚨 emoji):**
```
🚨 Aktion nur noch heute gültig
```

**Social proof line (centered, smaller text, bold):**
```
Mehr als 30.000 Frauen vertrauen auf Derma Renew Complex
```

---

### SECTION 4: TRUST BAR
**Design:** Thin horizontal strip, background #F8F6F2. Four trust points in a row on desktop, 2x2 grid on mobile. Each has a small icon (placeholder circle) + short text.

```
✓ Hochwertige natürliche Inhaltsstoffe
✓ Wissenschaftlich geprüfte Rezeptur
✓ Seriöses Unternehmen (Dermapuris)
✓ 90 Tage Geld-zurück-Garantie
```

---

### SECTION 5: TRUSTPILOT-STYLE REVIEW BANNER
**Design:** White background, centered. Mimics a Trustpilot/review section.

**Text above stars:**
```
Bereits 50.027 Frauen sind vom Derma Renew Complex überzeugt
```

**Large heading:**
```
Hervorragend
```

**5 green star boxes** (like Trustpilot green ★ boxes in a row)

**Below stars:**
```
Basierend auf 3.847 Bewertungen
```

**Customer Mini-Reviews:**  
Display 3 mini review cards side-by-side (horizontally scrollable on mobile). Each card has:
- 5 gold stars at top
- Short review text (2–3 lines)
- Customer name

**Review 1:**
```
★★★★★
"Meine Haut fühlt sich so viel glatter an. Nach 4 Wochen sehe ich echte Veränderungen – besonders an den Augenfalten!"
– Monika S.
```

**Review 2:**
```
★★★★★
"Endlich ein Produkt, das von innen wirkt. Meine Freundinnen fragen mich, was ich anders mache!"
– Petra K.
```

**Review 3:**
```
★★★★★
"Anfangs war ich skeptisch, aber nach 6 Wochen ist mein Hautbild sichtbar besser. Absolute Empfehlung!"
– Susanne W.
```

---

### SECTION 6: PRICING CARDS
**Design:** Background #F8F6F2. Three pricing cards stacked vertically on mobile, side-by-side on desktop. Cards have white background, subtle shadow, rounded corners.

The middle card (3-month) gets a "Bester Wert" badge (green background, white text) at the top.

**Card 1 – Single (Probierpaket):**
```
1x Derma Renew Complex
(4,8) ★★★★★
Hochwertige Anti-Aging Formel

Probierpaket
statt 49,00€
Nur 39,00€ / Probierpreis

(10€ geschenkt)

[Jetzt bestellen] (CTA button)

Geld-Zurück-Garantie
```

**Card 2 – Triple (Bester Wert) — HIGHLIGHTED:**
```
🏷️ Bester Wert

3x Derma Renew Complex
(4,8) ★★★★★
Hochwertige Anti-Aging Formel

3 Monate Transformation
statt 147,00€
Nur 29,00€ / Stück

(60€ geschenkt)

[Jetzt bestellen] (CTA button)

Geld-Zurück-Garantie · kostenloser Versand
```

**Card 3 – Double:**
```
2x Derma Renew Complex
(4,8) ★★★★★
Hochwertige Anti-Aging Formel

2 Monate Routine
statt 98,00€
Nur 34,00€ / Stück

(30€ geschenkt)

[Jetzt bestellen] (CTA button)

Geld-Zurück-Garantie · kostenloser Versand
```

---

### SECTION 7: TRUST & CREDIBILITY BLOCK
**Design:** White background. A boxed/card section with green left border or green top accent. Contains a ✅ icon and heading.

**Heading:**
```
✅ Seriös und sicher
```

**Body text:**
```
Der Hersteller von Derma Renew Complex, die Firma Dermapuris, ist spezialisiert auf hochwertige Nahrungsergänzungsmittel für natürliche Hautpflege und zählt zu den vertrauenswürdigsten Unternehmen in diesem Bereich.

Alle Produkte werden nach höchsten Qualitätsstandards hergestellt, von unabhängigen Laboren getestet und bieten eine großzügige 90-Tage-Geld-zurück-Garantie.
```

**Below: Three icon blocks (vertically stacked on mobile, side-by-side on desktop):**

Each has a circular icon placeholder + heading + subtext:

**Block 1:**
```
📦 Schneller Versand
Versand innerhalb von 1–3 Werktagen
```

**Block 2:**
```
🔒 Sichere Bezahlung
SSL-verschlüsselt. PayPal, Visa, Mastercard, Klarna
```
(Show small payment method logos as placeholders)

**Block 3:**
```
🔄 90 Tage Geld zurück
Nicht zufrieden? Volle Erstattung, ohne Wenn und Aber.
```

---

### SECTION 8: CTA BANNER (REPEATING)
**Design:** Background #2D6A4F (green), white text, centered. Large CTA button (accent color #E07A5F).

```
Jetzt zum Angebot
und bis zu 40% sparen!
```

---

### SECTION 9: "WARUM DERMA RENEW ANDERS IST" – DIFFERENTIATION SECTION
**Design:** White background. Green heading. Body text in paragraphs. Below text: a comparison table.

**Heading:**
```
Warum Derma Renew Complex anders ist
```

**Body text:**
```
Derma Renew Complex wurde als tägliche Routine entwickelt, die gezielt dort ansetzt, wo herkömmliche Cremes an ihre Grenzen stoßen: bei der Hautalterung von innen.

Die ausgewählte Kombination aus Kollagenpeptiden, Hyaluronsäure, Sägepalme und wertvollen B-Vitaminen unterstützt die natürliche Hauterneuerung, fördert ein straffes und geschmeidiges Hautbild und hilft, den altersbedingten Kollagenabbau auszugleichen.

Statt einzelner Wirkstoffe oder teurer Cremes, die nur die Oberfläche behandeln, setzt Derma Renew Complex auf einen ganzheitlichen Ansatz von innen – einfach einzunehmen und wissenschaftlich fundiert.
```

**Comparison Table:**  
Two-column layout. Left column = Derma Renew (green header, checkmarks). Right column = "Andere" (gray header, ✘ marks).

```
🏆 Derma Renew Complex          |  🚫 Andere
─────────────────────────────────|──────────────────────────────
✓ Ganzheitliche Formel mit      |  ✘ Oft nur ein einzelner 
  12+ Wirkstoffen                |    Wirkstoff
✓ Kollagen + Hyaluronsäure      |  ✘ Kaum Mikronährstoffe
  + Vitamine                     |    
✓ Einfache Kapseln –            |  ✘ Umständliche Cremes oder
  2x täglich                     |    Pulver
✓ Wirkt von innen auf den       |  ✘ Nur oberflächliche Wirkung
  ganzen Körper                  |    
```

---

### SECTION 10: TABS – WIRKUNG / EINNAHME / ZUTATEN
**Design:** Three tabs in a row (like pill-shaped tab navigation). Only one tab content visible at a time. Active tab has green background, white text. Inactive tabs have light gray background.

**Tab 1: Wirkung**
```
Derma Renew Complex unterstützt Ihre Haut von innen heraus:

• Kollagen und Hyaluronsäure erhöhen die Hautelastizität und Feuchtigkeit
• Die enthaltene Sägepalme hilft, das altersbeschleunigende DHT-Hormon zu regulieren
• B-Vitamine (B1, B2, B3, B6, B7) unterstützen den Zellstoffwechsel und die Hautregeneration
• MSM fördert die körpereigene Kollagenproduktion
• Wilde Yamswurzel wirkt unterstützend auf den Hormonhaushalt

Die Wirkung entfaltet sich schrittweise. Erste sichtbare Ergebnisse berichten viele Kundinnen bereits nach 3–4 Wochen regelmäßiger Einnahme.
```

**Tab 2: Einnahme**
```
So einfach integrieren Sie Derma Renew Complex in Ihren Alltag:

1. 2 Kapseln täglich
2. Mit einem Glas Wasser einnehmen
3. Am besten zu einer Mahlzeit

Am besten als festes Morgenritual – so vergessen Sie keine Einnahme und starten optimal in den Tag!
```
Display with 3 icon circles showing: "2 Kapseln" → "Mit Wasser" → "Täglich einnehmen"

**Tab 3: Zutaten**
```
Fisch Hydrolysiertes Kollagen Peptan® F, vegane Kapselhülle, Sägepalme 20:1, MSM (Methylsulfonylmethan), Wilde Yamswurzel Extrakt, Natriumhyaluronat, Vitamin B7 (Biotin), Schachtelhalm-Extrakt 25:1, Vitamin B1 (Thiamin), Vitamin B2 (Riboflavin), Vitamin B3 (Nicotinamid), Vitamin B6 (Pyridoxinhydrochlorid), Vitamin A (Retinylpalmitat), Folat.

✓ Ohne künstliche Farbstoffe
✓ Ohne unnötige Füllstoffe
✓ In der EU hergestellt
✓ Von unabhängigen Laboren getestet
```

---

### SECTION 11: CUSTOMER TESTIMONIALS (LONG-FORM)
**Design:** Background #F8F6F2. Each testimonial in a card with white background, subtle shadow, rounded corners. Includes a placeholder image (circle, ~60px) for the customer, name + age + city, and the quote.

**Section heading:**
```
Das sagen Kundinnen aus Deutschland und Österreich
```

**Subheading (smaller, gray):**
```
Wir haben uns die Zeit genommen, mit einigen Kundinnen zu sprechen und ihre Erfahrung mit Derma Renew Complex ungefiltert aufzunehmen.
```

**Testimonial 1:**
```
[Placeholder: Circle avatar photo]
Monika (51, aus München)

„Meine Falten um die Augen haben mich schon lange gestört, aber ich wollte keine Spritzen. Seit ich Derma Renew Complex nehme, fühlt sich meine Haut deutlich glatter und praller an. Selbst mein Mann hat es bemerkt – und der merkt sonst nichts!"
```

**Testimonial 2:**
```
[Placeholder: Circle avatar photo]
Kerstin (43, aus Wien)

„Ich habe schon so viele teure Cremes ausprobiert und nie wirklich etwas gesehen. Derma Renew Complex war die erste Sache, die von innen gewirkt hat. Nach ungefähr 5 Wochen sah meine Haut frischer aus und ich habe sogar Komplimente bekommen. Das Abnehmen von der Wunschliste, das kommt als netter Bonus obendrauf – ich fühle mich insgesamt einfach wohler."
```

**Testimonial 3:**
```
[Placeholder: Circle avatar photo]
Sabine (58, aus Düsseldorf)

„Ich hatte das Gefühl, dass meine Haut einfach nicht mehr mitspielt – trocken, faltig, müde. Seit ich Derma Renew Complex nehme, hat sich mein Hautbild sichtbar verbessert. Besonders am Hals und an den Armen sehe ich einen echten Unterschied. Ich fühle mich wieder wohler in meiner Haut."
```

**Testimonial 4:**
```
[Placeholder: Circle avatar photo]
Anna (36, aus Hamburg)

„Ich bin erst 36, aber die ersten Fältchen haben mich verrückt gemacht. Eine Freundin hat mir Derma Renew Complex empfohlen. Nach 6 Wochen fühlt sich meine Haut fester an und mein Teint strahlt wieder. Außerdem sind meine Nägel stärker geworden – ein toller Nebeneffekt!"
```

---

### SECTION 12: CTA BANNER (REPEATING)
**Design:** Same as Section 8.

```
Jetzt zum Angebot
und bis zu 40% sparen!
```

---

### SECTION 13: MONEY-BACK GUARANTEE SECTION
**Design:** White background. Centered. Show a round guarantee badge/seal placeholder (golden circle with "90 TAGE GELD ZURÜCK" text inside). Green heading below.

**Heading:**
```
Risikofrei testen – mit 90-Tage-Geld-zurück-Garantie!
```

**Body text:**
```
Bei Haut Gesund Journal empfehlen wir nur Produkte, die wir persönlich überzeugen. Damit Sie Ihren Kauf ohne Risiko genießen können, haben wir mit dem Dermapuris-Team etwas Besonderes für Sie ausgehandelt:

Wenn Sie Derma Renew Complex über diese Seite bestellen, erhalten Sie eine volle 90-Tage-Geld-zurück-Garantie.

Sollten Sie in dieser Zeit nicht genauso begeistert sein wie wir, senden Sie einfach eine E-Mail an info@dermapuris.de mit dem Betreff „Haut Gesund Journal Garantie". Das Team erstattet Ihre Bestellung schnellstmöglich – ohne Wenn und Aber.

Wir wünschen Ihnen viel Freude mit Ihrem risikofreien Einkauf!

Ihre Redaktion von Haut Gesund Journal
```

---

### SECTION 14: FINAL PUSH / CLOSING CTA
**Design:** Background #F8F6F2. Centered text. Large CTA button.

**Heading:**
```
Starten auch Sie Ihre Derma Renew Routine
```

**Body text:**
```
Tausende Frauen haben bereits mit Derma Renew Complex ihre Haut von innen gestärkt – weniger Falten, mehr Ausstrahlung und ein neues Selbstbewusstsein.

Nutzen auch Sie jetzt Ihre Chance und sichern Sie sich Derma Renew Complex im Rahmen der aktuellen Aktion und sparen Sie bis zu 40%.
```

**Placeholder image:** `[BILD: Frau mittleren Alters, lächelnd, strahlende Haut, hält Produkt – Selfie-Style]`

**CTA Button:**
```
Jetzt zum Angebot
und bis zu 40% sparen!
```

---

### SECTION 15: FAQ ACCORDION
**Design:** White background. Each question is a clickable accordion row (green text for question, expand/collapse with + / − icon). Only one open at a time.

**FAQ 1:**
```
Q: Funktioniert das wirklich?
A: Derma Renew Complex kombiniert wissenschaftlich erforschte Inhaltsstoffe wie Kollagen, Hyaluronsäure und Sägepalme. Tausende Kundinnen berichten von sichtbaren Verbesserungen. Natürlich ist jeder Körper anders – deshalb bieten wir eine 90-Tage-Geld-zurück-Garantie an.
```

**FAQ 2:**
```
Q: Wann merke ich Ergebnisse?
A: Viele Kundinnen berichten von ersten Veränderungen nach 3–4 Wochen. Für optimale Ergebnisse empfehlen wir eine Anwendung über mindestens 3 Monate, da die Hauterneuerung ein schrittweiser Prozess ist.
```

**FAQ 3:**
```
Q: Wie lange reicht eine Flasche?
A: Eine Flasche Derma Renew Complex enthält 60 Kapseln und reicht bei der empfohlenen Dosierung von 2 Kapseln täglich für genau 30 Tage.
```

**FAQ 4:**
```
Q: Kann ich es zurückgeben?
A: Ja! Sie haben eine volle 90-Tage-Geld-zurück-Garantie. Wenn Sie nicht zufrieden sind, erstatten wir Ihnen den Kaufpreis – ohne Fragen zu stellen.
```

**FAQ 5:**
```
Q: Für wen ist es geeignet?
A: Derma Renew Complex wurde speziell für Frauen entwickelt, die ihre Haut von innen heraus unterstützen möchten. Es ist besonders beliebt bei Frauen ab 30, die erste Zeichen der Hautalterung bemerken, sowie bei Frauen 50+, die ein jugendlicheres Hautbild anstreben.
```

**FAQ 6:**
```
Q: Gibt es Nebenwirkungen?
A: Derma Renew Complex besteht aus natürlichen Inhaltsstoffen und ist in der Regel sehr gut verträglich. Bei bekannten Allergien gegen Fisch oder einen der Inhaltsstoffe sollten Sie vor der Einnahme Ihren Arzt konsultieren.
```

**FAQ 7:**
```
Q: Ist Dermapuris ein seriöses Unternehmen?
A: Ja. Dermapuris ist spezialisiert auf Nahrungsergänzungsmittel für natürliche Hautpflege. Alle Produkte werden nach höchsten europäischen Qualitätsstandards hergestellt, dreifach getestet und kommen mit einer 90-Tage-Zufriedenheitsgarantie.
```

---

### SECTION 16: FOOTER
**Design:** Background #1A1A1A (dark), white/light gray text. Minimal.

```
Copyright © Haut Gesund Journal 2026
Impressum | Datenschutz

*Dieses Angebot ist zeitlich begrenzt und gilt nur über diese Seite. 
Ergebnisse können individuell variieren. 
Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene Ernährung und gesunde Lebensweise.
```

---

## ADDITIONAL DESIGN NOTES FOR AI CODING ASSISTANT

### Image Placeholders
Since we don't have the actual product images yet, create visually distinct placeholder areas:
- Use a light gray (#E5E5E5) background with dashed border (#CCCCCC)
- Inside each placeholder, display descriptive text of what image should go there
- Make placeholders the correct dimensions for the intended images
- Placeholders needed:
  1. Hero product image (300x300)
  2. Product images in pricing cards (150x200 each)
  3. Customer avatar circles (60x60 each, 4 total)
  4. "Selfie" image in closing section (250x300)
  5. Trust/payment icons (small, 30x30 each)
  6. Guarantee seal/badge (120x120, circular)

### Interactive Elements
1. **Countdown Timer:** JavaScript-based, counts down to midnight of the current day, resets daily.
2. **Tab Navigation (Wirkung/Einnahme/Zutaten):** Click to switch content. Only one tab active at a time.
3. **FAQ Accordion:** Click to expand/collapse. Only one open at a time (close others when one opens).
4. **Smooth scroll:** CTA buttons scroll to the pricing section smoothly.

### Responsive Behavior
- **Mobile (<768px):** Single column. Full-width CTAs. Stacked pricing cards. Navigation hidden or minimal.
- **Tablet (768px–1024px):** Content centered, max-width 640px. Pricing cards still stacked or 2-column.
- **Desktop (>1024px):** Content centered in a max-width 680px container. Subtle off-white/beige background flanking the content. Pricing cards in a 3-column row. Trust icons in a single row.

### Conversion Optimization Notes
- Multiple CTA buttons throughout the page (at least 5 placements)
- Urgency: countdown timer + "nur noch heute" messaging
- Social proof: review count, star ratings, customer testimonials
- Risk reversal: 90-day money-back guarantee prominently featured
- Trust: company info, quality standards, payment security
- The page should load fast — no heavy frameworks needed. Vanilla HTML/CSS/JS is preferred.

### What NOT to Include
- No cookie banners or popups (not needed for this spec)
- No navigation menu (single-page advertorial, no nav links needed)
- No sidebar content
- No video embeds (keep it lightweight)

---

## COPY SUMMARY TABLE

| Section | Reference Equivalent | Key Message |
|---------|---------------------|-------------|
| Header | Natur Gesund Check header | Haut Gesund Journal branding |
| Urgency Banner | Februar Angebot countdown | Exklusives Februar Angebot + timer |
| Hero | Product intro + benefits | Skin renewal from inside, anti-aging |
| Trust Bar | 4 trust checkmarks | Natural, scientific, reputable, guarantee |
| Reviews | Trustpilot-style reviews | 3.847 reviews, 4.8 stars |
| Pricing | 3-tier pricing cards | 1x/2x/3x bundles with savings |
| Credibility | "Seriös und sicher" block | Dermapuris company trust |
| Differentiation | "Warum anders" comparison | Inside-out vs. surface treatments |
| How-to Tabs | Wirkung/Verzehr/Zutaten | Effect, dosage, ingredients |
| Testimonials | 4 customer stories | Long-form social proof |
| Guarantee | Geld-zurück section | 90-day risk-free guarantee |
| Final CTA | Closing push | Last chance urgency |
| FAQ | Accordion questions | Objection handling |
| Footer | Copyright + legal | Disclaimers |

---

*End of document. All copy and design specifications ready for implementation.*