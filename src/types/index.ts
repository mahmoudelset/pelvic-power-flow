export type Level = 'beginner' | 'intermediate' | 'advanced';
export type Gender = 'male' | 'female';
export type Goal = 'postpartum' | 'pregnant' | 'general' | 'sexual-health' | 'prostate';

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
  gender: Gender;
  goal: Goal;
  currentLevel: Level;
  completedExercises: string[];
  reminderTimes: [string, string, string];
  isSubscribed: boolean;
  joinedAt: string;
}
