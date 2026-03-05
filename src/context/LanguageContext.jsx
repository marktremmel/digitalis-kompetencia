import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('okm_lang') || 'hu';
    });

    useEffect(() => {
        localStorage.setItem('okm_lang', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'hu' ? 'en' : 'hu'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
