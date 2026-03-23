import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BottomNav } from '@/components/BottomNav';
import { VideoCard } from '@/components/VideoCard';
import { VideoPlayer } from '@/components/VideoPlayer';
import { exercises, levelLabels } from '@/data/exercises';
import { Exercise, Level } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';

export default function VideoLibrary() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  const [activeLevel, setActiveLevel] = useState<Level>(user?.currentLevel || 'beginner');
  const { t } = useTranslation();

  if (!user) { navigate('/', { replace: true }); return null; }

  return (
    <div className="min-h-screen bg-background pb-24">
      {activeExercise && <VideoPlayer exercise={activeExercise} onClose={() => setActiveExercise(null)} />}
      <div className="max-w-lg mx-auto px-6 pt-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-display font-bold text-foreground mb-1">{t('videoLibrary')}</h1>
          <p className="text-sm text-muted-foreground mb-6">{t('allExercisesChooseLevel')}</p>
        </motion.div>
        <Tabs value={activeLevel} onValueChange={v => setActiveLevel(v as Level)}>
          <TabsList className="w-full rounded-2xl h-12 bg-secondary/80 p-1">
            {(['beginner', 'intermediate', 'advanced'] as const).map(level => (
              <TabsTrigger key={level} value={level} className="flex-1 rounded-xl text-xs font-semibold data-[state=active]:bg-card data-[state=active]:shadow-sm">
                {levelLabels[level].emoji} {t(`level${level.charAt(0).toUpperCase() + level.slice(1)}` as any)}
              </TabsTrigger>
            ))}
          </TabsList>
          {(['beginner', 'intermediate', 'advanced'] as const).map(level => (
            <TabsContent key={level} value={level} className="mt-6">
              <div className="grid grid-cols-2 gap-4">
                {exercises.filter(e => e.level === level).map((exercise, i) => (
                  <VideoCard key={exercise.id} exercise={exercise} onPlay={setActiveExercise} index={i} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <BottomNav />
    </div>
  );
}
