import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
    const [profile, setProfile] = useState(() => {
        const saved = localStorage.getItem('okm_profile');
        return saved ? JSON.parse(saved) : null;
    });

    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('okm_progress');
        return saved ? JSON.parse(saved) : {
            vocabViewed: [],
            practiceScores: {},       // { taskId: score }
            correctQuestions: [],     // array of question IDs answered correctly (unique)
            capabilities: {
                'Digitális írástudás': 0,
                'Adat- és adatbázis-kezelés': 0,
                'Algoritmizálás': 0,
                'IT Eszközök': 0,
            },
            examsTaken: [],
            timeSpent: 0,
        };
    });

    useEffect(() => {
        if (profile) localStorage.setItem('okm_profile', JSON.stringify(profile));
    }, [profile]);

    useEffect(() => {
        localStorage.setItem('okm_progress', JSON.stringify(progress));
    }, [progress]);

    const login = (name, grade) => setProfile({ name, grade });

    const logout = () => {
        setProfile(null);
        setProgress({
            vocabViewed: [],
            practiceScores: {},
            correctQuestions: [],
            capabilities: { 'Digitális írástudás': 0, 'Adat- és adatbázis-kezelés': 0, 'Algoritmizálás': 0, 'IT Eszközök': 0 },
            examsTaken: [],
            timeSpent: 0,
        });
        localStorage.removeItem('okm_profile');
        localStorage.removeItem('okm_progress');
    };

    const markVocabViewed = (termId) => {
        setProgress(prev => {
            if (prev.vocabViewed.includes(termId)) return prev;
            return { ...prev, vocabViewed: [...prev.vocabViewed, termId] };
        });
    };

    const updatePracticeScore = (taskId, score, domain) => {
        setProgress(prev => {
            const newScores = { ...prev.practiceScores, [taskId]: score };
            const alreadyCorrect = (prev.correctQuestions || []).includes(taskId);
            const newCorrect = [...(prev.correctQuestions || [])];
            const newCapabilities = { ...prev.capabilities };

            // Only boost capability if this is a NEW correct answer (first time)
            if (score === 100 && !alreadyCorrect) {
                newCorrect.push(taskId);
                // Count how many unique correct answers this domain has
                // Each correct answer adds 0.25 to the domain level (so 24 correct = max 6)
                const currentLevel = prev.capabilities[domain] || 0;
                newCapabilities[domain] = Math.min(6, currentLevel + 0.25);
            }

            return {
                ...prev,
                practiceScores: newScores,
                correctQuestions: newCorrect,
                capabilities: newCapabilities,
            };
        });
    };

    const recordExam = (examResult) => {
        setProgress(prev => ({
            ...prev,
            examsTaken: [...prev.examsTaken, examResult],
        }));
    };

    const addTimeSpent = (seconds) => {
        setProgress(prev => ({
            ...prev,
            timeSpent: (prev.timeSpent || 0) + seconds,
        }));
    };

    // Export/Import for save/load feature
    const exportProgress = () => {
        return JSON.stringify({ profile, progress });
    };

    const importProgress = (jsonString) => {
        try {
            const data = JSON.parse(jsonString);
            if (data.profile) setProfile(data.profile);
            if (data.progress) setProgress(data.progress);
            return true;
        } catch {
            return false;
        }
    };

    return (
        <ProgressContext.Provider value={{
            profile, progress, login, logout, markVocabViewed,
            updatePracticeScore, recordExam, addTimeSpent, exportProgress, importProgress,
        }}>
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    return useContext(ProgressContext);
}
