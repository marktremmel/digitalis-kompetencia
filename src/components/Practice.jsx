import React, { useState, useMemo } from 'react';
import { useProgress } from '../context/ProgressContext';
import { questions } from '../data/questions';
import { ChevronLeft, CheckCircle2, XCircle, AlertTriangle, ChevronRight } from 'lucide-react';

const gradeOrder = ['5-6', '7-8', '9-11'];

export default function Practice({ onBack }) {
    const { profile, updatePracticeScore } = useProgress();
    const [selectedGrade, setSelectedGrade] = useState(profile.grade);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const isAboveGrade = gradeOrder.indexOf(selectedGrade) > gradeOrder.indexOf(profile.grade);

    const gradeQuestions = useMemo(
        () => questions.filter(q => q.grade === selectedGrade),
        [selectedGrade]
    );
    const currentQ = gradeQuestions[currentIndex];

    const handleSelectGrade = (g) => {
        setSelectedGrade(g);
        setCurrentIndex(0);
        setUserAnswers({});
        setSubmitted(false);
    };

    const handleSubmit = () => {
        setSubmitted(true);
        if (currentQ) {
            const isCorrect = checkAnswer(currentQ, userAnswers[currentQ.id]);
            if (isCorrect) {
                updatePracticeScore(currentQ.id, 100, currentQ.domain);
            } else {
                updatePracticeScore(currentQ.id, 0, currentQ.domain);
            }
        }
    };

    const handleNext = () => {
        setSubmitted(false);
        setCurrentIndex(prev => Math.min(prev + 1, gradeQuestions.length - 1));
    };

    const handlePrev = () => {
        setSubmitted(false);
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    if (!currentQ) {
        return (
            <div className="animate-fade-in py-6">
                <button onClick={onBack} className="btn btn-outline mb-6"><ChevronLeft size={18} /> Vissza</button>
                <div className="glass-panel p-12 text-center">
                    <h3 className="text-2xl font-bold mb-2">Nincs kérdés ehhez az évfolyamhoz</h3>
                    <p className="text-text-muted">Válassz másik évfolyamot, vagy térj vissza később!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in py-6">
            <button onClick={onBack} className="btn btn-outline mb-6"><ChevronLeft size={18} /> Vissza a Dashboardra</button>

            {/* Grade Selector */}
            <div className="flex flex-wrap gap-3 mb-6">
                {gradeOrder.map(g => (
                    <button
                        key={g}
                        onClick={() => handleSelectGrade(g)}
                        className={`btn text-sm ${selectedGrade === g ? 'btn-primary' : 'btn-outline'}`}
                    >
                        {g}. évfolyam
                    </button>
                ))}
            </div>

            {/* Cross-grade Warning */}
            {isAboveGrade && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-warning/10 border border-warning/30 mb-6">
                    <AlertTriangle className="text-warning shrink-0 mt-0.5" size={20} />
                    <p className="text-sm">
                        <strong>Kihívás!</strong> Ez a feladat a te évfolyamod ({profile.grade}) felett van, de nyugodtan próbáld meg! 💪
                    </p>
                </div>
            )}

            {/* Progress Bar */}
            <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-text-muted">{currentIndex + 1} / {gradeQuestions.length}</span>
                <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentIndex + 1) / gradeQuestions.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <div className="glass-panel p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                    <span className="badge badge-warning">{currentQ.domain}</span>
                    <span className="text-xs text-text-muted">{currentQ.type === 'multiple-select' ? 'Több válasz' : currentQ.type === 'dropdown' ? 'Legördülő' : 'Egy válasz'}</span>
                </div>

                <h3 className="text-xl font-bold mb-2">{currentQ.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed">{currentQ.task}</p>

                {/* Render by question type */}
                {currentQ.type === 'multiple-choice' && (
                    <MultipleChoiceQ q={currentQ} userAnswers={userAnswers} setUserAnswers={setUserAnswers} submitted={submitted} />
                )}
                {currentQ.type === 'multiple-select' && (
                    <MultipleSelectQ q={currentQ} userAnswers={userAnswers} setUserAnswers={setUserAnswers} submitted={submitted} />
                )}
                {currentQ.type === 'dropdown' && (
                    <DropdownQ q={currentQ} userAnswers={userAnswers} setUserAnswers={setUserAnswers} submitted={submitted} />
                )}

                {/* Feedback */}
                {submitted && (
                    <div className={`mt-6 p-4 rounded-xl border ${checkAnswer(currentQ, userAnswers[currentQ.id]) ? 'bg-success/10 border-success/30' : 'bg-danger/10 border-danger/30'}`}>
                        <div className="flex items-center gap-2 mb-2">
                            {checkAnswer(currentQ, userAnswers[currentQ.id])
                                ? <><CheckCircle2 className="text-success" size={20} /><span className="font-bold text-success">Helyes! 🎉</span></>
                                : <><XCircle className="text-danger" size={20} /><span className="font-bold text-danger">Nem egészen!</span></>
                            }
                        </div>
                        <p className="text-sm opacity-90">{currentQ.explanation}</p>
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center">
                <button onClick={handlePrev} disabled={currentIndex === 0} className="btn btn-outline text-sm">
                    <ChevronLeft size={16} /> Előző
                </button>
                <div className="flex gap-3">
                    {!submitted ? (
                        <button onClick={handleSubmit} className="btn btn-primary">Ellenőrzés</button>
                    ) : (
                        <button onClick={handleNext} disabled={currentIndex === gradeQuestions.length - 1} className="btn btn-primary">
                            Következő <ChevronRight size={16} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

// === Question Type Components ===

function MultipleChoiceQ({ q, userAnswers, setUserAnswers, submitted }) {
    const selected = userAnswers[q.id] || '';
    return (
        <div className="space-y-3">
            {q.options.map(opt => {
                let classes = 'p-4 rounded-xl border cursor-pointer transition-all ';
                if (submitted) {
                    if (opt === q.correctAnswer) classes += 'border-success bg-success/10 ';
                    else if (opt === selected) classes += 'border-danger bg-danger/10 ';
                    else classes += 'border-white/10 opacity-50 ';
                } else {
                    classes += opt === selected ? 'border-primary bg-primary/10 ' : 'border-white/10 hover:border-primary/40 ';
                }
                return (
                    <div key={opt} className={classes} onClick={() => !submitted && setUserAnswers(prev => ({ ...prev, [q.id]: opt }))}>
                        <span className="text-sm font-medium">{opt}</span>
                    </div>
                );
            })}
        </div>
    );
}

function MultipleSelectQ({ q, userAnswers, setUserAnswers, submitted }) {
    const selected = userAnswers[q.id] || [];
    const toggle = (opt) => {
        if (submitted) return;
        setUserAnswers(prev => {
            const current = prev[q.id] || [];
            return { ...prev, [q.id]: current.includes(opt) ? current.filter(o => o !== opt) : [...current, opt] };
        });
    };

    return (
        <div className="space-y-3">
            {q.options.map(opt => {
                const isSelected = selected.includes(opt);
                const isCorrect = q.correctAnswers.includes(opt);
                let classes = 'p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ';
                if (submitted) {
                    if (isCorrect && isSelected) classes += 'border-success bg-success/10 ';
                    else if (!isCorrect && isSelected) classes += 'border-danger bg-danger/10 ';
                    else if (isCorrect && !isSelected) classes += 'border-warning bg-warning/10 ';
                    else classes += 'border-white/10 opacity-50 ';
                } else {
                    classes += isSelected ? 'border-primary bg-primary/10 ' : 'border-white/10 hover:border-primary/40 ';
                }
                return (
                    <div key={opt} className={classes} onClick={() => toggle(opt)}>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${isSelected ? 'bg-primary border-primary' : 'border-white/30'}`}>
                            {isSelected && <CheckCircle2 size={14} className="text-white" />}
                        </div>
                        <span className="text-sm font-medium">{opt}</span>
                    </div>
                );
            })}
        </div>
    );
}

function DropdownQ({ q, userAnswers, setUserAnswers, submitted }) {
    const answers = userAnswers[q.id] || {};
    return (
        <div className="space-y-5">
            {q.sentences.map((s, i) => {
                const parts = s.text.split('___');
                const userVal = answers[i] || '';
                const isCorrect = userVal === s.correct;
                return (
                    <div key={i} className={`p-4 rounded-xl border transition-all ${submitted ? (isCorrect ? 'border-success bg-success/10' : 'border-danger bg-danger/10') : 'border-white/10'}`}>
                        <p className="text-sm leading-relaxed">
                            {parts[0]}
                            <select
                                value={userVal}
                                disabled={submitted}
                                onChange={(e) => setUserAnswers(prev => ({ ...prev, [q.id]: { ...answers, [i]: e.target.value } }))}
                                className="mx-1 px-3 py-1.5 rounded-lg bg-background border border-white/20 text-text-main font-semibold text-sm focus:border-primary focus:outline-none"
                            >
                                <option value="">válassz...</option>
                                {s.options.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                            {parts[1]}
                        </p>
                        {submitted && !isCorrect && (
                            <p className="text-xs text-danger mt-2">Helyes válasz: <strong>{s.correct}</strong></p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

// === Helper ===
function checkAnswer(q, answer) {
    if (q.type === 'multiple-choice') return answer === q.correctAnswer;
    if (q.type === 'multiple-select') {
        if (!answer || !Array.isArray(answer)) return false;
        return q.correctAnswers.length === answer.length && q.correctAnswers.every(a => answer.includes(a));
    }
    if (q.type === 'dropdown') {
        if (!answer || typeof answer !== 'object') return false;
        return q.sentences.every((s, i) => answer[i] === s.correct);
    }
    return false;
}
