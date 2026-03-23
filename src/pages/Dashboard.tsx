import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Bell, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { BottomNav } from '@/components/BottomNav';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { exercises, quotes, maleQuotes, levelLabels } from '@/data/exercises';
import { Exercise } from '@/types';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);

  const activeQuotes = user?.gender === 'male' ? maleQuotes : quotes;
  const todayQuote = useMemo(() => activeQuotes[new Date().getDay() % activeQuotes.length], [activeQuotes]);

  // Recommend an exercise the user hasn't completed yet
  const filteredExercises = useMemo(() => {
    if (user?.gender === 'male') {
      return exercises.filter(e => !e.goals.every(g => g === 'postpartum' || g === 'pregnant'));
    }
    return exercises;
  }, [user?.gender]);

  const recommended = useMemo(() => {
    const level = user?.currentLevel || 'beginner';
    const levelExercises = filteredExercises.filter(e => e.level === level);
    const uncompleted = levelExercises.filter(e => !user?.completedExercises.includes(e.id));
    return uncompleted.length > 0 ? uncompleted[0] : levelExercises[0];
  }, [user, filteredExercises]);

  const completedCount = user?.completedExercises.length || 0;
  const totalExercises = filteredExercises.length;

  const levels = ['beginner', 'intermediate', 'advanced'] as const;

  if (!user) {
    navigate('/', { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {activeExercise && (
        <VideoPlayer exercise={activeExercise} onClose={() => setActiveExercise(null)} />
      )}

      <div className="max-w-lg mx-auto px-6 pt-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground mt-1">
              Hej, <span className="font-semibold text-foreground">{user.name}</span> 👋
            </p>
          </div>
        </div>

        {/* Today's exercise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground mb-6 shadow-xl"
        >
          <div className="relative z-10">
            <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Dagens øvelse</p>
            <h2 className="text-xl font-display font-bold mt-1">{recommended.title}</h2>
            <p className="text-sm opacity-80 mt-1 line-clamp-2">{recommended.description}</p>
            <Button
              variant="secondary"
              className="mt-4 rounded-xl shadow-md"
              onClick={() => setActiveExercise(recommended)}
            >
              <Play className="w-4 h-4 mr-2" />
              Start øvelse
            </Button>
          </div>
          <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-primary-foreground/10" />
          <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary-foreground/5" />
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Din progression
            </h3>
            <span className="text-xs text-muted-foreground">{completedCount}/{totalExercises} øvelser</span>
          </div>

          <div className="space-y-2">
            {levels.map(level => {
              const lvl = levelLabels[level];
              const levelExercises = filteredExercises.filter(e => e.level === level);
              const completed = levelExercises.filter(e => user.completedExercises.includes(e.id)).length;
              const pct = (completed / levelExercises.length) * 100;

              return (
                <div key={level} className="flex items-center gap-3">
                  <span className="text-sm w-24">{lvl.emoji} {lvl.label}</span>
                  <div className="flex-1 h-2.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-12 text-right">{completed}/{levelExercises.length}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Reminders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-2xl bg-card border border-border mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Påmindelser</p>
                <p className="text-xs text-muted-foreground">
                  {user.reminderTimes.join(' · ')}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate('/profile')} className="text-primary">
              Rediger <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="p-5 rounded-2xl bg-secondary/50 text-center"
        >
          <p className="font-display italic text-foreground text-sm leading-relaxed">{todayQuote}</p>
        </motion.div>

        {/* Quick access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <Button
            variant="outline"
            className="w-full h-14 rounded-2xl justify-between"
            onClick={() => navigate('/library')}
          >
            <span>Se alle videoer</span>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
