import React, { useState, useEffect } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Moon, Sun } from 'lucide-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function AppContent() {
  const { profile } = useProgress();
  const [theme, setTheme] = useState(localStorage.getItem('okm_theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('okm_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div className="min-h-screen">
      <header className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gradient">OKM Képességfejlesztő</h1>
        <div className="flex gap-4 items-center">
          {profile && (
            <span className="hidden sm:inline text-sm font-medium text-text-muted">
              {profile.name} <span className="text-primary font-semibold">({profile.grade})</span>
            </span>
          )}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 pb-12">
        {!profile ? <Login /> : <Dashboard />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
