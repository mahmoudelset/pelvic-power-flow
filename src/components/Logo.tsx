import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl',
  };

  const { user } = useAuth();
  const isMale = user?.gender === 'male';

  const iconSize = size === 'lg' ? 'w-12 h-12' : size === 'md' ? 'w-9 h-9' : 'w-6 h-6';

  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {isMale ? (
          <svg viewBox="0 0 40 48" className={iconSize} fill="none">
            {/* Stem & leaf */}
            <path
              d="M20 2 C20 2, 18 6, 20 8 M16 5 C18 3, 22 3, 24 5 C23 4, 21 6, 20 6 C19 6, 17 4, 16 5Z"
              fill="hsl(var(--primary))"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
            />
            {/* Aubergine body */}
            <ellipse
              cx="20" cy="26" rx="11" ry="18"
              fill="hsl(var(--primary))"
              fillOpacity="0.15"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
            />
            <ellipse
              cx="20" cy="26" rx="8" ry="15"
              fill="hsl(var(--primary))"
              fillOpacity="0.4"
            />
            <ellipse
              cx="20" cy="26" rx="5" ry="12"
              fill="hsl(var(--primary))"
            />
            {/* Highlight */}
            <ellipse
              cx="16" cy="22" rx="2" ry="5"
              fill="hsl(var(--primary-foreground))"
              fillOpacity="0.2"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 40 40" className={iconSize} fill="none">
            <circle cx="20" cy="20" r="18" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--secondary))" fillOpacity="0.3" />
            <path
              d="M20 8 C14 14, 10 20, 14 28 C16 32, 20 34, 20 34 C20 34, 24 32, 26 28 C30 20, 26 14, 20 8Z"
              fill="hsl(var(--primary))"
              fillOpacity="0.6"
            />
            <path
              d="M20 12 C17 16, 14 20, 17 26 C18 29, 20 30, 20 30 C20 30, 22 29, 23 26 C26 20, 23 16, 20 12Z"
              fill="hsl(var(--primary))"
            />
          </svg>
        )}
      </div>
      <span className={`font-display font-bold text-foreground ${sizes[size]}`}>
        Pelvic <span className="text-primary">Power</span>
      </span>
    </motion.div>
  );
}
