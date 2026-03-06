import React, { useRef } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import { tr } from '../data/translations';
import { DOMAIN_TRANSLATIONS } from '../data/questions';
import { getVocabularyData } from '../data/vocabulary';
import { Trophy, Download, ChevronLeft } from 'lucide-react';

export default function Certificate({ onBack }) {
    const { profile, progress } = useProgress();
    const { language } = useLanguage();
    const certRef = useRef(null);

    const t = tr[language];

    const totalPracticeScore = Object.values(progress.practiceScores).reduce((a, b) => a + b, 0);
    const totalQuestions = Object.keys(progress.practiceScores).length;
    const avgScore = totalQuestions > 0 ? Math.round(totalPracticeScore / totalQuestions) : 0;

    const avgExamScore = progress.examsTaken.length > 0
        ? Math.round(progress.examsTaken.reduce((acc, curr) => acc + curr.score, 0) / progress.examsTaken.length)
        : 0;

    const formatTime = (seconds) => {
        if (!seconds) return `0${t.timeMin}`;
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        if (h === 0 && m === 0 && s > 0) return `< 1${t.timeMin}`;
        if (h > 0) return `${h}${t.timeHour} ${m}${t.timeMin}`;
        return `${m}${t.timeMin}`;
    };
    const timeString = formatTime(progress.timeSpent || 0);

    const vocabularyData = getVocabularyData(language);
    const totalVocab = vocabularyData.length;
    const viewedVocab = progress.vocabViewed ? progress.vocabViewed.length : 0;
    const vocabString = `${viewedVocab}/${totalVocab}`;

    const handleDownload = async () => {
        try {
            const { default: jsPDF } = await import('jspdf');
            const doc = new jsPDF('landscape', 'mm', 'a4');
            const W = 297, H = 210;
            const cx = W / 2;

            // === Background ===
            // Outer gradient-like background (indigo)
            doc.setFillColor(79, 70, 229);
            doc.rect(0, 0, W, H, 'F');

            // Inner white card with rounded corners
            doc.setFillColor(255, 255, 255);
            doc.roundedRect(12, 12, W - 24, H - 24, 6, 6, 'F');

            // Decorative inner border
            doc.setDrawColor(79, 70, 229);
            doc.setLineWidth(0.8);
            doc.roundedRect(18, 18, W - 36, H - 36, 4, 4, 'S');

            // Second thin inner border for elegance
            doc.setDrawColor(200, 196, 255);
            doc.setLineWidth(0.3);
            doc.roundedRect(21, 21, W - 42, H - 42, 3, 3, 'S');

            // === Gold accent line under title area ===
            doc.setDrawColor(212, 175, 55);
            doc.setLineWidth(0.6);
            doc.line(cx - 60, 62, cx + 60, 62);

            // Small diamond decorations on the gold line
            doc.setFillColor(212, 175, 55);
            // Left diamond
            doc.circle(cx - 62, 62, 1.2, 'F');
            // Center diamond
            doc.circle(cx, 62, 1.5, 'F');
            // Right diamond
            doc.circle(cx + 62, 62, 1.2, 'F');

            // === Title ===
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(40);
            doc.setTextColor(79, 70, 229);
            const titleStr = language === 'hu' ? 'DÍSZOKLEVÉL' : 'CERTIFICATE';
            doc.text(titleStr, cx, 46, { align: 'center' });

            // Subtitle
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(12);
            doc.setTextColor(120, 120, 140);
            const subtitle = language === 'hu' ? 'OKM Digitális Kompetencia Felkészülés' : 'Digital Competency Preparation';
            doc.text(subtitle, cx, 54, { align: 'center' });

            // Safe text wrapper for unsupported jsPDF characters
            const safeText = (str) => {
                if (!str) return '';
                return String(str).replace(/ő/g, 'ö').replace(/ű/g, 'ü').replace(/Ő/g, 'Ö').replace(/Ű/g, 'Ü');
            };

            // === Recipient Name ===
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(30);
            doc.setTextColor(30, 41, 59);
            doc.text(safeText(profile.name), cx, 80, { align: 'center' });

            // Grade badge
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(14);
            doc.setTextColor(79, 70, 229);
            doc.text(safeText(`${profile.grade}${language === 'hu' ? '. évfolyam' : 'th grade'}`), cx, 90, { align: 'center' });

            // === Separator line before capabilities ===
            doc.setDrawColor(220, 220, 235);
            doc.setLineWidth(0.3);
            doc.line(55, 100, W - 55, 100);

            // === Capabilities Section ===
            let yPos = 110;
            const leftX = 70;
            const rightX = W - 70;
            doc.setFontSize(11);

            Object.entries(progress.capabilities).forEach(([domain, level]) => {
                // Domain name
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 116, 139);
                const translatedDomain = language === 'hu' ? domain : (DOMAIN_TRANSLATIONS[domain] || domain);
                const safeDomain = safeText(translatedDomain) + ':';
                doc.text(safeDomain, leftX, yPos);

                // Level value with bold styling
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(79, 70, 229);
                const lvlText = safeText(language === 'hu' ? `${Math.floor(level)}. Szint` : `Level ${Math.floor(level)}`);
                doc.text(lvlText, rightX, yPos, { align: 'right' });

                // Dotted line connecting domain to level
                doc.setDrawColor(200, 200, 215);
                doc.setLineWidth(0.2);
                doc.setLineDashPattern([1, 1.5], 0);
                const domainWidth = doc.getTextWidth(safeDomain);
                const levelWidth = doc.getTextWidth(lvlText);
                doc.line(leftX + domainWidth + 3, yPos - 0.5, rightX - levelWidth - 3, yPos - 0.5);
                doc.setLineDashPattern([], 0);

                yPos += 10;
            });

            // === Separator line after capabilities ===
            doc.setDrawColor(220, 220, 235);
            doc.setLineWidth(0.3);
            doc.line(55, yPos + 2, W - 55, yPos + 2);

            // === Statistics Section ===
            yPos += 12;
            doc.setFontSize(9);

            const drawStat = (label, value, xCenter, yCenter) => {
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(120, 120, 140);
                doc.text(safeText(label), xCenter, yCenter, { align: 'center' });
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(79, 70, 229);
                doc.text(safeText(String(value)), xCenter, yCenter + 4, { align: 'center' });
            };

            // Row 1 (3 items centered at cx-70, cx, cx+70)
            drawStat(t.solvedTasks, totalQuestions, cx - 70, yPos);
            drawStat(t.avgScore, `${avgScore}%`, cx, yPos);
            drawStat(t.examsTaken, progress.examsTaken.length, cx + 70, yPos);

            // Row 2 (3 items centered at cx-70, cx, cx+70)
            yPos += 11;
            drawStat(t.avgExamScore, `${avgExamScore}%`, cx - 70, yPos);
            drawStat(t.timeSpent, timeString, cx, yPos);
            drawStat(t.vocabLearned, vocabString, cx + 70, yPos);

            // === Date ===
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            doc.setTextColor(140, 140, 160);
            const datePrefix = language === 'hu' ? 'Dátum: ' : 'Date: ';
            doc.text(safeText(`${datePrefix}${new Date().toLocaleDateString(language === 'hu' ? 'hu-HU' : 'en-US')}`), cx, H - 20, { align: 'center' });

            // === Corner decorations ===
            doc.setDrawColor(79, 70, 229);
            doc.setLineWidth(0.5);
            const cornerLen = 12;
            const m = 24;
            // Top-left
            doc.line(m, m + cornerLen, m, m); doc.line(m, m, m + cornerLen, m);
            // Top-right
            doc.line(W - m - cornerLen, m, W - m, m); doc.line(W - m, m, W - m, m + cornerLen);
            // Bottom-left
            doc.line(m, H - m - cornerLen, m, H - m); doc.line(m, H - m, m + cornerLen, H - m);
            // Bottom-right
            doc.line(W - m - cornerLen, H - m, W - m, H - m); doc.line(W - m, H - m, W - m, H - m - cornerLen);

            doc.save(`OKM_${language === 'hu' ? 'Diszoklevel' : 'Certificate'}_${profile.name.replace(/\s/g, '_')}.pdf`);
        } catch (err) {
            alert(t.pdfError + err.message);
        }
    };

    return (
        <div className="animate-fade-in py-6">
            <button onClick={onBack} className="btn btn-outline mb-6"><ChevronLeft size={18} /> {t.back}</button>

            <div ref={certRef} className="glass-panel p-12 text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-success/20 rounded-full">
                        <Trophy size={56} className="text-success" />
                    </div>
                </div>

                <h2 className="text-4xl font-bold text-gradient mb-4">{t.diplomaTitle}</h2>
                <p className="text-lg text-text-muted mb-8">{t.diplomaDesc}</p>

                <h3 className="text-3xl font-extrabold mb-2">{profile.name}</h3>
                <p className="text-xl text-primary font-medium mb-8">{profile.grade}{language === 'hu' ? t.gradeSuffix : ''}</p>

                <div className="border-t border-b border-white/10 py-6 mb-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(progress.capabilities).map(([domain, level]) => (
                            <div key={domain} className="bg-primary/5 p-4 rounded-xl">
                                <p className="text-xs text-text-muted font-bold mb-1 truncate">{language === 'hu' ? domain : (DOMAIN_TRANSLATIONS[domain] || domain)}</p>
                                <p className="text-2xl font-black text-primary">{language === 'hu' ? `${Math.floor(level)}.` : `Lvl ${Math.floor(level)}`}</p>
                                <p className="text-xs text-text-muted">{language === 'hu' ? 'Szint' : ''}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center items-center mb-6">
                    <div className="glass-panel p-4 text-center min-w-[120px]">
                        <p className="text-xs text-text-muted">{t.solvedTasks}</p>
                        <p className="text-xl font-bold text-primary">{totalQuestions}</p>
                    </div>
                    <div className="glass-panel p-4 text-center min-w-[120px]">
                        <p className="text-xs text-text-muted">{t.avgScore}</p>
                        <p className="text-xl font-bold text-primary">{avgScore}%</p>
                    </div>
                    <div className="glass-panel p-4 text-center min-w-[120px]">
                        <p className="text-xs text-text-muted">{t.examsTaken}</p>
                        <p className="text-xl font-bold text-primary">{progress.examsTaken.length}</p>
                    </div>
                    <div className="glass-panel p-4 text-center min-w-[120px]">
                        <p className="text-xs text-text-muted">{t.avgExamScore}</p>
                        <p className="text-xl font-bold text-primary">{avgExamScore}%</p>
                    </div>
                    <div className="glass-panel p-4 text-center min-w-[120px]">
                        <p className="text-xs text-text-muted">{t.timeSpent}</p>
                        <p className="text-xl font-bold text-primary">{timeString}</p>
                    </div>
                    <div className="glass-panel p-4 text-center min-w-[120px]">
                        <p className="text-xs text-text-muted">{t.vocabLearned}</p>
                        <p className="text-xl font-bold text-primary">{vocabString}</p>
                    </div>
                </div>

                <button onClick={handleDownload} className="btn btn-primary mx-auto">
                    <Download size={20} /> {t.downloadCert}
                </button>
            </div>
        </div>
    );
}
