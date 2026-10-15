import React, { useState, useEffect } from 'react';
import { SupportedLanguage, SUPPORTED_LANGUAGES } from '../types/health';
import { translations } from '../translations';
import { Sparkles, Shield, AlertCircle, RefreshCw, XCircle, Send, CheckCircle2, BookOpen } from 'lucide-react';

interface SymptomCheckerProps {
  currentLanguage: SupportedLanguage;
  onSubmit: (symptoms: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  onClearError: () => void;
  initialSymptoms?: string;
  onViewFallback?: () => void;
}

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({
  currentLanguage,
  onSubmit,
  isLoading,
  error,
  onClearError,
  initialSymptoms = '',
  onViewFallback,
}) => {
  const [symptoms, setSymptoms] = useState(initialSymptoms);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);

  const t = translations[currentLanguage];
  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  const MAX_CHARS = 3000;
  const charsRemaining = MAX_CHARS - symptoms.length;

  // Animate loading steps during waiting for response
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev < 2 ? prev + 1 : 2));
      }, 2400);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSymptoms(e.target.value);
    if (validationError) setValidationError(null);
    if (error) onClearError();
  };

  const handleSampleClick = (sampleText: string) => {
    setSymptoms(sampleText);
    setValidationError(null);
    if (error) onClearError();
  };

  const handleClear = () => {
    setSymptoms('');
    setValidationError(null);
    if (error) onClearError();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    const trimmed = symptoms.trim();
    if (!trimmed) {
      setValidationError(t.errorEmptyInput);
      return;
    }

    if (trimmed.length > MAX_CHARS) {
      setValidationError(t.errorInputTooLong);
      return;
    }

    setValidationError(null);
    await onSubmit(trimmed);
  };

  const loadingSteps = [t.loadingStep1, t.loadingStep2, t.loadingStep3];

  return (
    <section id="symptom-checker" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{currentLangObj.nativeName} ({currentLangObj.name})</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.checkerTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.checkerSubtitle}
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 sm:p-8 shadow-sm">
          {/* Privacy Notice Banner */}
          <div className="mb-6 rounded-2xl bg-teal-50/90 border border-teal-200/80 p-4 flex items-start gap-3 text-teal-900 text-xs sm:text-sm">
            <Shield className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">{t.privacyNoticeTitle}: </span>
              <span>{t.privacyNoticeText}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Label & Counter */}
            <div className="flex items-center justify-between">
              <label
                htmlFor="symptoms-input"
                className="block text-sm font-bold text-slate-800"
              >
                {t.inputLabel}
              </label>
              <span
                className={`text-xs font-mono font-medium ${
                  charsRemaining < 200 ? 'text-amber-600 font-bold' : 'text-slate-400'
                }`}
              >
                {symptoms.length} / {MAX_CHARS} {t.charCountLabel}
              </span>
            </div>

            {/* Textarea */}
            <div className="relative">
              <textarea
                id="symptoms-input"
                rows={5}
                disabled={isLoading}
                value={symptoms}
                onChange={handleInputChange}
                placeholder={t.inputPlaceholder}
                className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 text-base placeholder:text-slate-400 focus:border-purple-500 focus:ring-3 focus:ring-purple-200/60 focus:outline-hidden transition-all resize-y disabled:opacity-60 disabled:bg-slate-50 leading-relaxed font-normal"
              />
            </div>

            {/* Localized Validation / API Error */}
            {(validationError || error) && (
              <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-rose-900 text-sm animate-in fade-in shadow-2xs">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-rose-950">Notice:</span>
                    <p className="font-normal text-rose-800 leading-relaxed">{validationError || error}</p>
                  </div>
                </div>
                {error && (
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto shrink-0">
                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={handleSubmit}
                      className="px-4 py-2 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>{t.errorRetry}</span>
                    </button>
                    {onViewFallback && (
                      <button
                        type="button"
                        onClick={onViewFallback}
                        className="px-3.5 py-2 rounded-xl bg-white hover:bg-rose-100/70 border border-rose-300 text-rose-900 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-rose-700" />
                        <span>View Educational Guide</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Quick Sample Prompts */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-500 block mb-2">
                {t.samplePromptsLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSampleClick(t.samplePrompt1)}
                  className="text-xs px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 font-medium border border-purple-200/60 transition-colors text-left"
                >
                  "{t.samplePrompt1}"
                </button>
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSampleClick(t.samplePrompt2)}
                  className="text-xs px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-900 font-medium border border-rose-200/60 transition-colors text-left"
                >
                  "{t.samplePrompt2}"
                </button>
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSampleClick(t.samplePrompt3)}
                  className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium border border-slate-200 transition-colors text-left"
                >
                  "{t.samplePrompt3}"
                </button>
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSampleClick(t.samplePrompt4)}
                  className="text-xs px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 font-medium border border-teal-200/60 transition-colors text-left"
                >
                  "{t.samplePrompt4}"
                </button>
              </div>
            </div>

            {/* Action Buttons & Loading State */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <button
                type="button"
                disabled={isLoading || !symptoms}
                onClick={handleClear}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 disabled:opacity-40 cursor-pointer"
              >
                <XCircle className="w-4 h-4" />
                <span>{t.btnClear}</span>
              </button>

              <button
                type="submit"
                disabled={isLoading || !symptoms.trim()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-bold text-sm sm:text-base shadow-md shadow-purple-200 hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-purple-200" />
                    <span>{t.btnAnalyzing}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.btnAnalyze}</span>
                  </>
                )}
              </button>
            </div>

            {/* Animated Step-by-Step Loading Status */}
            {isLoading && (
              <div className="mt-4 p-5 rounded-2xl bg-purple-50/80 border border-purple-100 space-y-2 animate-in fade-in">
                <div className="flex items-center gap-2 text-purple-900 text-sm font-semibold">
                  <RefreshCw className="w-4 h-4 text-purple-700 animate-spin" />
                  <span>{loadingSteps[loadingStep]}</span>
                </div>
                <div className="w-full bg-purple-200/60 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-500 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${(loadingStep + 1) * 33.3}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  Using Google Gemini with medical safety filters for {currentLangObj.name} output.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
