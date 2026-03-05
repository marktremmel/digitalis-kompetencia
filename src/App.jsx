import React, { useState, useEffect } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Moon, Sun, Globe } from 'lucide-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function AppContent() {
  const { profile } = useProgress();
  const { language, toggleLanguage } = useLanguage();
  const [theme, setTheme] = useState(localStorage.getItem('okm_theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('okm_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const titleText = language === 'hu' ? 'OKM Képességfejlesztő' : 'OKM Skills Builder';

  return (
    <div className="min-h-screen">
      <header className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gradient">{titleText}</h1>
        <div className="flex gap-4 items-center">
          {profile && (
            <span className="hidden sm:inline text-sm font-medium text-text-muted">
              {profile.name} <span className="text-primary font-semibold">({profile.grade})</span>
            </span>
          )}

          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 font-medium rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all text-sm"
            aria-label="Toggle Language"
            title={language === 'hu' ? 'Switch to English' : 'Magyarra váltás'}
          >
            <Globe size={16} className={language === 'en' ? 'text-blue-500' : 'text-green-600'} />
            <span className="uppercase">{language}</span>
          </button>

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
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ProgressProvider>
  );
}
