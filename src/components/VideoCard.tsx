import { motion } from 'framer-motion';
import { Play, Check } from 'lucide-react';
import { Exercise } from '@/types';
import { levelLabels } from '@/data/exercises';
import { useAuth } from '@/context/AuthContext';

interface VideoCardProps {
  exercise: Exercise;
  onPlay: (exercise: Exercise) => void;
  index?: number;
}

export function VideoCard({ exercise, onPlay, index = 0 }: VideoCardProps) {
  const { user } = useAuth();
  const level = levelLabels[exercise.level];
  const isCompleted = user?.completedExercises.includes(exercise.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group cursor-pointer"
      onClick={() => onPlay(exercise)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-secondary/50 aspect-video mb-3">
        {/* Placeholder thumbnail with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-primary/10 flex items-center justify-center">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform shadow-lg">
              {isCompleted ? (
                <Check className="w-6 h-6 text-primary-foreground" />
              ) : (
                <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
              )}
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              {Math.floor(exercise.duration / 60)}:{(exercise.duration % 60).toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Level badge */}
        <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${level.color}`}>
          {level.emoji} {level.label}
        </div>

        {isCompleted && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            ✓ Gennemført
          </div>
        )}
      </div>

      <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">{exercise.title}</h3>
      <p className="text-xs text-muted-foreground line-clamp-2">{exercise.description}</p>
    </motion.div>
  );
}
