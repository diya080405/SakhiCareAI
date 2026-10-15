import React from 'react';
import { SupportedLanguage, SUPPORTED_LANGUAGES } from '../types/health';
import { fallbackEducationContent } from '../data/fallbackEducation';
import { 
  BookOpen, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Printer, 
  RotateCcw, 
  ShieldAlert, 
  Stethoscope, 
  Heart, 
  Info 
} from 'lucide-react';

interface EducationalFallbackProps {
  currentLanguage: SupportedLanguage;
  onRetry: () => void;
  onDismiss?: () => void;
  errorMessage?: string;
}

export const EducationalFallback: React.FC<EducationalFallbackProps> = ({
  currentLanguage,
  onRetry,
  onDismiss,
  errorMessage,
}) => {
  const content = fallbackEducationContent[currentLanguage] || fallbackEducationContent.en;
  const langObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="educational-fallback" className="py-10 bg-slate-50 relative print:py-2 print:bg-white animate-in fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Unavailability Notice Banner */}
        <div className="rounded-3xl border-2 border-amber-300 bg-amber-50/90 p-5 sm:p-6 text-amber-950 shadow-xs print:hidden">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-200 text-amber-900">
                  AI Service Notice
                </span>
                <span className="text-xs font-semibold text-amber-800">
                  Language: {langObj.nativeName} ({langObj.name})
                </span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                {errorMessage || content.noticeBanner}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onRetry}
                  className="px-4 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry Live AI Service</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-amber-100/70 border border-amber-300 text-amber-900 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Educational Guide (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Explicitly Labelled Educational Reference Header */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-teal-700" />
              <span>{content.badge} — Standard Clinical Reference</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {content.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              {content.subtitle}
            </p>
          </div>

          {/* Educational Content Sections */}
          <div className="space-y-6">
            {content.sections.map((sec, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-50/70 border border-slate-200/70 p-5 space-y-3">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                  {sec.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sec.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {sec.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Doctor Visit Questions Checklist */}
          <div className="rounded-2xl bg-indigo-50/60 border border-indigo-200/80 p-5 space-y-3">
            <div className="flex items-center gap-2 text-indigo-950 font-bold text-base">
              <Stethoscope className="w-5 h-5 text-indigo-600" />
              <h3>{content.doctorChecklistTitle}</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-indigo-950">
              {content.doctorQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-indigo-100">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Red-Flag Warning Signs */}
          <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-5 space-y-3">
            <div className="flex items-center gap-2 text-rose-950 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-rose-600" />
              <h3>{content.warningSignsTitle}</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-rose-900">
              {content.warningSigns.map((sign, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-rose-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-2" />
                  <span className="font-medium">{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Explicit Medical Non-Diagnostic Disclaimer */}
          <div className="rounded-2xl bg-slate-100 p-4 border border-slate-200 text-slate-700 text-xs leading-relaxed">
            <div className="flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <p>{content.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
