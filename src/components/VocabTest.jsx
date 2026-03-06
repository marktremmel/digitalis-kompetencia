import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { tr } from '../data/translations';
import { AlertTriangle, CheckCircle2, ChevronRight, Brain, RotateCcw } from 'lucide-react';

export default function VocabTest({ vocabList, onBack }) {
    const { progress, markVocabViewed } = useProgress();
    const { language } = useLanguage();
    const t = tr[language];

    const [testPhase, setTestPhase] = useState('menu'); // menu | playing | results
    const [testMode, setTestMode] = useState(null); // 'known' | 'unknown'
    const [pile, setPile] = useState([]);

    // For the current question
    const [options, setOptions] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [showCorrection, setShowCorrection] = useState(false);

    const knownIds = progress.vocabViewed;

    const startTest = (mode) => {
        setTestMode(mode);
        // Build the deck
        let deck = [];
        if (mode === 'known') {
            deck = vocabList.filter(v => knownIds.includes(v.id));
        } else {
            deck = vocabList.filter(v => !knownIds.includes(v.id));
        }

        // Shuffle deck
        deck = [...deck].sort(() => Math.random() - 0.5);
        setPile(deck);

        if (deck.length > 0) {
            setTestPhase('playing');
            prepareQuestion(deck[0]);
        }
    };

    const prepareQuestion = (currentCard) => {
        // Pick 3 random wrong definitions
        const others = vocabList.filter(v => v.id !== currentCard.id);
        const shuffledOthers = [...others].sort(() => Math.random() - 0.5).slice(0, 3);

        // Combine and shuffle options
        const allOpts = [currentCard, ...shuffledOthers].sort(() => Math.random() - 0.5);

        setOptions(allOpts);
        setSelectedId(null);
        setShowCorrection(false);
    };

    const handleSelectOption = (optId) => {
        if (showCorrection) return;

        setSelectedId(optId);
        setShowCorrection(true);
    };

    const handleNext = () => {
        const currentCard = pile[0];

        if (selectedId === currentCard.id) {
            // Correct! Mark as viewed and remove from pile
            markVocabViewed(currentCard.id);
            const newPile = pile.slice(1);
            if (newPile.length === 0) {
                setTestPhase('results');
            } else {
                setPile(newPile);
                prepareQuestion(newPile[0]);
            }
        } else {
            // Incorrect! Move to the end of the pile to test again
            const newPile = [...pile.slice(1), currentCard];
            setPile(newPile);
            prepareQuestion(newPile[0]);
        }
    };

    if (testPhase === 'menu') {
        const knownCount = vocabList.filter(v => knownIds.includes(v.id)).length;
        const unknownCount = vocabList.length - knownCount;

        return (
            <div className="glass-panel p-8 max-w-2xl mx-auto mt-8 animate-fade-in text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/20 rounded-full">
                        <Brain size={48} className="text-primary" />
                    </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">{t.startVocabTest}</h3>
                <p className="text-text-muted mb-8">{t.vocabSubtitle}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => startTest('known')}
                        className="btn btn-outline flex flex-col items-center py-6 px-8 h-auto gap-2"
                        disabled={knownCount === 0}
                    >
                        <span className="font-bold text-lg">{t.testKnownCards}</span>
                        <span className="badge bg-primary/20 text-text-main">{knownCount} db</span>
                    </button>
                    <button
                        onClick={() => startTest('unknown')}
                        className="btn btn-primary flex flex-col items-center py-6 px-8 h-auto gap-2"
                        disabled={unknownCount === 0}
                    >
                        <span className="font-bold text-lg">{t.testUnknownCards}</span>
                        <span className="badge bg-white/20 text-white">{unknownCount} db</span>
                    </button>
                </div>

                <button onClick={onBack} className="mt-8 text-sm text-text-muted hover:text-primary transition-colors underline">
                    {t.backToDictionary}
                </button>
            </div>
        );
    }

    if (testPhase === 'results') {
        return (
            <div className="glass-panel p-12 max-w-2xl mx-auto mt-8 animate-fade-in text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-success/20 rounded-full">
                        <CheckCircle2 size={56} className="text-success" />
                    </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">{t.testFinished}</h3>
                <p className="text-text-muted mb-8">
                    {testMode === 'known'
                        ? 'Nagyszerű munka! Felfrissítetted az ismereteidet.'
                        : 'Sikeresen megtanultad ezeket az új fogalmakat!'}
                </p>
                <div className="flex gap-4 justify-center">
                    <button onClick={() => setTestPhase('menu')} className="btn btn-outline">
                        <RotateCcw size={18} /> Újabb teszt
                    </button>
                    <button onClick={onBack} className="btn btn-primary">
                        {t.backToDictionary}
                    </button>
                </div>
            </div>
        );
    }

    // RUNNING PHASE
    const currentCard = pile[0];
    if (!currentCard) return null;

    return (
        <div className="max-w-3xl mx-auto mt-8 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => setTestPhase('menu')} className="text-sm text-text-muted hover:text-white transition-colors">
                    &larr; {t.back}
                </button>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-text-muted">{t.cardsRemaining}</span>
                    <span className="badge badge-warning">{pile.length}</span>
                </div>
            </div>

            <div className="glass-panel p-8 text-center mb-6 border-b-4 border-b-primary/50">
                <p className="text-sm text-primary font-bold tracking-widest uppercase mb-2">{currentCard.category}</p>
                <h2 className="text-4xl font-black">{currentCard.term}</h2>
            </div>

            <h4 className="font-bold text-lg mb-4 ml-2">{t.selectDefinition}</h4>

            <div className="space-y-3">
                {options.map(opt => {
                    let btnClass = "w-full text-left p-5 rounded-xl border transition-all duration-300 text-sm md:text-base leading-relaxed ";

                    if (!showCorrection) {
                        btnClass += "bg-white/5 border-white/10 hover:border-primary/50 hover:bg-primary/5 cursor-pointer";
                    } else {
                        // Feedback mode
                        if (opt.id === currentCard.id) {
                            btnClass += "bg-success/20 border-success/50 text-white font-semibold shadow-[0_0_15px_rgba(34,197,94,0.2)]"; // The correct answer
                        } else if (opt.id === selectedId) {
                            btnClass += "bg-danger/20 border-danger/50 text-white opacity-80"; // The wrong answer user picked
                        } else {
                            btnClass += "bg-white/5 border-white/5 opacity-50"; // Other wrong answers
                        }
                    }

                    return (
                        <button
                            key={opt.id}
                            onClick={() => handleSelectOption(opt.id)}
                            className={btnClass}
                            disabled={showCorrection}
                        >
                            {opt.definition}
                        </button>
                    );
                })}
            </div>

            {showCorrection && (
                <div className="mt-8 flex justify-end animate-fade-in">
                    <button onClick={handleNext} className="btn btn-primary px-8 py-4 text-lg w-full sm:w-auto flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                        {t.continueTest} <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
}
