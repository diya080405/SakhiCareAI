import React from 'react';
import { SupportedLanguage } from '../types/health';
import { translations } from '../translations';
import { MessageSquareHeart, Cpu, ClipboardCheck, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  currentLanguage: SupportedLanguage;
  onStartCTA: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  currentLanguage,
  onStartCTA,
}) => {
  const t = translations[currentLanguage];

  const steps = [
    {
      num: '01',
      title: t.howStep1Title,
      description: t.howStep1Desc,
      icon: <MessageSquareHeart className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-50 border-purple-100',
    },
    {
      num: '02',
      title: t.howStep2Title,
      description: t.howStep2Desc,
      icon: <Cpu className="w-6 h-6 text-pink-600" />,
      color: 'bg-pink-50 border-pink-100',
    },
    {
      num: '03',
      title: t.howStep3Title,
      description: t.howStep3Desc,
      icon: <ClipboardCheck className="w-6 h-6 text-teal-600" />,
      color: 'bg-teal-50 border-teal-100',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.howTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.howSubtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border p-7 ${step.color} relative hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-3xl font-black text-slate-300 font-mono">
                  {step.num}
                </span>
              </div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onStartCTA}
            className="px-7 py-3 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm shadow-md shadow-purple-200 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>{t.ctaCheckSymptoms}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
