export type SupportedLanguage = 
  | 'en' // English
  | 'hi' // Hindi (हिन्दी)
  | 'kn' // Kannada (ಕನ್ನಡ)
  | 'ta' // Tamil (தமிழ்)
  | 'te' // Telugu (తెలుగు)
  | 'ml' // Malayalam (മലയാളം)
  | 'mr' // Marathi (मराठी)
  | 'bho' // Bhojpuri (भोजपुरी)
  | 'pa' // Punjabi (ਪੰਜਾਬੀ)
  | 'bn'; // Bengali (বাংলা)

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  scriptLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', scriptLabel: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', scriptLabel: 'Hindi' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', scriptLabel: 'Kannada' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', scriptLabel: 'Tamil' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', scriptLabel: 'Telugu' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', scriptLabel: 'Malayalam' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', scriptLabel: 'Marathi' },
  { code: 'bho', name: 'Bhojpuri', nativeName: 'भोजपुरी', scriptLabel: 'Bhojpuri' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', scriptLabel: 'Punjabi' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', scriptLabel: 'Bengali' },
];

export type CareLevel = 'self_care' | 'routine' | 'urgent';

export interface AnalyzeRequest {
  symptoms: string;
  language: SupportedLanguage;
}

export interface AnalysisResult {
  language: SupportedLanguage;
  summary: string;
  symptoms_identified: string[];
  possible_explanations: string[];
  pcos_information: string;
  self_care: string[];
  care_level: CareLevel;
  care_guidance: string;
  warning_signs: string[];
  disclaimer: string;
  timestamp?: string;
}

export interface ApiResponse<T = AnalysisResult> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PcosTopic {
  id: string;
  title: string;
  summary: string;
  points: string[];
}

export interface MythFact {
  myth: string;
  fact: string;
}
