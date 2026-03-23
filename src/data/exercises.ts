import { Exercise } from '@/types';

export const exercises: Exercise[] = [
  // Beginner
  {
    id: 'b1',
    title: 'Grundlæggende Kegel',
    description: 'Lær den basale kegel-øvelse. Spænd og slap af i bækkenbunden i et roligt tempo.',
    duration: 60,
    level: 'beginner',
    goals: ['postpartum', 'pregnant', 'general', 'sexual-health'],
    thumbnail: '/exercises/beginner-1.jpg',
  },
  {
    id: 'b2',
    title: 'Åndedræt & Bækkenbund',
    description: 'Koordiner din vejrtrækning med bækkenbundsaktivering for bedre kontrol.',
    duration: 60,
    level: 'beginner',
    goals: ['postpartum', 'pregnant', 'general'],
    thumbnail: '/exercises/beginner-2.jpg',
  },
  {
    id: 'b3',
    title: 'Blid Aktivering',
    description: 'Gentle pulserende bevægelser for at vække bækkenbundsmuskulaturen.',
    duration: 55,
    level: 'beginner',
    goals: ['postpartum', 'general'],
    thumbnail: '/exercises/beginner-3.jpg',
  },
  {
    id: 'b4',
    title: 'Liggende Kegel',
    description: 'Udfør kegel-øvelser i liggende position for optimal isolering.',
    duration: 60,
    level: 'beginner',
    goals: ['postpartum', 'pregnant', 'general'],
    thumbnail: '/exercises/beginner-4.jpg',
  },
  {
    id: 'b5',
    title: 'Quick Flicks',
    description: 'Hurtige, korte sammentrækninger der styrker de hurtige muskelfibre.',
    duration: 45,
    level: 'beginner',
    goals: ['general', 'sexual-health'],
    thumbnail: '/exercises/beginner-5.jpg',
  },
  // Intermediate
  {
    id: 'm1',
    title: 'Bro med Kegel',
    description: 'Kombiner bro-øvelsen med kegel for at styrke hele bækkenet.',
    duration: 60,
    level: 'intermediate',
    goals: ['postpartum', 'general', 'sexual-health'],
    thumbnail: '/exercises/mid-1.jpg',
  },
  {
    id: 'm2',
    title: 'Stående Bækkenbund',
    description: 'Øvelser i stående position der udfordrer balancen og bækkenbunden.',
    duration: 60,
    level: 'intermediate',
    goals: ['general', 'sexual-health'],
    thumbnail: '/exercises/mid-2.jpg',
  },
  {
    id: 'm3',
    title: 'Dyb Core Aktivering',
    description: 'Forbind bækkenbunden med den dybe core for bedre stabilitet.',
    duration: 65,
    level: 'intermediate',
    goals: ['postpartum', 'general'],
    thumbnail: '/exercises/mid-3.jpg',
  },
  {
    id: 'm4',
    title: 'Elevator Kegel',
    description: 'Forestil dig en elevator – løft bækkenbunden i stadier op og ned.',
    duration: 60,
    level: 'intermediate',
    goals: ['general', 'sexual-health'],
    thumbnail: '/exercises/mid-4.jpg',
  },
  {
    id: 'm5',
    title: 'Squat & Squeeze',
    description: 'Kombiner squats med bækkenbundsaktivering for funktionel styrke.',
    duration: 60,
    level: 'intermediate',
    goals: ['postpartum', 'general', 'sexual-health'],
    thumbnail: '/exercises/mid-5.jpg',
  },
  // Advanced
  {
    id: 'a1',
    title: 'Power Kegel Hold',
    description: 'Lange, intense holds der bygger udholdenhed i bækkenbunden.',
    duration: 60,
    level: 'advanced',
    goals: ['general', 'sexual-health'],
    thumbnail: '/exercises/adv-1.jpg',
  },
  {
    id: 'a2',
    title: 'Dynamisk Bækkenstyrke',
    description: 'Avancerede bevægelser der kombinerer styrke og koordination.',
    duration: 65,
    level: 'advanced',
    goals: ['general', 'sexual-health'],
    thumbnail: '/exercises/adv-2.jpg',
  },
  {
    id: 'a3',
    title: 'Funktionel Integration',
    description: 'Integrer bækkenbundsstyrke i dagligdags bevægelser.',
    duration: 60,
    level: 'advanced',
    goals: ['postpartum', 'general'],
    thumbnail: '/exercises/adv-3.jpg',
  },
  {
    id: 'a4',
    title: 'Sprint Kegels',
    description: 'Intense intervaller af hurtige sammentrækninger for maximum styrke.',
    duration: 50,
    level: 'advanced',
    goals: ['general', 'sexual-health'],
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
};
