import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-illustration.jpg';
import { useAuth } from '@/context/AuthContext';
import { ArrowRight, Baby, Heart, Shield, Sparkles, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { languages } from '@/i18n';
import { useState } from 'react';

export default function Landing() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { t, i18n } = useTranslation();
  const [showLangPicker, setShowLangPicker] = useState(false);

  if (isLoggedIn) {
    navigate('/dashboard', { replace: true });
    return null;
  }

  const features = [
    { icon: Baby, title: t('featPostpartum'), desc: t('featPostpartumDesc') },
    { icon: Heart, title: t('featPregnant'), desc: t('featPregnantDesc') },
    { icon: Shield, title: t('featGeneral'), desc: t('featGeneralDesc') },
    { icon: Sparkles, title: t('featSexual'), desc: t('featSexualDesc') },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Language picker button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setShowLangPicker(!showLangPicker)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-card border border-border shadow-sm text-sm text-foreground hover:bg-secondary transition-colors"
        >
          <Globe className="w-4 h-4 text-primary" />
          {languages.find(l => l.code === i18n.language)?.flag || '🇬🇧'}
        </button>
        {showLangPicker && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 w-48 max-h-80 overflow-y-auto bg-card border border-border rounded-2xl shadow-xl p-2 z-30"
          >
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => { i18n.changeLanguage(lang.code); setShowLangPicker(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-left transition-colors ${
                  i18n.language === lang.code ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground hover:bg-secondary'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="relative max-w-lg mx-auto px-6 pt-12 pb-8">
          <Logo size="lg" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8">
            <h1 className="text-4xl font-display font-bold text-foreground leading-tight">
              {t('heroTitle')}<span className="text-primary">{t('heroTitleAccent')}</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">{t('heroDesc')}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="mt-8 relative">
            <img src={heroImage} alt="Pelvic floor awareness" className="w-full rounded-3xl shadow-xl" width={800} height={600} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-8 space-y-3">
            <Button className="w-full h-14 text-lg rounded-2xl shadow-lg" onClick={() => navigate('/signup')}>
              {t('getStarted')} <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => navigate('/login')}>
              {t('haveAccount')} <span className="text-primary ml-1 font-semibold">{t('logIn')}</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-lg mx-auto px-6 py-12">
        <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">{t('whoIsItFor')}</h2>
        <div className="grid grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.1 }} className="p-4 rounded-2xl bg-card border border-border shadow-sm">
              <f.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground text-sm">{f.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social proof */}
      <div className="max-w-lg mx-auto px-6 pb-16 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="p-6 rounded-2xl bg-secondary/50">
          <p className="font-display italic text-foreground text-lg">{t('socialProof')}</p>
          <p className="text-sm text-muted-foreground mt-3">{t('socialProofSource')}</p>
        </motion.div>
      </div>
    </div>
  );
}
