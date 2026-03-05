import React, { useRef } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Trophy, Download, ChevronLeft } from 'lucide-react';

export default function Certificate({ onBack }) {
    const { profile, progress } = useProgress();
    const certRef = useRef(null);

    const totalPracticeScore = Object.values(progress.practiceScores).reduce((a, b) => a + b, 0);
    const totalQuestions = Object.keys(progress.practiceScores).length;
    const avgScore = totalQuestions > 0 ? Math.round(totalPracticeScore / totalQuestions) : 0;

    const handleDownload = async () => {
        try {
            const { default: jsPDF } = await import('jspdf');
            const doc = new jsPDF('landscape', 'mm', 'a4');

            // Background
            doc.setFillColor(79, 70, 229);
            doc.rect(0, 0, 297, 210, 'F');
            doc.setFillColor(255, 255, 255);
            doc.roundedRect(15, 15, 267, 180, 8, 8, 'F');

            // Title
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(32);
            doc.setTextColor(79, 70, 229);
            doc.text('Elismerő Oklevél', 148.5, 50, { align: 'center' });

            // Subtitle
            doc.setFontSize(14);
            doc.setTextColor(100, 116, 139);
            doc.text('OKM Digitális Kompetencia Felkészülés', 148.5, 62, { align: 'center' });

            // Name
            doc.setFontSize(28);
            doc.setTextColor(30, 41, 59);
            doc.text(profile.name, 148.5, 90, { align: 'center' });

            // Grade
            doc.setFontSize(16);
            doc.setTextColor(79, 70, 229);
            doc.text(`${profile.grade}. évfolyam`, 148.5, 102, { align: 'center' });

            // Capabilities
            let yPos = 125;
            doc.setFontSize(12);
            Object.entries(progress.capabilities).forEach(([domain, level]) => {
                doc.setTextColor(100, 116, 139);
                doc.text(domain + ':', 60, yPos);
                doc.setTextColor(79, 70, 229);
                doc.setFont('helvetica', 'bold');
                doc.text(`${Math.floor(level)}. Szint`, 200, yPos);
                doc.setFont('helvetica', 'normal');
                yPos += 10;
            });

            // Date
            doc.setFontSize(10);
            doc.setTextColor(100, 116, 139);
            doc.text(`Dátum: ${new Date().toLocaleDateString('hu-HU')}`, 148.5, 185, { align: 'center' });

            doc.save(`OKM_Oklevel_${profile.name.replace(/\s/g, '_')}.pdf`);
        } catch (err) {
            alert('PDF generálás hiba: ' + err.message);
        }
    };

    return (
        <div className="animate-fade-in py-6">
            <button onClick={onBack} className="btn btn-outline mb-6"><ChevronLeft size={18} /> Vissza</button>

            <div ref={certRef} className="glass-panel p-12 text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-success/20 rounded-full">
                        <Trophy size={56} className="text-success" />
                    </div>
                </div>

                <h2 className="text-4xl font-bold text-gradient mb-4">Elismerő Oklevél</h2>
                <p className="text-lg text-text-muted mb-8">Ezt az oklevelet sikeres digitális felkészüléséért kapja:</p>

                <h3 className="text-3xl font-extrabold mb-2">{profile.name}</h3>
                <p className="text-xl text-primary font-medium mb-8">{profile.grade}. évfolyam</p>

                <div className="border-t border-b border-white/10 py-6 mb-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(progress.capabilities).map(([domain, level]) => (
                            <div key={domain} className="bg-primary/5 p-4 rounded-xl">
                                <p className="text-xs text-text-muted font-bold mb-1">{domain}</p>
                                <p className="text-2xl font-black text-primary">{Math.floor(level)}.</p>
                                <p className="text-xs text-text-muted">Szint</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <div className="glass-panel p-4 text-center">
                        <p className="text-xs text-text-muted">Megoldott feladatok</p>
                        <p className="text-xl font-bold text-primary">{totalQuestions}</p>
                    </div>
                    <div className="glass-panel p-4 text-center">
                        <p className="text-xs text-text-muted">Átlagos pontszám</p>
                        <p className="text-xl font-bold text-primary">{avgScore}%</p>
                    </div>
                    <div className="glass-panel p-4 text-center">
                        <p className="text-xs text-text-muted">Vizsgák száma</p>
                        <p className="text-xl font-bold text-primary">{progress.examsTaken.length}</p>
                    </div>
                </div>

                <button onClick={handleDownload} className="btn btn-primary mx-auto">
                    <Download size={20} /> Oklevél Letöltése (PDF)
                </button>
            </div>
        </div>
    );
}
