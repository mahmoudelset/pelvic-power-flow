import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserProfile, Goal, Gender } from '@/types';

const DEFAULT_PROFILE: UserProfile = {
  name: '',
  email: '',
  gender: 'female',
  goal: 'general',
  currentLevel: 'beginner',
  completedExercises: [],
  reminderTimes: ['08:00', '13:00', '20:00'],
  isSubscribed: false,
  joinedAt: new Date().toISOString(),
};

interface AuthContextType {
  user: UserProfile | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string, gender: Gender, goal: Goal) => void;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  completeExercise: (exerciseId: string) => void;
  subscribe: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('pelvic-power-user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('pelvic-power-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('pelvic-power-user');
    }
  }, [user]);

  // Apply gender-based theme
  useEffect(() => {
    if (user?.gender === 'male') {
      document.documentElement.classList.add('theme-male');
    } else {
      document.documentElement.classList.remove('theme-male');
    }
  }, [user?.gender]);

  const login = (email: string, _password: string) => {
    const saved = localStorage.getItem('pelvic-power-user');
    if (saved) {
      setUser(JSON.parse(saved));
    } else {
      setUser({ ...DEFAULT_PROFILE, email, name: email.split('@')[0] });
    }
  };

  const signup = (name: string, email: string, _password: string, gender: Gender, goal: Goal) => {
    setUser({ ...DEFAULT_PROFILE, name, email, gender, goal, joinedAt: new Date().toISOString() });
  };

  const logout = () => {
    document.documentElement.classList.remove('theme-male');
    setUser(null);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setUser(prev => prev ? { ...prev, ...updates } : null);
  };

  const completeExercise = (exerciseId: string) => {
    setUser(prev => {
      if (!prev) return null;
      const completed = prev.completedExercises.includes(exerciseId)
        ? prev.completedExercises
        : [...prev.completedExercises, exerciseId];
      return { ...prev, completedExercises: completed };
    });
  };

  const subscribe = () => {
    setUser(prev => prev ? { ...prev, isSubscribed: true } : null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, signup, logout, updateProfile, completeExercise, subscribe }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
