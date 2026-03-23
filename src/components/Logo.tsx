import { motion } from 'framer-motion';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl',
  };

  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <svg
          viewBox="0 0 40 40"
          className={size === 'lg' ? 'w-12 h-12' : size === 'md' ? 'w-9 h-9' : 'w-6 h-6'}
          fill="none"
        >
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
      </div>
      <span className={`font-display font-bold text-foreground ${sizes[size]}`}>
        Pelvic <span className="text-primary">Power</span>
      </span>
    </motion.div>
  );
}
