import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { user, subscribe } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const features = [t('pricingFeature1'), t('pricingFeature2'), t('pricingFeature3'), t('pricingFeature4')];

  const handleSubscribe = () => {
    subscribe();
    toast.success(t('subscribedToast'));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
        <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" /> {t('back')}
        </Button>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground">{t('pricingTitle')}</h1>
          <p className="text-muted-foreground mt-2">{t('pricingSubtitle')}</p>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="p-6 rounded-3xl border-2 border-primary bg-card shadow-xl">
          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-display font-bold text-foreground">$5</span>
              <span className="text-muted-foreground text-sm">{t('perMonth')}</span>
            </div>
          </div>
          <div className="space-y-3 mb-6">
            {features.map(f => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-primary" /></div>
                <span className="text-sm text-foreground">{f}</span>
              </div>
            ))}
          </div>
          <Button className="w-full h-14 rounded-2xl text-base shadow-lg" onClick={handleSubscribe} disabled={user?.isSubscribed}>
            {user?.isSubscribed ? `✓ ${t('active')}` : t('subscribe')}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
