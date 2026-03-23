import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Exercise } from '@/types';
import { levelLabels } from '@/data/exercises';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

interface VideoPlayerProps {
  exercise: Exercise;
  onClose: () => void;
}

export function VideoPlayer({ exercise, onClose }: VideoPlayerProps) {
  const { completeExercise, user } = useAuth();
  const [timeLeft, setTimeLeft] = useState(exercise.duration);
  const [isPlaying, setIsPlaying] = useState(true);
  const isCompleted = user?.completedExercises.includes(exercise.id);
  const level = levelLabels[exercise.level];

  useEffect(() => {
    if (!isPlaying || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const progress = ((exercise.duration - timeLeft) / exercise.duration) * 100;

  const handleComplete = () => {
    completeExercise(exercise.id);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-foreground/95 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 text-primary-foreground">
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${level.color}`}>
            {level.emoji} {level.label}
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-primary-foreground/10 transition">
            <X className="w-6 h-6 text-primary-foreground" />
          </button>
        </div>

        {/* Video area (placeholder) */}
        <div className="flex-1 flex items-center justify-center px-6">
          <motion.div
            className="w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10 flex items-center justify-center"
            animate={isPlaying ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-primary-foreground mb-2">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </div>
              <p className="text-primary-foreground/70 text-sm">
                {isPlaying ? 'Følg med i øvelsen...' : 'Pauset'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="px-6">
          <div className="w-full h-1.5 rounded-full bg-primary-foreground/20 overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Info & Controls */}
        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-xl font-display font-bold text-primary-foreground">{exercise.title}</h2>
            <p className="text-sm text-primary-foreground/60 mt-1">{exercise.description}</p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? 'Pause' : 'Fortsæt'}
            </Button>
            <Button
              className="flex-1"
              onClick={handleComplete}
              disabled={isCompleted}
            >
              <Check className="w-4 h-4 mr-1" />
              {isCompleted ? 'Gennemført' : 'Markér som færdig'}
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
