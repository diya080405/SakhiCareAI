import React from 'react';
import { SupportedLanguage } from '../types/health';
import { translations } from '../translations';
import { Sparkles, BookOpen, ShieldCheck, Languages, Lock, HeartHandshake, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  currentLanguage: SupportedLanguage;
  onStartChecker: () => void;
  onExplorePcos: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLanguage,
  onStartChecker,
  onExplorePcos,
}) => {
  const t = translations[currentLanguage];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-purple-50/70 via-rose-50/30 to-slate-50">
      {/* Decorative subtle background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-purple-200/50 blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute top-32 left-1/2 w-64 h-64 rounded-full bg-teal-100/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
            {t.heroTitle}{' '}
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 bg-clip-text text-transparent underline decoration-rose-300 decoration-wavy decoration-2">
              {t.heroHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
            {t.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartChecker}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-bold text-base shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-purple-200 group-hover:rotate-12 transition-transform" />
              <span>{t.ctaCheckSymptoms}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onExplorePcos}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-purple-50/50 text-slate-800 font-bold text-base border border-slate-200 hover:border-purple-300 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-purple-600" />
              <span>{t.ctaExplorePcos}</span>
            </button>
          </div>
        </div>

        {/* 4 Trust & Core Features Badges */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              {t.trustPrivacyTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.trustPrivacyDesc}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              {t.trustLanguagesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.trustLanguagesDesc}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              {t.trustSafetyTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.trustSafetyDesc}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              {t.trustZeroDataTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.trustZeroDataDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
