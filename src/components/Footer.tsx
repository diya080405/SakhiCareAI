import React from 'react';
import { SupportedLanguage, SUPPORTED_LANGUAGES } from '../types/health';
import { translations } from '../translations';
import { Heart, ShieldCheck, Lock, Globe } from 'lucide-react';

interface FooterProps {
  currentLanguage: SupportedLanguage;
  onLanguageSelect: (lang: SupportedLanguage) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLanguage, onLanguageSelect }) => {
  const t = translations[currentLanguage];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white">
                <Heart className="w-4 h-4 fill-white" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                SakhiCare AI
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {t.tagline} • An ethical, multilingual digital health education assistant dedicated to women's health literacy, PCOS awareness, and accessible care guidance.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-teal-400" />
                Zero Data Storage
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                Non-Diagnostic AI
              </span>
            </div>
          </div>

          {/* Privacy & Safety Notes */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Privacy & Dignity
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerPrivacy}
            </p>
          </div>

          {/* Language Fast Switcher */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              {t.footerLanguagesTitle}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => onLanguageSelect(lang.code)}
                  className={`text-[11px] px-2 py-1 rounded-md transition-colors cursor-pointer ${
                    currentLanguage === lang.code
                      ? 'bg-purple-600 text-white font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {lang.nativeName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Prominent Medical Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-200">Legal & Medical Notice: </strong>
            {t.footerDisclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
          <p>{t.footerRights} Built with Google Gen AI SDK & Gemini 3.8 Flash.</p>
        </div>
      </div>
    </footer>
  );
};
