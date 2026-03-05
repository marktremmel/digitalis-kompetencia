import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import { tr } from '../data/translations';
import { DOMAIN_TRANSLATIONS } from '../data/questions';
import { Library, LayoutList, Trophy, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import Vocabulary from './Vocabulary';
import Practice from './Practice';
import Exam from './Exam';
import Certificate from './Certificate';

export default function Dashboard() {
    const { profile, progress, logout } = useProgress();
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState('overview');

    const t = tr[language];

    const capabilities = [
        { key: 'Digitális írástudás', level: progress.capabilities['Digitális írástudás'] },
        { key: 'Adat- és adatbázis-kezelés', level: progress.capabilities['Adat- és adatbázis-kezelés'] },
        { key: 'Algoritmizálás', level: progress.capabilities['Algoritmizálás'] },
        { key: 'IT Eszközök', level: progress.capabilities['IT Eszközök'] },
    ].map(cap => ({
        ...cap,
        name: language === 'hu' ? cap.key : (DOMAIN_TRANSLATIONS[cap.key] || cap.key)
    }));

    if (activeTab === 'vocabulary') return <Vocabulary onBack={() => setActiveTab('overview')} />;
    if (activeTab === 'practice') return <Practice onBack={() => setActiveTab('overview')} />;
    if (activeTab === 'exam') return <Exam onBack={() => setActiveTab('overview')} />;
    if (activeTab === 'certificate') return <Certificate onBack={() => setActiveTab('overview')} />;

    const cards = [
        {
            id: 'vocabulary',
            title: t.vocabTitle,
            desc: t.vocabDesc,
            icon: Library,
            iconBg: 'bg-primary-light',
            iconColor: 'text-primary',
            hoverColor: 'group-hover:text-primary',
        },
        {
            id: 'practice',
            title: t.practiceTitle,
            desc: t.practiceDesc,
            icon: LayoutList,
            iconBg: 'bg-primary',
            iconColor: 'text-white',
            hoverColor: 'group-hover:text-primary',
            highlight: true,
        },
        {
            id: 'exam',
            title: t.examTitle,
            desc: t.examDesc,
            icon: FileText,
            iconBg: 'bg-warning/20',
            iconColor: 'text-warning',
            hoverColor: 'group-hover:text-warning',
        },
        {
            id: 'certificate',
            title: t.certTitle,
            desc: t.certDesc,
            icon: Trophy,
            iconBg: 'bg-success/20',
            iconColor: 'text-success',
            hoverColor: 'group-hover:text-success',
        },
    ];

    return (
        <div className="animate-fade-in py-8">
            {/* Welcome Banner */}
            <div className="glass-panel p-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-2">{t.hello}, {profile.name}! 👋</h2>
                    <p className="text-text-muted">
                        {t.yourGrade} <span className="font-semibold text-primary">{profile.grade}{language === 'hu' ? t.gradeSuffix : ''}</span>
                    </p>
                    <p className="mt-2 text-sm max-w-2xl opacity-80">
                        {t.dashDesc}
                    </p>
                </div>
                <button onClick={logout} className="btn btn-outline text-sm shrink-0">
                    {t.logout}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Actions */}
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-6">{t.whatToDo}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cards.map(card => {
                            const Icon = card.icon;
                            return (
                                <div
                                    key={card.id}
                                    onClick={() => setActiveTab(card.id)}
                                    className={`glass-panel p-6 cursor-pointer group transition-all hover:border-primary/40 ${card.highlight ? 'border-primary/30 bg-primary/5' : ''}`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-xl ${card.iconBg} ${card.iconColor}`}>
                                            <Icon size={24} />
                                        </div>
                                        <ChevronRight className={`text-text-muted ${card.hoverColor} transition-all group-hover:translate-x-1`} />
                                    </div>
                                    <h4 className="text-lg font-bold mb-1">{card.title}</h4>
                                    <p className="text-sm text-text-muted leading-relaxed">{card.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Gamified Progress */}
                <div className="glass-panel p-6">
                    <h3 className="text-xl font-bold mb-6 border-b pb-4 border-white/10">{t.levelsTitle}</h3>
                    <p className="text-sm text-text-muted mb-6">
                        {t.levelsDesc}
                    </p>
                    <div className="space-y-5">
                        {capabilities.map(cap => (
                            <div key={cap.key} className="relative">
                                <div className="flex justify-between items-end mb-1.5 gap-2">
                                    <span className="font-semibold text-sm truncate">{cap.name}</span>
                                    <span className="text-xs font-bold text-primary shrink-0">{Math.floor(cap.level)} / 6{t.levelSuffix}</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-primary to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${(cap.level / 6) * 100}%` }}
                                    />
                                </div>
                                {cap.level >= 6 && <CheckCircle2 size={16} className="absolute -left-5 top-1 text-success" />}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-4 bg-primary/10 rounded-xl">
                        <h4 className="font-bold text-sm text-primary mb-1">{t.tipTitle}</h4>
                        <p className="text-xs opacity-80">
                            {t.tipDesc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
