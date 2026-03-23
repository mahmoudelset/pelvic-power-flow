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
import { LogOut, Crown, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/', { replace: true });
    return null;
  }

  const [times, setTimes] = useState(user.reminderTimes);

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
