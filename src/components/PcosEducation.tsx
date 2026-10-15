import React, { useState } from 'react';
import { SupportedLanguage } from '../types/health';
import { translations } from '../translations';
import { pcosContent } from '../data/pcosContent';
import { 
  BookOpen, 
  HelpCircle, 
  Activity, 
  GitFork, 
  FileText, 
  Layers, 
  HeartHandshake, 
  Stethoscope, 
  CheckCircle2, 
  XCircle, 
  ArrowRight 
} from 'lucide-react';

interface PcosEducationProps {
  currentLanguage: SupportedLanguage;
  onCheckSymptomsCTA: () => void;
}

type TabKey = 
  | 'whatIs' 
  | 'symptoms' 
  | 'whyVary' 
  | 'diagnosis' 
  | 'mimics' 
  | 'lifestyle' 
  | 'whenDoctor' 
  | 'myths';

export const PcosEducation: React.FC<PcosEducationProps> = ({
  currentLanguage,
  onCheckSymptomsCTA,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('whatIs');
  const t = translations[currentLanguage];
  const content = pcosContent[currentLanguage] || pcosContent.en;

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: 'whatIs', label: t.tabWhatIs, icon: <HelpCircle className="w-4 h-4" /> },
    { key: 'symptoms', label: t.tabSymptoms, icon: <Activity className="w-4 h-4" /> },
    { key: 'whyVary', label: t.tabWhyVary, icon: <GitFork className="w-4 h-4" /> },
    { key: 'diagnosis', label: t.tabDiagnosis, icon: <FileText className="w-4 h-4" /> },
    { key: 'mimics', label: t.tabMimics, icon: <Layers className="w-4 h-4" /> },
    { key: 'lifestyle', label: t.tabLifestyle, icon: <HeartHandshake className="w-4 h-4" /> },
    { key: 'whenDoctor', label: t.tabWhenDoctor, icon: <Stethoscope className="w-4 h-4" /> },
    { key: 'myths', label: t.tabMyths, icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <section id="pcos-guide" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-purple-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-purple-600" />
            <span>PCOS Knowledge Center</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.pcosGuideTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.pcosGuideSubtitle}
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none max-w-5xl mx-auto px-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-purple-700 text-white shadow-md shadow-purple-200'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-purple-50/60 border border-slate-200/80'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'myths' ? (
            /* Myths vs Facts Display */
            <div className="space-y-4">
              {content.myths.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xs space-y-3"
                >
                  <div className="flex items-start gap-3 text-rose-800 bg-rose-50/80 p-3.5 rounded-2xl border border-rose-100">
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span className="font-bold text-sm sm:text-base">{item.myth}</span>
                  </div>
                  <div className="flex items-start gap-3 text-teal-900 bg-teal-50/70 p-3.5 rounded-2xl border border-teal-100">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-relaxed">{item.fact}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Standard Topic Card */
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                {content[activeTab]?.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                {content[activeTab]?.lead}
              </p>

              {/* Key Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {content[activeTab]?.keyPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-purple-50/30 border border-purple-100/80 hover:bg-purple-50/50 transition-colors"
                  >
                    <div className="font-bold text-xs sm:text-sm text-purple-950 mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                      {pt.label}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pt.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Takeaway Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-100/70 to-pink-100/60 border border-purple-200 text-purple-950 flex items-center justify-between gap-4">
                <div className="text-xs sm:text-sm font-semibold">
                  <span className="font-bold uppercase tracking-wider text-purple-700 block text-[10px] mb-0.5">
                    Key Medical Takeaway
                  </span>
                  {content[activeTab]?.takeaway}
                </div>
                <button
                  type="button"
                  onClick={onCheckSymptomsCTA}
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 bg-white px-3 py-1.5 rounded-xl border border-purple-200 shrink-0 cursor-pointer"
                >
                  <span>Check Symptoms</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
