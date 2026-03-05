import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import { getQuestions, DOMAIN_TRANSLATIONS } from '../data/questions';
import { tr } from '../data/translations';
import { ChevronLeft, Clock, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

const EXAM_TIME = 5 * 60; // 5 minutes in seconds
const EXAM_COUNT = 15;

export default function Exam({ onBack }) {
    const { profile, recordExam } = useProgress();
    const { language } = useLanguage();
    const [phase, setPhase] = useState('intro'); // intro | running | results
    const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});

    const t = tr[language];
    const questions = getQuestions(language);

    const examQuestions = useMemo(() => {
        const pool = questions.filter(q => q.grade === profile.grade);
        const shuffled = [...pool].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, EXAM_COUNT);
    }, [profile.grade, questions]);

    // Timer
    useEffect(() => {
        if (phase !== 'running') return;
        if (timeLeft <= 0) { finishExam(); return; }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [phase, timeLeft]);

    const finishExam = useCallback(() => {
        setPhase('results');
        // Calculate score
        let correct = 0;
        const weakAreas = new Set();
        examQuestions.forEach(q => {
            if (checkAnswer(q, userAnswers[q.id])) {
                correct++;
            } else {
                weakAreas.add(q.domain);
            }
        });
        recordExam({
            date: new Date().toISOString(),
            score: Math.round((correct / examQuestions.length) * 100),
            weakAreas: [...weakAreas],
            total: examQuestions.length,
            correct,
        });
    }, [examQuestions, userAnswers, recordExam]);

    const currentQ = examQuestions[currentIndex];
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const displayedDomain = currentQ ? (language === 'hu' ? currentQ.domain : (DOMAIN_TRANSLATIONS[currentQ.domain] || currentQ.domain)) : '';

    // Intro Screen
    if (phase === 'intro') {
        return (
            <div className="animate-fade-in py-6">
                <button onClick={onBack} className="btn btn-outline mb-6"><ChevronLeft size={18} /> {t.back}</button>
                <div className="glass-panel p-12 text-center max-w-2xl mx-auto">
                    <div className="p-4 bg-warning/20 rounded-full inline-flex mb-6">
                        <Clock size={48} className="text-warning" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{t.examStartTitle}</h2>
                    <p className="text-text-muted mb-2">{t.yourGrade.replace(':', '')}: <strong className="text-primary">{profile.grade}{language === 'hu' ? t.gradeSuffix : ''}</strong></p>
                    <p className="text-text-muted mb-8 max-w-md mx-auto">
                        {examQuestions.length} {t.examStartDesc1} <strong>{t.timeLimitOption}</strong> {t.examStartDesc2}
                    </p>
                    <button onClick={() => setPhase('running')} className="btn btn-primary text-lg px-8 py-4">
                        {t.startExamBtn}
                    </button>
                </div>
            </div>
        );
    }

    // Results Screen
    if (phase === 'results') {
        let correct = 0;
        const weakAreas = new Set();
        examQuestions.forEach(q => {
            if (checkAnswer(q, userAnswers[q.id])) correct++;
            else weakAreas.add(q.domain);
        });
        const pct = Math.round((correct / examQuestions.length) * 100);

        return (
            <div className="animate-fade-in py-6">
                <button onClick={onBack} className="btn btn-outline mb-6"><ChevronLeft size={18} /> {t.back}</button>
                <div className="glass-panel p-12 text-center max-w-2xl mx-auto">
                    <div className={`p-4 rounded-full inline-flex mb-6 ${pct >= 70 ? 'bg-success/20' : 'bg-danger/20'}`}>
                        {pct >= 70
                            ? <CheckCircle2 size={48} className="text-success" />
                            : <AlertTriangle size={48} className="text-danger" />
                        }
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{t.examResultTitle}</h2>
                    <p className="text-6xl font-black text-gradient mb-4">{pct}%</p>
                    <p className="text-text-muted mb-8">{correct} / {examQuestions.length} {t.correctAnswersCount}</p>

                    {weakAreas.size > 0 && (
                        <div className="text-left bg-warning/10 border border-warning/30 rounded-xl p-6 mb-8">
                            <h4 className="font-bold mb-2 flex items-center gap-2">
                                <AlertTriangle size={18} className="text-warning" /> {t.weakAreas}
                            </h4>
                            <ul className="space-y-1">
                                {[...weakAreas].map(area => (
                                    <li key={area} className="text-sm text-text-muted">• {language === 'hu' ? area : (DOMAIN_TRANSLATIONS[area] || area)}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Review answers */}
                    <div className="text-left space-y-4">
                        <h4 className="font-bold mb-2">{t.questionReview}</h4>
                        {examQuestions.map((q, i) => {
                            const isCorrect = checkAnswer(q, userAnswers[q.id]);
                            return (
                                <div key={q.id} className={`p-4 rounded-xl border ${isCorrect ? 'border-success/30 bg-success/5' : 'border-danger/30 bg-danger/5'}`}>
                                    <div className="flex items-start gap-2">
                                        {isCorrect ? <CheckCircle2 size={16} className="text-success mt-0.5 shrink-0" /> : <XCircle size={16} className="text-danger mt-0.5 shrink-0" />}
                                        <div>
                                            <p className="text-sm font-semibold">{i + 1}. {q.title}</p>
                                            <p className="text-xs text-text-muted mt-1">{q.explanation}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    // Running Screen
    return (
        <div className="animate-fade-in py-6">
            {/* Timer Bar */}
            <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-text-muted">{t.questionWord} {currentIndex + 1} / {examQuestions.length}</span>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm ${timeLeft < 60 ? 'bg-danger/20 text-danger' : 'bg-primary/10 text-primary'}`}>
                    <Clock size={16} />
                    {minutes}:{seconds.toString().padStart(2, '0')}
                </div>
            </div>

            <div className="w-full bg-white/10 rounded-full h-1.5 mb-6 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-purple-500 h-1.5 rounded-full transition-all" style={{ width: `${((currentIndex + 1) / examQuestions.length) * 100}%` }} />
            </div>

            {/* Question */}
            <div className="glass-panel p-8 mb-6">
                <span className="badge badge-warning mb-4">{displayedDomain}</span>
                <h3 className="text-xl font-bold mb-2">{currentQ.title}</h3>
                <p className="text-text-muted mb-6">{currentQ.task}</p>

                {currentQ.type === 'multiple-choice' && (
                    <div className="space-y-3">
                        {currentQ.options.map(opt => (
                            <div
                                key={opt}
                                onClick={() => setUserAnswers(prev => ({ ...prev, [currentQ.id]: opt }))}
                                className={`p-4 rounded-xl border cursor-pointer transition-all ${(userAnswers[currentQ.id] || '') === opt ? 'border-primary bg-primary/10' : 'border-white/10 hover:border-primary/40'}`}
                            >
                                <span className="text-sm font-medium">{opt}</span>
                            </div>
                        ))}
                    </div>
                )}

                {currentQ.type === 'multiple-select' && (
                    <div className="space-y-3">
                        {currentQ.options.map(opt => {
                            const sel = userAnswers[currentQ.id] || [];
                            const isSel = sel.includes(opt);
                            return (
                                <div
                                    key={opt}
                                    onClick={() => {
                                        setUserAnswers(prev => {
                                            const c = prev[currentQ.id] || [];
                                            return { ...prev, [currentQ.id]: isSel ? c.filter(o => o !== opt) : [...c, opt] };
                                        });
                                    }}
                                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${isSel ? 'border-primary bg-primary/10' : 'border-white/10 hover:border-primary/40'}`}
                                >
                                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${isSel ? 'bg-primary border-primary' : 'border-white/30'}`}>
                                        {isSel && <CheckCircle2 size={14} className="text-white" />}
                                    </div>
                                    <span className="text-sm font-medium">{opt}</span>
                                </div>
                            );
                        })}
                    </div>
                )}

                {currentQ.type === 'dropdown' && (
                    <div className="space-y-4">
                        {currentQ.sentences.map((s, i) => {
                            const parts = s.text.split('___');
                            const ans = (userAnswers[currentQ.id] || {})[i] || '';
                            return (
                                <div key={i} className="p-4 rounded-xl border border-white/10">
                                    <p className="text-sm">
                                        {parts[0]}
                                        <select
                                            value={ans}
                                            onChange={(e) => setUserAnswers(prev => ({ ...prev, [currentQ.id]: { ...(prev[currentQ.id] || {}), [i]: e.target.value } }))}
                                            className="mx-1 px-3 py-1.5 rounded-lg bg-background border border-white/20 text-text-main font-semibold text-sm focus:border-primary focus:outline-none"
                                        >
                                            <option value="">{t.dropdownPlaceholder}</option>
                                            {s.options.map(o => <option key={o} value={o}>{o}</option>)}
                                        </select>
                                        {parts[1]}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
                <button onClick={() => setCurrentIndex(p => Math.max(0, p - 1))} disabled={currentIndex === 0} className="btn btn-outline text-sm">
                    <ChevronLeft size={16} /> {t.prev}
                </button>
                {currentIndex === examQuestions.length - 1 ? (
                    <button onClick={finishExam} className="btn btn-primary">{t.finishExamBtn}</button>
                ) : (
                    <button onClick={() => setCurrentIndex(p => p + 1)} className="btn btn-primary text-sm">
                        {t.next} →
                    </button>
                )}
            </div>
        </div>
    );
}

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
