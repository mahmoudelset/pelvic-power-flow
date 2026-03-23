import { Link, useLocation } from 'react-router-dom';
import { Home, PlayCircle, User } from 'lucide-react';

const navItems = [
  { path: '/dashboard', icon: Home, label: 'Hjem' },
  { path: '/library', icon: PlayCircle, label: 'Videoer' },
  { path: '/profile', icon: User, label: 'Profil' },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-4">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
