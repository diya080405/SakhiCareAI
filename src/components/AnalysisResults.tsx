import React from 'react';
import { AnalysisResult, SupportedLanguage, SUPPORTED_LANGUAGES } from '../types/health';
import { translations } from '../translations';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  Heart, 
  HelpCircle, 
  Sparkles, 
  Printer, 
  RotateCcw, 
  ShieldAlert, 
  Stethoscope, 
  Activity, 
  Clock 
} from 'lucide-react';

interface AnalysisResultsProps {
  result: AnalysisResult;
  currentLanguage: SupportedLanguage;
  onReset: () => void;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  result,
  currentLanguage,
  onReset,
}) => {
  const t = translations[currentLanguage];
  const responseLangObj =
    SUPPORTED_LANGUAGES.find((l) => l.code === result.language) ||
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) ||
    SUPPORTED_LANGUAGES[0];

  const handlePrint = () => {
    window.print();
  };

  // Determine Care Level Banner details
  const getCareLevelConfig = () => {
    switch (result.care_level) {
      case 'urgent':
        return {
          bgColor: 'bg-rose-50 border-rose-300 text-rose-950',
          badgeColor: 'bg-rose-600 text-white',
          icon: <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />,
          title: t.careLevelBadgeUrgent,
          description: t.careLevelUrgentDesc,
        };
      case 'routine':
        return {
          bgColor: 'bg-indigo-50/80 border-indigo-200 text-indigo-950',
          badgeColor: 'bg-indigo-600 text-white',
          icon: <Stethoscope className="w-6 h-6 text-indigo-600 shrink-0" />,
          title: t.careLevelBadgeRoutine,
          description: t.careLevelRoutineDesc,
        };
      case 'self_care':
      default:
        return {
          bgColor: 'bg-teal-50/80 border-teal-200 text-teal-950',
          badgeColor: 'bg-teal-600 text-white',
          icon: <Heart className="w-6 h-6 text-teal-600 shrink-0" />,
          title: t.careLevelBadgeSelfCare,
          description: t.careLevelSelfCareDesc,
        };
    }
  };

  const careConfig = getCareLevelConfig();

  return (
    <section id="analysis-results" className="py-12 bg-slate-50/80 relative print:py-2 print:bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 print:mb-3 print:pb-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.selectedLanguageLabel}: {responseLangObj.nativeName} ({responseLangObj.name})</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.resultsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 print:hidden">
              {t.resultsSubtitle}
            </p>
            <p className="hidden print:block text-xs text-slate-400 mt-1">
              {t.printSubtitle} • {result.timestamp ? new Date(result.timestamp).toLocaleDateString() : ''}
            </p>
          </div>

          {/* Action buttons (Print & Start Over) */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto print:hidden">
            <button
              onClick={handlePrint}
              type="button"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200 shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>{t.btnPrintPdf}</span>
            </button>
            <button
              onClick={onReset}
              type="button"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.btnStartOver}</span>
            </button>
          </div>
        </div>

        {/* 1. Care Level Banner */}
        <div className={`mb-6 rounded-3xl border-2 p-5 sm:p-6 ${careConfig.bgColor} shadow-xs`}>
          <div className="flex items-start gap-4">
            {careConfig.icon}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${careConfig.badgeColor}`}>
                  {result.care_level.replace('_', ' ')}
                </span>
                <h3 className="font-extrabold text-base sm:text-lg">
                  {careConfig.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90 mt-1">
                {careConfig.description}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Symptom Summary & Identified Badges Card */}
        <div className="mb-6 rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
            <Activity className="w-5 h-5 text-purple-600" />
            <h3>{t.sectionSummary}</h3>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
            {result.summary}
          </p>

          {result.symptoms_identified && result.symptoms_identified.length > 0 && (
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                {t.sectionIdentifiedSymptoms}
              </span>
              <div className="flex flex-wrap gap-2">
                {result.symptoms_identified.map((sym, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-50 text-purple-900 text-xs sm:text-sm font-medium border border-purple-200/60"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                    <span>{sym}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 3. Possible Educational Explanations */}
        {result.possible_explanations && result.possible_explanations.length > 0 && (
          <div className="mb-6 rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
              <HelpCircle className="w-5 h-5 text-teal-600" />
              <h3>{t.sectionPossibleExplanations}</h3>
            </div>
            <ul className="space-y-2.5">
              {result.possible_explanations.map((exp, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed bg-teal-50/30 p-3 rounded-xl border border-teal-100/60"
                >
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 4. PCOS Context & Insights */}
        {result.pcos_information && (
          <div className="mb-6 rounded-3xl bg-gradient-to-tr from-purple-50/50 to-pink-50/40 border border-purple-200/80 p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-purple-950 font-bold text-base sm:text-lg">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3>{t.sectionPcosInfo}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white/80 p-4 rounded-2xl border border-purple-100">
              {result.pcos_information}
            </p>
          </div>
        )}

        {/* 5. Self-Care Suggestions & Care Guidance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Self-Care Card */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Heart className="w-5 h-5 text-rose-500" />
              <h3>{t.sectionSelfCare}</h3>
            </div>
            <ul className="space-y-2">
              {result.self_care.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Care Guidance Card */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Stethoscope className="w-5 h-5 text-indigo-600" />
              <h3>{t.sectionCareGuidance}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-indigo-50/40 p-3.5 rounded-xl border border-indigo-100/60">
              {result.care_guidance}
            </p>
          </div>
        </div>

        {/* 6. Key Warning Signs to Watch Out For */}
        {result.warning_signs && result.warning_signs.length > 0 && (
          <div className="mb-6 rounded-3xl bg-rose-50/70 border border-rose-200 p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-base sm:text-lg">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <h3>{t.sectionWarningSigns}</h3>
            </div>
            <ul className="space-y-2">
              {result.warning_signs.map((sign, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-950 font-medium leading-relaxed"
                >
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 7. Medical Safety Disclaimer Box */}
        <div className="rounded-3xl bg-amber-50/70 border border-amber-200 p-5 sm:p-6 text-amber-950 shadow-2xs">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-amber-900 mb-1">
                {t.disclaimerTitle}
              </h4>
              <p className="text-xs leading-relaxed text-amber-900/90 font-normal">
                {result.disclaimer || t.disclaimerText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA for new check */}
        <div className="mt-8 text-center print:hidden">
          <button
            onClick={onReset}
            type="button"
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-bold text-sm sm:text-base shadow-md shadow-purple-200 hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.btnStartOver}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
