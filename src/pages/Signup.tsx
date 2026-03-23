import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { Goal, Gender } from '@/types';
import { toast } from 'sonner';
import { Baby, Heart, Shield, Sparkles, Check, User } from 'lucide-react';

const femaleGoals: { value: Goal; label: string; icon: typeof Baby; desc: string }[] = [
  { value: 'postpartum', label: 'Efter fødsel', icon: Baby, desc: 'Genoptræning efter fødsel' },
  { value: 'pregnant', label: 'Gravid', icon: Heart, desc: 'Forberedelse til fødsel' },
  { value: 'general', label: 'Generel styrke', icon: Shield, desc: 'Forebyg og styrk' },
  { value: 'sexual-health', label: 'Bedre sexliv', icon: Sparkles, desc: 'Optimer dit sexliv' },
];

const maleGoals: { value: Goal; label: string; icon: typeof Shield; desc: string }[] = [
  { value: 'general', label: 'Generel styrke', icon: Shield, desc: 'Styrk din bækkenbund og core' },
  { value: 'sexual-health', label: 'Bedre sexliv', icon: Sparkles, desc: 'Optimer din seksuelle funktion' },
  { value: 'prostate', label: 'Efter prostata-op', icon: Heart, desc: 'Genoptræning efter operation' },
];

export default function Signup() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState<Gender>('female');
  const [selectedGoal, setSelectedGoal] = useState<Goal>('general');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error('Udfyld venligst alle felter');
      return;
    }
    if (password.length < 6) {
      toast.error('Adgangskoden skal være mindst 6 tegn');
      return;
    }
    setStep(2);
  };

  const handleGenderSelect = (g: Gender) => {
    setGender(g);
    setSelectedGoal('general');
    setStep(3);
  };

  const handleSignup = () => {
    signup(name, email, password, gender, selectedGoal);
    toast.success('Velkommen til Pelvic Power! 🎉');
    navigate('/dashboard');
  };

  const goals = gender === 'male' ? maleGoals : femaleGoals;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full max-w-sm"
      >
        {step === 1 && (
          <>
            <div className="mb-8 text-center">
              <div className="flex justify-center mb-4">
                <Logo size="md" />
              </div>
              <h1 className="text-2xl font-display font-bold text-foreground">Opret din konto</h1>
              <p className="text-muted-foreground text-sm mt-1">Start din rejse mod en stærkere bækkenbund</p>
            </div>

            <form onSubmit={handleNext} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Navn</Label>
                <Input id="name" placeholder="Dit navn" value={name} onChange={e => setName(e.target.value)} className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="din@email.dk" value={email} onChange={e => setEmail(e.target.value)} className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Adgangskode</Label>
                <Input id="password" type="password" placeholder="Min. 6 tegn" value={password} onChange={e => setPassword(e.target.value)} className="h-12 rounded-xl" />
              </div>
              <Button type="submit" className="w-full h-12 rounded-xl text-base">
                Næste →
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Har du en konto?{' '}
              <Link to="/login" className="text-primary font-semibold hover:underline">Log ind</Link>
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-display font-bold text-foreground">Vælg dit køn</h1>
              <p className="text-muted-foreground text-sm mt-1">Vi tilpasser indholdet til dig</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleGenderSelect('female')}
                className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-border hover:border-pink-400 transition-all text-left group"
              >
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
                  <User className="w-7 h-7 text-pink-500" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground text-base">Kvinde</div>
                  <div className="text-sm text-muted-foreground">Øvelser til graviditet, fødsel og generel sundhed</div>
                </div>
              </button>

              <button
                onClick={() => handleGenderSelect('male')}
                className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-border hover:border-blue-400 transition-all text-left group"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="w-7 h-7 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground text-base">Mand</div>
                  <div className="text-sm text-muted-foreground">Styrk bækkenbunden for bedre kontrol og funktion</div>
                </div>
              </button>
            </div>

            <Button variant="ghost" className="w-full mt-4" onClick={() => setStep(1)}>
              ← Tilbage
            </Button>
          </>
        )}

        {step === 3 && (
          <>
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-display font-bold text-foreground">Hvad er dit mål?</h1>
              <p className="text-muted-foreground text-sm mt-1">Vi tilpasser din oplevelse</p>
            </div>

            <div className="space-y-3 mb-8">
              {goals.map(g => (
                <button
                  key={g.value}
                  onClick={() => setSelectedGoal(g.value)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                    selectedGoal === g.value
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  <g.icon className={`w-6 h-6 ${selectedGoal === g.value ? 'text-primary' : 'text-muted-foreground'}`} />
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-sm">{g.label}</div>
                    <div className="text-xs text-muted-foreground">{g.desc}</div>
                  </div>
                  {selectedGoal === g.value && (
                    <Check className="w-5 h-5 text-primary" />
                  )}
                </button>
              ))}
            </div>

            <Button className="w-full h-12 rounded-xl text-base" onClick={handleSignup}>
              Start din træning 🎉
            </Button>
            <Button variant="ghost" className="w-full mt-2" onClick={() => setStep(2)}>
              ← Tilbage
            </Button>
          </>
        )}

        <p className="text-center mt-4">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
            ← Tilbage til forsiden
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
