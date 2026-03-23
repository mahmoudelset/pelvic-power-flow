import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BottomNav } from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LogOut, Crown, Clock, HelpCircle, Globe } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { languages } from '@/i18n';

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [times, setTimes] = useState<[string, string, string]>(user?.reminderTimes || ['08:00', '13:00', '20:00']);
  const [showLangPicker, setShowLangPicker] = useState(false);

  if (!user) { navigate('/', { replace: true }); return null; }

  const faqKeys = user.gender === 'male'
    ? Array.from({ length: 10 }, (_, i) => ({ q: t(`faqM${i + 1}Q`), a: t(`faqM${i + 1}A`) }))
    : Array.from({ length: 10 }, (_, i) => ({ q: t(`faqF${i + 1}Q`), a: t(`faqF${i + 1}A`) }));

  const handleSaveTimes = () => { updateProfile({ reminderTimes: times }); toast.success(t('remindersUpdated')); };
  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto px-6 pt-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-display font-bold text-foreground mb-6">{t('profile')}</h1>
        </motion.div>

        {/* User info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-5 rounded-2xl bg-card border border-border mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display text-xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="font-semibold text-foreground">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <p className="text-xs text-primary font-medium mt-0.5">
                {t(`label${user.goal === 'sexual-health' ? 'Sexual' : user.goal.charAt(0).toUpperCase() + user.goal.slice(1)}` as any)} · {user.gender === 'male' ? t('male') : t('female')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Language */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="p-5 rounded-2xl bg-card border border-border mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">{t('language')}</h3>
          </div>
          <button onClick={() => setShowLangPicker(!showLangPicker)}
            className="w-full flex items-center justify-between p-3 rounded-xl border border-border hover:bg-secondary/50 transition-colors">
            <span className="text-sm text-foreground">
              {languages.find(l => l.code === i18n.language)?.flag} {languages.find(l => l.code === i18n.language)?.name}
            </span>
            <span className="text-xs text-muted-foreground">{t('chooseLanguage')}</span>
          </button>
          {showLangPicker && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 max-h-60 overflow-y-auto space-y-1">
              {languages.map(lang => (
                <button key={lang.code} onClick={() => { i18n.changeLanguage(lang.code); setShowLangPicker(false); }}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-left transition-colors ${i18n.language === lang.code ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground hover:bg-secondary'}`}>
                  <span>{lang.flag}</span><span>{lang.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Subscription */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-5 rounded-2xl bg-card border border-border mb-6">
          <div className="flex items-center gap-3 mb-3"><Crown className="w-5 h-5 text-primary" /><h3 className="font-semibold text-foreground">{t('subscription')}</h3></div>
          {user.isSubscribed ? (
            <div className="flex items-center justify-between">
              <div><p className="text-sm text-foreground font-medium">{t('monthlyActive')}</p><p className="text-xs text-muted-foreground">{t('fullAccess')}</p></div>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">{t('active')}</span>
            </div>
          ) : (
            <div><p className="text-sm text-muted-foreground mb-3">{t('upgradeForAccess')}</p>
              <Button className="rounded-xl" onClick={() => navigate('/pricing')}>{t('seePrices')}</Button></div>
          )}
        </motion.div>

        {/* Reminders */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-5 rounded-2xl bg-card border border-border mb-6">
          <div className="flex items-center gap-3 mb-4"><Clock className="w-5 h-5 text-primary" /><h3 className="font-semibold text-foreground">{t('dailyReminders')}</h3></div>
          <div className="space-y-3">
            {[t('morning'), t('noon'), t('evening')].map((label, i) => (
              <div key={label} className="flex items-center gap-3">
                <Label className="w-16 text-sm text-muted-foreground">{label}</Label>
                <Input type="time" value={times[i]} onChange={e => { const n = [...times] as [string, string, string]; n[i] = e.target.value; setTimes(n); }} className="h-10 rounded-xl flex-1" />
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 rounded-xl" variant="outline" onClick={handleSaveTimes}>{t('saveReminders')}</Button>
        </motion.div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-5 rounded-2xl bg-card border border-border mb-6">
          <div className="flex items-center gap-3 mb-4"><HelpCircle className="w-5 h-5 text-primary" /><h3 className="font-semibold text-foreground">{t('faq')}</h3></div>
          <Accordion type="single" collapsible className="w-full">
            {faqKeys.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <Button variant="ghost" className="w-full text-destructive hover:text-destructive hover:bg-destructive/10 rounded-xl" onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-2" />{t('logOut')}
        </Button>
      </div>
      <BottomNav />
    </div>
  );
}
