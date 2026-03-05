import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import { tr } from '../data/translations';
import { User, GraduationCap, ChevronRight } from 'lucide-react';

export default function Login() {
    const { login } = useProgress();
    const { language } = useLanguage();
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');

    const t = tr[language];

    const handleLogin = (e) => {
        e.preventDefault();
        if (name.trim() && grade) {
            login(name.trim(), grade);
        }
    };

    return (
        <div className="flex items-center justify-center h-full min-h-[70vh]">
            <div className="glass-panel p-8 max-w-md w-full animate-fade-in text-center">
                <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary-light rounded-full text-primary">
                        <GraduationCap size={48} />
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-2">{t.welcome}</h2>
                <p className="text-muted mb-8">{t.loginDesc}</p>

                <form onSubmit={handleLogin} className="text-left">
                    <div className="input-group">
                        <label className="input-label" htmlFor="name">{t.nameLabel}</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted">
                                <User size={18} />
                            </div>
                            <input
                                id="name"
                                type="text"
                                className="input-field pl-10"
                                placeholder={t.namePlaceholder}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label className="input-label" htmlFor="grade">{t.gradeLabel}</label>
                        <select
                            id="grade"
                            className="input-field"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            required
                        >
                            <option value="" disabled>{t.gradeSelect}</option>
                            <option value="5-6">5-6{language === 'hu' ? '. évfolyam' : 'th grade'}</option>
                            <option value="7-8">7-8{language === 'hu' ? '. évfolyam' : 'th grade'}</option>
                            <option value="9-11">9-11{language === 'hu' ? '. évfolyam' : 'th grade'}</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                        disabled={!name.trim() || !grade}
                    >
                        {t.loginBtn}
                        <ChevronRight size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
}
