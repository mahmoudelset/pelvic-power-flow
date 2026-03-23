import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BottomNav } from '@/components/BottomNav';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { goalLabels } from '@/data/exercises';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LogOut, Crown, Clock, HelpCircle } from 'lucide-react';
import { toast } from 'sonner';

const faqItems = [
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

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [times, setTimes] = useState<[string, string, string]>(
    user?.reminderTimes || ['08:00', '13:00', '20:00']
  );

  if (!user) {
    navigate('/', { replace: true });
    return null;
  }

  const handleSaveTimes = () => {
    updateProfile({ reminderTimes: times });
    toast.success('Påmindelser opdateret!');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto px-6 pt-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-display font-bold text-foreground mb-6">Profil</h1>
        </motion.div>

        {/* User info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl bg-card border border-border mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display text-xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="font-semibold text-foreground">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <p className="text-xs text-primary font-medium mt-0.5">
                {goalLabels[user.goal]}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-5 rounded-2xl bg-card border border-border mb-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <Crown className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Abonnement</h3>
          </div>
          {user.isSubscribed ? (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground font-medium">$5/måned – Aktivt</p>
                <p className="text-xs text-muted-foreground">Fuld adgang til alle videoer</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Aktiv</span>
            </div>
          ) : (
            <div>
              <p className="text-sm text-muted-foreground mb-3">Opgrader for fuld adgang</p>
              <Button className="rounded-xl" onClick={() => navigate('/pricing')}>
                Se priser
              </Button>
            </div>
          )}
        </motion.div>

        {/* Reminder times */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-5 rounded-2xl bg-card border border-border mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Daglige påmindelser</h3>
          </div>
          <div className="space-y-3">
            {['Morgen', 'Middag', 'Aften'].map((label, i) => (
              <div key={label} className="flex items-center gap-3">
                <Label className="w-16 text-sm text-muted-foreground">{label}</Label>
                <Input
                  type="time"
                  value={times[i]}
                  onChange={e => {
                    const newTimes = [...times] as [string, string, string];
                    newTimes[i] = e.target.value;
                    setTimes(newTimes);
                  }}
                  className="h-10 rounded-xl flex-1"
                />
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 rounded-xl" variant="outline" onClick={handleSaveTimes}>
            Gem påmindelser
          </Button>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-5 rounded-2xl bg-card border border-border mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Ofte stillede spørgsmål</h3>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Logout */}
        <Button
          variant="ghost"
          className="w-full text-destructive hover:text-destructive hover:bg-destructive/10 rounded-xl"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log ud
        </Button>
      </div>

      <BottomNav />
    </div>
  );
}
