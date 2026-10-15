import React, { useState } from 'react';
import { SupportedLanguage, SUPPORTED_LANGUAGES } from '../types/health';
import { translations } from '../translations';
import { Heart, Globe, Menu, X, ShieldAlert, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onLanguageChange,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[currentLanguage];

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  const handleLangSelect = (code: SupportedLanguage) => {
    onLanguageChange(code);
    setLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-rose-400 flex items-center justify-center text-white shadow-md shadow-purple-200 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                  SakhiCare
                </span>
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                activeSection === 'home'
                  ? 'text-purple-700 bg-purple-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.navHome}
            </button>
            <button
              onClick={() => handleNavClick('checker')}
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                activeSection === 'checker'
                  ? 'text-purple-700 bg-purple-50 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              {t.navChecker}
            </button>
            <button
              onClick={() => handleNavClick('pcos')}
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                activeSection === 'pcos'
                  ? 'text-purple-700 bg-purple-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.navPcos}
            </button>
            <button
              onClick={() => handleNavClick('how')}
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                activeSection === 'how'
                  ? 'text-purple-700 bg-purple-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.navHow}
            </button>
            <button
              onClick={() => handleNavClick('emergency')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1.5"
            >
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              {t.navEmergency}
            </button>
          </nav>

          {/* Language Selector Dropdown */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-purple-200 bg-purple-50/50 hover:bg-purple-100/60 text-purple-900 font-semibold text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-purple-400"
                aria-expanded={langMenuOpen}
                aria-label={t.languageSelectLabel}
              >
                <Globe className="w-4 h-4 text-purple-600" />
                <span className="hidden sm:inline font-medium text-slate-700">
                  {currentLangObj.nativeName}
                </span>
                <span className="sm:hidden font-bold">
                  {currentLangObj.code.toUpperCase()}
                </span>
                <span className="text-xs text-purple-600 bg-white px-1.5 py-0.5 rounded-md border border-purple-100 shadow-2xs font-mono">
                  {currentLangObj.name}
                </span>
              </button>

              {/* Language Options Menu */}
              {langMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200/80 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-2 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {t.languageSelectLabel} (10 Languages)
                    </div>
                    <div className="max-h-80 overflow-y-auto py-1">
                      {SUPPORTED_LANGUAGES.map((lang) => {
                        const isSelected = lang.code === currentLanguage;
                        return (
                          <button
                            key={lang.code}
                            type="button"
                            onClick={() => handleLangSelect(lang.code)}
                            className={`w-full text-left px-4 py-2.5 flex items-center justify-between text-sm transition-colors ${
                              isSelected
                                ? 'bg-purple-50 text-purple-900 font-bold'
                                : 'text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <div>
                              <div className="font-semibold text-slate-900">
                                {lang.nativeName}
                              </div>
                              <div className="text-xs text-slate-500">
                                {lang.name}
                              </div>
                            </div>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-purple-600" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-purple-100 bg-white px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold ${
              activeSection === 'home'
                ? 'bg-purple-50 text-purple-800'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.navHome}
          </button>
          <button
            onClick={() => handleNavClick('checker')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold flex items-center gap-2 ${
              activeSection === 'checker'
                ? 'bg-purple-50 text-purple-800'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            {t.navChecker}
          </button>
          <button
            onClick={() => handleNavClick('pcos')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold ${
              activeSection === 'pcos'
                ? 'bg-purple-50 text-purple-800'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.navPcos}
          </button>
          <button
            onClick={() => handleNavClick('how')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold ${
              activeSection === 'how'
                ? 'bg-purple-50 text-purple-800'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.navHow}
          </button>
          <button
            onClick={() => handleNavClick('emergency')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold text-rose-600 bg-rose-50 flex items-center gap-2"
          >
            <ShieldAlert className="w-4 h-4" />
            {t.navEmergency}
          </button>
        </div>
      )}
    </header>
  );
};
