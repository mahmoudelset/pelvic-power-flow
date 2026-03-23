

# Pelvic Power – MVP Plan

## Overblik
En PWA (installerbar web-app) til bækkenbundsgenoptræning med videoguides, 3 træningsniveauer, notifikationsindstillinger og betalings-UI mockup. Designet i Heidis brand-farver: varme rosa/koraltoner (#C44B6C, #E8A0B5, #F5D5DE) med cremede neutrale baggrunde (#FDF6F0).

## Sider & Funktionalitet

### 1. Landing/Onboarding
- Hero med "Pelvic Power" logo (stiliseret tekst-logo med en subtil bækkenbunds-ikon i rosa)
- Kort intro: "Styrk din bækkenbund – 1 minut ad gangen"
- Målgrupper nævnt: postpartum, gravide, generel sundhed
- CTA: "Kom i gang" → signup

### 2. Signup/Login
- Email + password registrering (UI mockup, ingen rigtig auth endnu)
- Simpel onboarding-flow: vælg dit startmål (postpartum / gravid / generel styrke)

### 3. Dashboard (Hjem)
- Dagens anbefalet øvelse – video-kort med thumbnail og "Start øvelse" knap
- Progressions-tracker: visuelt showing begynder/middel/trænet niveau
- 3 daglige påmindelses-tidspunkter vist (redigerbare)
- Motivations-citat fra Heidi

### 4. Video-bibliotek
- 3 kategorier/tabs: Begynder 🌱 | Middel 💪 | Trænet 🔥
- Hvert niveau: 4-6 placeholder-videokort med titel, varighed (~1 min), thumbnail
- Filtrering på målgruppe (gravid, postpartum, generel)
- Ved klik: video-afspiller i fuld skærm med placeholder-video

### 5. Video-afspiller
- Fullscreen overlay med placeholder-video
- Titel, niveau-badge, kort beskrivelse
- "Færdig" knap → markerer øvelse som gennemført

### 6. Profil & Indstillinger
- Brugernavn, email, valgt mål
- Notifikationstider: 3 tidsfelter man kan justere (standard: 8:00, 13:00, 20:00)
- Abonnementsstatus (mockup): "$5/måned – Aktivt"
- Log ud

### 7. Betalingsside (mockup)
- Pricing-kort: $5/måned med features-liste
- "Abonner" knap (UI kun, ingen reel betaling)
- "Alle videoer inkluderet" besked

## Design
- **Farvepalette**: Rosa (#C44B6C primary), lys rosa (#F5D5DE), creme (#FDF6F0 baggrund), mørk tekst (#3D2B2E)
- **Font**: Elegant sans-serif (Inter for brød, Playfair Display for overskrifter)
- **Stil**: Blødt, feminint men professionelt. Afrundede hjørner, subtile skygger, masser af whitespace
- **AI-genererede billeder**: Abstrakte, tastefulde illustrationer af kvindekroppen (ingen nudity) – bløde akvarellignende former
- **Animationer**: Subtile fade-ins ved scroll, pulserende CTA-knapper, smooth page transitions
- **Mobil-first**: Designet primært til mobilbrug

## Teknisk
- React + Tailwind + shadcn/ui
- PWA-setup med vite-plugin-pwa for installerbarhed
- LocalStorage til brugerdata og øvelseshistorik (ingen backend i MVP)
- Placeholder-videoer (colored boxes med timer-animation)

