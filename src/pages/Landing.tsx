import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-illustration.jpg';
import { useAuth } from '@/context/AuthContext';
import { ArrowRight, Baby, Heart, Shield, Sparkles } from 'lucide-react';

const features = [
  { icon: Baby, title: 'Efter fødsel', desc: 'Genoptræn din bækkenbund trygt efter fødsel' },
  { icon: Heart, title: 'Gravide', desc: 'Forbered din krop til en lettere fødsel' },
  { icon: Shield, title: 'Generel sundhed', desc: 'Forebyg inkontinens og styrk din core' },
  { icon: Sparkles, title: 'Sexliv', desc: 'Optimer dit sexliv med stærkere muskler' },
];

export default function Landing() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    navigate('/dashboard', { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="relative max-w-lg mx-auto px-6 pt-12 pb-8">
          <Logo size="lg" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <h1 className="text-4xl font-display font-bold text-foreground leading-tight">
              Styrk din bækkenbund
              <span className="text-primary"> – 1 minut ad gangen</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              Daglige videoguides baseret på fysioterapeut Heidi Barlows prisvindende metoder. 
              For kvinder der vil føle sig stærke, trygge og selvsikre.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 relative"
          >
            <img
              src={heroImage}
              alt="Kvinde i rolig yogaposition – bækkenbundsbevidsthed"
              className="w-full rounded-3xl shadow-xl"
              width={800}
              height={600}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 space-y-3"
          >
            <Button
              className="w-full h-14 text-lg rounded-2xl shadow-lg"
              onClick={() => navigate('/signup')}
            >
              Kom i gang <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => navigate('/login')}
            >
              Har du allerede en konto? <span className="text-primary ml-1 font-semibold">Log ind</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-lg mx-auto px-6 py-12">
        <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
          Hvem er det for?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="p-4 rounded-2xl bg-card border border-border shadow-sm"
            >
              <f.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground text-sm">{f.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social proof */}
      <div className="max-w-lg mx-auto px-6 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="p-6 rounded-2xl bg-secondary/50"
        >
          <p className="font-display italic text-foreground text-lg">
            "80% af kvinder oplever inkontinens efter fødsel. Det behøver ikke være permanent."
          </p>
          <p className="text-sm text-muted-foreground mt-3">– Baseret på forskning inden for bækkenbundsfysioterapi</p>
        </motion.div>
      </div>
    </div>
  );
}
