export type Level = 'beginner' | 'intermediate' | 'advanced';
export type Goal = 'postpartum' | 'pregnant' | 'general' | 'sexual-health';

export interface Exercise {
  id: string;
  title: string;
  description: string;
  duration: number; // seconds
  level: Level;
  goals: Goal[];
  thumbnail: string;
}

export interface UserProfile {
  name: string;
  email: string;
  goal: Goal;
  currentLevel: Level;
  completedExercises: string[];
  reminderTimes: [string, string, string];
  isSubscribed: boolean;
  joinedAt: string;
}
