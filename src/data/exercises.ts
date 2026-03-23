import { Exercise } from '@/types';

export const exercises: Exercise[] = [
  // Beginner
  {
    id: 'b1',
    title: 'Grundlæggende Kegel',
    description: 'Lær den basale kegel-øvelse. Spænd og slap af i bækkenbunden i et roligt tempo.',
    duration: 60,
    level: 'beginner',
    goals: ['postpartum', 'pregnant', 'general', 'sexual-health', 'prostate'],
    thumbnail: '/exercises/beginner-1.jpg',
  },
  {
    id: 'b2',
    title: 'Åndedræt & Bækkenbund',
    description: 'Koordiner din vejrtrækning med bækkenbundsaktivering for bedre kontrol.',
    duration: 60,
    level: 'beginner',
    goals: ['postpartum', 'pregnant', 'general', 'prostate'],
    thumbnail: '/exercises/beginner-2.jpg',
  },
  {
    id: 'b3',
    title: 'Blid Aktivering',
    description: 'Gentle pulserende bevægelser for at vække bækkenbundsmuskulaturen.',
    duration: 55,
    level: 'beginner',
    goals: ['postpartum', 'general', 'prostate'],
    thumbnail: '/exercises/beginner-3.jpg',
  },
  {
    id: 'b4',
    title: 'Liggende Kegel',
    description: 'Udfør kegel-øvelser i liggende position for optimal isolering.',
    duration: 60,
    level: 'beginner',
    goals: ['postpartum', 'pregnant', 'general', 'prostate'],
    thumbnail: '/exercises/beginner-4.jpg',
  },
  {
    id: 'b5',
    title: 'Quick Flicks',
    description: 'Hurtige, korte sammentrækninger der styrker de hurtige muskelfibre.',
    duration: 45,
    level: 'beginner',
    goals: ['general', 'sexual-health', 'prostate'],
    thumbnail: '/exercises/beginner-5.jpg',
  },
  // Intermediate
  {
    id: 'm1',
    title: 'Bro med Kegel',
    description: 'Kombiner bro-øvelsen med kegel for at styrke hele bækkenet.',
    duration: 60,
    level: 'intermediate',
    goals: ['postpartum', 'general', 'sexual-health', 'prostate'],
    thumbnail: '/exercises/mid-1.jpg',
  },
  {
    id: 'm2',
    title: 'Stående Bækkenbund',
    description: 'Øvelser i stående position der udfordrer balancen og bækkenbunden.',
    duration: 60,
    level: 'intermediate',
    goals: ['general', 'sexual-health', 'prostate'],
    thumbnail: '/exercises/mid-2.jpg',
  },
  {
    id: 'm3',
    title: 'Dyb Core Aktivering',
    description: 'Forbind bækkenbunden med den dybe core for bedre stabilitet.',
    duration: 65,
    level: 'intermediate',
    goals: ['postpartum', 'general', 'prostate'],
    thumbnail: '/exercises/mid-3.jpg',
  },
  {
    id: 'm4',
    title: 'Elevator Kegel',
    description: 'Forestil dig en elevator – løft bækkenbunden i stadier op og ned.',
    duration: 60,
    level: 'intermediate',
    goals: ['general', 'sexual-health', 'prostate'],
    thumbnail: '/exercises/mid-4.jpg',
  },
  {
    id: 'm5',
    title: 'Squat & Squeeze',
    description: 'Kombiner squats med bækkenbundsaktivering for funktionel styrke.',
    duration: 60,
    level: 'intermediate',
    goals: ['postpartum', 'general', 'sexual-health', 'prostate'],
    thumbnail: '/exercises/mid-5.jpg',
  },
  // Advanced
  {
    id: 'a1',
    title: 'Power Kegel Hold',
    description: 'Lange, intense holds der bygger udholdenhed i bækkenbunden.',
    duration: 60,
    level: 'advanced',
    goals: ['general', 'sexual-health', 'prostate'],
    thumbnail: '/exercises/adv-1.jpg',
  },
  {
    id: 'a2',
    title: 'Dynamisk Bækkenstyrke',
    description: 'Avancerede bevægelser der kombinerer styrke og koordination.',
    duration: 65,
    level: 'advanced',
    goals: ['general', 'sexual-health', 'prostate'],
    thumbnail: '/exercises/adv-2.jpg',
  },
  {
    id: 'a3',
    title: 'Funktionel Integration',
    description: 'Integrer bækkenbundsstyrke i dagligdags bevægelser.',
    duration: 60,
    level: 'advanced',
    goals: ['postpartum', 'general', 'prostate'],
    thumbnail: '/exercises/adv-3.jpg',
  },
  {
    id: 'a4',
    title: 'Sprint Kegels',
    description: 'Intense intervaller af hurtige sammentrækninger for maximum styrke.',
    duration: 50,
    level: 'advanced',
    goals: ['general', 'sexual-health', 'prostate'],
    thumbnail: '/exercises/adv-4.jpg',
  },
];

export const quotes = [
  '"Your pelvic floor is the foundation of your core strength." – Heidi Barlow',
  '"Just one minute a day can change your life." – Heidi Barlow',
  '"Every woman deserves to feel strong and confident in her body." – Heidi Barlow',
  '"Consistency beats intensity. Show up for yourself every day." – Heidi Barlow',
  '"Your body is incredible – give it the support it deserves." – Heidi Barlow',
];

export const maleQuotes = [
  '"Your pelvic floor is the foundation of your core strength." – Heidi Barlow',
  '"Just one minute a day can change your life." – Heidi Barlow',
  '"Consistency beats intensity. Show up for yourself every day." – Heidi Barlow',
  '"A strong pelvic floor supports everything – from your core to your confidence."',
  '"Training your pelvic floor is just as important as any other muscle group."',
];

export const levelLabels: Record<string, { label: string; emoji: string; color: string }> = {
  beginner: { label: 'Begynder', emoji: '🌱', color: 'bg-green-100 text-green-700' },
  intermediate: { label: 'Middel', emoji: '💪', color: 'bg-amber-100 text-amber-700' },
  advanced: { label: 'Trænet', emoji: '🔥', color: 'bg-red-100 text-red-700' },
};

export const goalLabels: Record<string, string> = {
  postpartum: 'Efter fødsel',
  pregnant: 'Gravid',
  general: 'Generel styrke',
  'sexual-health': 'Sexliv',
  prostate: 'Efter prostata-op',
};

export const femaleFaqItems = [
  {
    q: 'Hvad er bækkenbunden, og hvorfor er den vigtig?',
    a: 'Bækkenbunden er en gruppe muskler i bunden af bækkenet, der støtter blæren, tarmen og livmoderen. En stærk bækkenbund forebygger inkontinens, forbedrer seksuel funktion og giver stabilitet i hele kroppen.',
  },
  {
    q: 'Hvordan udfører jeg en korrekt kegel-øvelse?',
    a: 'Spænd musklerne omkring skeden og endetarmen, som om du prøver at holde luft og urin tilbage. Hold spændingen i nogle sekunder, og slap så helt af. Undgå at spænde mave, lår eller baller.',
  },
  {
    q: 'Hvor ofte bør jeg træne min bækkenbund?',
    a: 'Ideelt set 3 gange dagligt i ca. 1 minut – det er derfor appen minder dig morgen, middag og aften. Konsistens er vigtigere end intensitet.',
  },
  {
    q: 'Kan jeg træne bækkenbunden under graviditet?',
    a: 'Ja! Bækkenbundstræning under graviditet kan gøre fødslen lettere og reducere risikoen for inkontinens efter fødslen. Tal altid med din jordemoder eller fysioterapeut først.',
  },
  {
    q: 'Hvornår kan jeg starte træning efter fødslen?',
    a: 'Blide bækkenbundsøvelser kan typisk påbegyndes kort efter fødslen (ofte inden for de første dage), men start med begynderniveauet og lyt til din krop. Konsulter din fysioterapeut ved usikkerhed.',
  },
  {
    q: 'Hvad er tegn på en svag bækkenbund?',
    a: 'Almindelige tegn inkluderer urinlækage ved hoste, nys eller motion, hyppig vandladningstrang, tyngdefornemmelse i bækkenet, og nedsat følsomhed under sex.',
  },
  {
    q: 'Kan mænd også have gavn af bækkenbundstræning?',
    a: 'Absolut. Mænd har også en bækkenbund, og træning kan hjælpe med blærekontrol, seksuel funktion og core-stabilitet – især efter prostataoperationer.',
  },
  {
    q: 'Hvad er forskellen på de tre niveauer i appen?',
    a: 'Begynder fokuserer på grundlæggende aktivering og bevidsthed. Middel introducerer funktionelle øvelser som bro og squat. Trænet niveau har intense holds og dynamiske øvelser for maksimal styrke.',
  },
  {
    q: 'Hvor lang tid tager det at mærke resultater?',
    a: 'De fleste mærker forbedring efter 3-6 ugers daglig træning. Nogle oplever bedre blærekontrol allerede efter få uger. Vedholdenhed er nøglen!',
  },
  {
    q: 'Hvem er Heidi Barlow?',
    a: 'Heidi Barlow er en australsk fysioterapeut med speciale i kvinders bækkensundhed. Hun har en Master i Fysioterapi fra University of Sydney og er kendt for sin "Kegel Club" på sociale medier, hvor hun dagligt guider millioner af kvinder i bækkenbundstræning.',
  },
];

export const maleFaqItems = [
  {
    q: 'Har mænd en bækkenbund?',
    a: 'Ja! Mænd har en bækkenbund der støtter blæren, tarmen og påvirker seksuel funktion. Den strækker sig fra skambenet til halebenet og er afgørende for blærekontrol og erektil funktion.',
  },
  {
    q: 'Hvorfor bør mænd træne bækkenbunden?',
    a: 'Bækkenbundstræning kan hjælpe med at forebygge og behandle urininkontinens, forbedre erektil funktion, forlænge udholdenhed under sex, og støtte genoptræning efter prostataoperation.',
  },
  {
    q: 'Hvordan finder jeg mine bækkenbundsmuskler?',
    a: 'Prøv at stoppe urinstrømmen midtvejs (kun som test, ikke som øvelse). De muskler du spænder, er dine bækkenbundsmuskler. Du kan også forestille dig at trække dine testikler opad indvendigt.',
  },
  {
    q: 'Hvordan udfører jeg kegel-øvelser korrekt som mand?',
    a: 'Spænd musklerne som om du prøver at holde luft og urin tilbage samtidig. Hold i 5-10 sekunder, slap helt af, og gentag. Undgå at spænde mave, baller eller lår – isolér bækkenbunden.',
  },
  {
    q: 'Kan bækkenbundstræning hjælpe med erektil dysfunktion?',
    a: 'Ja, forskning viser at bækkenbundstræning kan forbedre erektil funktion markant. Musklerne er med til at opretholde blodtilførslen under erektion og kan styrkes ligesom enhver anden muskel.',
  },
  {
    q: 'Hvornår bør jeg starte træning efter en prostataoperation?',
    a: 'Det anbefales at starte bækkenbundstræning allerede før operationen og genoptage blide øvelser kort efter, når din læge giver grønt lys. Det kan reducere varigheden af inkontinens markant.',
  },
  {
    q: 'Hvor ofte bør jeg træne?',
    a: 'Start med 3 gange dagligt i ca. 1 minut. Appen minder dig morgen, middag og aften. Konsistens er vigtigere end intensitet – daglig træning giver de bedste resultater.',
  },
  {
    q: 'Kan bækkenbundstræning hjælpe med for tidlig sædafgang?',
    a: 'Ja, flere studier viser at styrkelse af bækkenbunden kan give bedre kontrol over ejakulation. Det handler om at opbygge bevidsthed og kontrol over de involverede muskler.',
  },
  {
    q: 'Hvor lang tid tager det at se resultater?',
    a: 'De fleste mænd oplever forbedring inden for 4-8 uger med daglig træning. Blærekontrol forbedres typisk først, mens seksuel funktion kan tage lidt længere. Vær tålmodig og konsistent.',
  },
  {
    q: 'Er bækkenbundstræning kun for ældre mænd?',
    a: 'Nej! Mænd i alle aldre kan have gavn af bækkenbundstræning. Yngre mænd kan forbedre seksuel udholdenhed og core-stabilitet, mens ældre mænd kan forebygge inkontinens og støtte prostatasundhed.',
  },
];
