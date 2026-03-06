import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getVocabularyData } from '../data/vocabulary';
import { tr } from '../data/translations';
import { Search, Info, CheckCircle2, Brain } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import VocabTest from './VocabTest';

export default function Vocabulary({ onBack }) {
    const { progress, markVocabViewed } = useProgress();
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [viewMode, setViewMode] = useState('dictionary'); // dictionary | test

    const t = tr[language];
    const vocabularyData = getVocabularyData(language);

    const categories = ['All', ...new Set(vocabularyData.map(v => v.category))];

    const filteredVocab = vocabularyData.filter(v => {
        const matchesSearch = v.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            v.definition.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || v.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const handleRead = (id) => {
        markVocabViewed(id);
    };

    if (viewMode === 'test') {
        return <VocabTest vocabList={vocabularyData} onBack={() => setViewMode('dictionary')} />;
    }

    return (
        <div className="animate-fade-in py-6">
            <button onClick={onBack} className="btn btn-outline mb-6">
                &larr; {t.backToDash}
            </button>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-2">{t.vocabTitleText}</h2>
                    <p className="text-text-muted">{t.vocabSubtitle}</p>
                </div>

                <button
                    onClick={() => setViewMode('test')}
                    className="btn btn-primary flex items-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-shadow"
                >
                    <Brain size={18} /> {t.startVocabTest}
                </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-white/5 hover:bg-white/10 text-text-muted hover:text-white'}`}
                        >
                            {cat === 'All' ? t.allCategory : cat}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-64 shrink-0">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" size={18} />
                    <input
                        type="text"
                        placeholder={t.searchPlaceholder}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredVocab.map(item => {
                    const isViewed = progress.vocabViewed.includes(item.id);

                    return (
                        <div
                            key={item.id}
                            className={`glass-panel p-6 relative overflow-hidden transition-all ${isViewed ? 'border-success/30' : ''}`}
                        >
                            {isViewed && <CheckCircle2 className="absolute top-4 right-4 text-success opacity-50" size={20} />}

                            <div className="flex items-center gap-2 mb-2">
                                <span className="badge badge-warning">{item.category}</span>
                                {item.essential && <span className="badge bg-primary/10 text-primary">{t.essentialSkill}</span>}
                            </div>

                            <h3 className="text-xl font-bold mb-2 pr-8">{item.term}</h3>
                            <p className="text-text-main/80 mb-4">{item.definition}</p>

                            {item.didYouKnow && (
                                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 mt-4">
                                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                                        <Info size={16} /> {t.didYouKnowText}
                                    </div>
                                    <p className="text-sm">{item.didYouKnow}</p>
                                </div>
                            )}

                            {!isViewed && (
                                <button
                                    onClick={() => handleRead(item.id)}
                                    className="btn btn-secondary w-full mt-4 text-sm"
                                >
                                    {t.understoodBtn}
                                </button>
                            )}
                        </div>
                    );
                })}

                {filteredVocab.length === 0 && (
                    <div className="col-span-full text-center py-12 text-muted">
                        {t.noResult}
                    </div>
                )}
            </div>
        </div>
    );
}
