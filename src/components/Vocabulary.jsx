import React, { useState } from 'react';
import { vocabularyData } from '../data/vocabulary';
import { Search, Info, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

export default function Vocabulary({ onBack }) {
    const { progress, markVocabViewed } = useProgress();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

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

    return (
        <div className="animate-fade-in py-6">
            <button onClick={onBack} className="btn btn-outline mb-6">
                &larr; Vissza a Dashboardra
            </button>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-bold">Szótár & Tudástár</h2>
                    <p className="text-muted">Ismerd meg a legfontosabb digitális fogalmakat.</p>
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
                    <input
                        type="text"
                        placeholder="Keresés..."
                        className="input-field pl-10 w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`btn ${activeCategory === cat ? 'btn-primary' : 'bg-card-bg border border-card-border hover:border-primary'}`}
                        style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}
                    >
                        {cat}
                    </button>
                ))}
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
                                {item.essential && <span className="badge bg-primary/10 text-primary">Essential Skill</span>}
                            </div>

                            <h3 className="text-xl font-bold mb-2 pr-8">{item.term}</h3>
                            <p className="text-text-main/80 mb-4">{item.definition}</p>

                            {item.didYouKnow && (
                                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 mt-4">
                                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                                        <Info size={16} /> Tudtad?
                                    </div>
                                    <p className="text-sm">{item.didYouKnow}</p>
                                </div>
                            )}

                            {!isViewed && (
                                <button
                                    onClick={() => handleRead(item.id)}
                                    className="btn btn-secondary w-full mt-4 text-sm"
                                >
                                    Megértettem & Elolvastam
                                </button>
                            )}
                        </div>
                    );
                })}

                {filteredVocab.length === 0 && (
                    <div className="col-span-full text-center py-12 text-muted">
                        Nem találtunk a keresésnek megfelelő fogalmat.
                    </div>
                )}
            </div>
        </div>
    );
}
