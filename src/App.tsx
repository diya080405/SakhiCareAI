import React, { useState } from 'react';
import { AnalysisResult, SupportedLanguage } from './types/health';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SymptomChecker } from './components/SymptomChecker';
import { AnalysisResults } from './components/AnalysisResults';
import { EducationalFallback } from './components/EducationalFallback';
import { PcosEducation } from './components/PcosEducation';
import { HowItWorks } from './components/HowItWorks';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Footer } from './components/Footer';
import { analyzeSymptoms } from './services/api';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [showEducationalFallback, setShowEducationalFallback] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [lastSubmittedSymptoms, setLastSubmittedSymptoms] = useState<string>('');

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setCurrentLanguage(newLang);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(
      sectionId === 'checker'
        ? 'symptom-checker'
        : sectionId === 'pcos'
        ? 'pcos-guide'
        : sectionId === 'how'
        ? 'how-it-works'
        : sectionId === 'emergency'
        ? 'emergency-support'
        : sectionId
    );
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSymptomSubmit = async (symptoms: string) => {
    setIsLoading(true);
    setApiError(null);
    setAnalysisResult(null); // Clear any prior result immediately
    setLastSubmittedSymptoms(symptoms);

    try {
      const result = await analyzeSymptoms(symptoms, currentLanguage);
      if (!result) {
        throw new Error('Analysis could not be generated.');
      }
      setAnalysisResult(result);
      setShowEducationalFallback(false);
      // Smoothly scroll to results
      setTimeout(() => {
        const resultsEl = document.getElementById('analysis-results');
        if (resultsEl) {
          resultsEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (err: any) {
      setAnalysisResult(null); // Explicitly ensure no fake/old success is shown
      setShowEducationalFallback(true); // Offer the verified non-diagnostic educational fallback
      setApiError(err.message || 'The AI service is temporarily unavailable. You can explore our verified General Health Education Reference Guide below, or click Retry Analysis.');
      setTimeout(() => {
        const fallbackEl = document.getElementById('educational-fallback');
        if (fallbackEl) {
          fallbackEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setShowEducationalFallback(false);
    setApiError(null);
    setLastSubmittedSymptoms('');
    scrollToSection('checker');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-purple-200 selection:text-purple-900">
      {/* Sticky Top Navbar with 10-Language Selector */}
      <Navbar
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          currentLanguage={currentLanguage}
          onStartChecker={() => scrollToSection('checker')}
          onExplorePcos={() => scrollToSection('pcos')}
        />

        {/* Dedicated Symptom Checker Section */}
        <SymptomChecker
          currentLanguage={currentLanguage}
          onSubmit={handleSymptomSubmit}
          isLoading={isLoading}
          error={apiError}
          onClearError={() => setApiError(null)}
          initialSymptoms={lastSubmittedSymptoms}
          onViewFallback={() => setShowEducationalFallback(true)}
        />

        {/* Real-time Analysis Results (rendered ONLY upon real AI success) */}
        {analysisResult && (
          <AnalysisResults
            result={analysisResult}
            currentLanguage={currentLanguage}
            onReset={handleReset}
          />
        )}

        {/* Clearly Labelled Educational Fallback (rendered when API is unavailable or requested) */}
        {showEducationalFallback && (
          <EducationalFallback
            currentLanguage={currentLanguage}
            onRetry={() => {
              if (lastSubmittedSymptoms) {
                handleSymptomSubmit(lastSubmittedSymptoms);
              } else {
                scrollToSection('checker');
              }
            }}
            errorMessage={apiError || undefined}
          />
        )}

        {/* Comprehensive PCOS Knowledge Guide */}
        <PcosEducation
          currentLanguage={currentLanguage}
          onCheckSymptomsCTA={() => scrollToSection('checker')}
        />

        {/* How It Works Section */}
        <HowItWorks
          currentLanguage={currentLanguage}
          onStartCTA={() => scrollToSection('checker')}
        />

        {/* Urgent Medical Warning & Emergency Helpline Support */}
        <EmergencyBanner currentLanguage={currentLanguage} />
      </main>

      {/* Footer with Medical Disclaimers & Language Matrix */}
      <Footer
        currentLanguage={currentLanguage}
        onLanguageSelect={handleLanguageChange}
      />
    </div>
  );
}
