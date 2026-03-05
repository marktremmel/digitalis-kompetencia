import React, { useRef } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import { tr } from '../data/translations';
import { DOMAIN_TRANSLATIONS } from '../data/questions';
import { Trophy, Download, ChevronLeft } from 'lucide-react';

export default function Certificate({ onBack }) {
    const { profile, progress } = useProgress();
    const { language } = useLanguage();
    const certRef = useRef(null);

    const t = tr[language];

    const totalPracticeScore = Object.values(progress.practiceScores).reduce((a, b) => a + b, 0);
    const totalQuestions = Object.keys(progress.practiceScores).length;
    const avgScore = totalQuestions > 0 ? Math.round(totalPracticeScore / totalQuestions) : 0;

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
            doc.line(cx - 60, 68, cx + 60, 68);

            // Small diamond decorations on the gold line
            doc.setFillColor(212, 175, 55);
            // Left diamond
            doc.circle(cx - 62, 68, 1.2, 'F');
            // Center diamond
            doc.circle(cx, 68, 1.5, 'F');
            // Right diamond
            doc.circle(cx + 62, 68, 1.2, 'F');

            // === Title ===
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(36);
            doc.setTextColor(79, 70, 229);
            const titleStr = language === 'hu' ? 'D \u00ed s z o k l e v \u00e9 l' : 'C E R T I F I C A T E';
            doc.text(titleStr, cx, 52, { align: 'center', charSpace: 1.5 });

            // Subtitle
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(12);
            doc.setTextColor(120, 120, 140);
            const subtitle = language === 'hu' ? 'OKM Digit\u00e1lis Kompetencia Felk\u00e9sz\u00fcl\u00e9s' : 'Digital Competency Preparation';
            doc.text(subtitle, cx, 62, { align: 'center' });

            // === Recipient Name ===
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(30);
            doc.setTextColor(30, 41, 59);
            doc.text(profile.name, cx, 90, { align: 'center' });

            // Grade badge
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(14);
            doc.setTextColor(79, 70, 229);
            doc.text(`${profile.grade}${language === 'hu' ? '. \u00e9vfolyam' : 'th grade'}`, cx, 102, { align: 'center' });

            // === Separator line before capabilities ===
            doc.setDrawColor(220, 220, 235);
            doc.setLineWidth(0.3);
            doc.line(55, 112, W - 55, 112);

            // === Capabilities Section ===
            let yPos = 124;
            const leftX = 70;
            const rightX = W - 70;
            doc.setFontSize(11);

            Object.entries(progress.capabilities).forEach(([domain, level]) => {
                // Domain name
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(100, 116, 139);
                const translatedDomain = language === 'hu' ? domain : (DOMAIN_TRANSLATIONS[domain] || domain);
                doc.text(translatedDomain + ':', leftX, yPos);

                // Level value with bold styling
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(79, 70, 229);
                const lvlText = language === 'hu' ? `${Math.floor(level)}. Szint` : `Level ${Math.floor(level)}`;
                doc.text(lvlText, rightX, yPos, { align: 'right' });

                // Dotted line connecting domain to level
                doc.setDrawColor(200, 200, 215);
                doc.setLineWidth(0.2);
                doc.setLineDashPattern([1, 1.5], 0);
                const domainWidth = doc.getTextWidth(translatedDomain + ':');
                const levelWidth = doc.getTextWidth(lvlText);
                doc.line(leftX + domainWidth + 3, yPos - 0.5, rightX - levelWidth - 3, yPos - 0.5);
                doc.setLineDashPattern([], 0);

                yPos += 10;
            });

            // === Separator line after capabilities ===
            doc.setDrawColor(220, 220, 235);
            doc.setLineWidth(0.3);
            doc.line(55, yPos + 2, W - 55, yPos + 2);

            // === Date ===
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            doc.setTextColor(140, 140, 160);
            const datePrefix = language === 'hu' ? 'D\u00e1tum: ' : 'Date: ';
            doc.text(`${datePrefix}${new Date().toLocaleDateString(language === 'hu' ? 'hu-HU' : 'en-US')}`, cx, H - 28, { align: 'center' });

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

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <div className="glass-panel p-4 text-center">
                        <p className="text-xs text-text-muted">{t.solvedTasks}</p>
                        <p className="text-xl font-bold text-primary">{totalQuestions}</p>
                    </div>
                    <div className="glass-panel p-4 text-center">
                        <p className="text-xs text-text-muted">{t.avgScore}</p>
                        <p className="text-xl font-bold text-primary">{avgScore}%</p>
                    </div>
                    <div className="glass-panel p-4 text-center">
                        <p className="text-xs text-text-muted">{t.examsTaken}</p>
                        <p className="text-xl font-bold text-primary">{progress.examsTaken.length}</p>
                    </div>
                </div>

                <button onClick={handleDownload} className="btn btn-primary mx-auto">
                    <Download size={20} /> {t.downloadCert}
                </button>
            </div>
        </div>
    );
}
