# SakhiCare AI — Multilingual Women's Health Education Platform

> **"Your health. Your language. Your wellbeing."**

SakhiCare AI is an AI-powered, privacy-respecting women's health education assistant designed to demystify symptoms, provide verified educational knowledge about Polycystic Ovary Syndrome (PCOS), and offer clear guidance on when to seek professional medical care in **10 Indian languages**.

---

## 1. Problem Statement

Millions of women face cultural, linguistic, and informational barriers when seeking to understand reproductive health concerns, menstrual irregularities, and conditions like PCOS. Clinical jargon, fear of judgment, and lack of content in regional mother tongues often delay essential conversations with healthcare professionals.

## 2. The Solution

**SakhiCare AI** bridges this gap by offering:
- **Mother-Tongue Access**: Native-language symptom explanation and AI responses across 10 Indian languages.
- **Strict Medical-Safety Guardrails**: Zero definitive diagnoses, no invented risk percentages or probability scores, and no prescription drug recommendations.
- **Compassionate Care Triage**: Actionable care urgency levels (`self_care`, `routine`, `urgent`) to distinguish routine wellness from acute red-flag symptoms.
- **100% Privacy Guarantee**: Zero user accounts, zero persistent storage of sensitive health inputs, and no sensitive health logging.

---

## 3. Ten Supported Languages

SakhiCare AI accepts free-text input in any supported language and synthesizes its educational guidance directly into the user's selected language:

1. **English** — English
2. **Hindi** — हिन्दी
3. **Kannada** — ಕನ್ನಡ
4. **Tamil** — தமிழ்
5. **Telugu** — తెలుగు
6. **Malayalam** — മലയാളം
7. **Marathi** — मराठी
8. **Bhojpuri** — भोजपुरी
9. **Punjabi** — ਪੰਜਾਬੀ
10. **Bengali** — বাংলা

---

## 4. Key Features

- **Multilingual AI Symptom & Health Checker**:
  - Free-text input with character counter (max 3,000 characters).
  - Clickable sample prompt chips for quick accessibility.
  - Multi-stage animated loading state ensuring transparency during analysis.
  - Reset and clear options with zero lingering data in memory.
- **Structured Educational Results**:
  - Symptom summary & identified symptom tags.
  - Possible educational explanations.
  - PCOS context and hormonal insights.
  - Low-risk, gentle self-care and wellbeing suggestions.
  - Professional consultation checklist (questions for your doctor).
  - High-priority warning signs checklist.
  - Prominent non-diagnostic medical disclaimer.
- **Native Print & PDF Export**:
  - Single-click browser print integration with clean `@media print` layout.
- **Comprehensive PCOS Educational Guide**:
  - Rotterdam Diagnostic Criteria explained in plain words (menstrual irregularity, androgen excess, polycystic ovaries on ultrasound).
  - Conditions that mimic PCOS (Thyroid disorders, hyperprolactinemia, adrenal hyperplasia, stress/lifestyle).
  - Sustainable lifestyle and nutrition strategies.
  - Myths vs. Facts interactive breakdown.
- **Immediate Emergency Support**:
  - Clear red-flag symptom warnings (sudden unbearable pelvic pain, heavy bleeding soaking >2 pads/hr for 2+ hours, fainting, pregnancy complications).
  - Quick-access Indian emergency numbers (112, 108, Women's Helpline 1091).

---

## 5. Technology Stack & Architecture

- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide React icons.
- **Backend**: Node.js, Express 4, `tsx` runtime.
- **AI Integration**: Official `@google/genai` TypeScript SDK with ultra-fast `gemini-3.1-flash-lite` (~2s latency) and resilient fallback to `gemini-3.8-flash`.
- **Quota & Safety Resiliency**: Graceful HTTP 429/503 mitigation without repeated retries, plus a dedicated non-diagnostic Educational Fallback Reference Guide.
- **Architecture**: Integrated full-stack single server with Vite middleware during development and static file serving in production.

---

## 6. Project Structure

```text
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore configuration
├── index.html                # App HTML entry point with metadata & fonts
├── metadata.json             # AI Studio metadata configuration
├── package.json              # Dependencies and run scripts
├── server.ts                 # Full-stack Express server with Gemini API routes
├── tsconfig.json             # TypeScript compiler settings
├── vite.config.ts            # Vite configuration
└── src/
    ├── main.tsx              # React entry point
    ├── App.tsx               # Main application coordinator
    ├── index.css             # Tailwind CSS & print styles
    ├── types/
    │   └── health.ts         # Shared TypeScript interfaces & language constants
    ├── translations/
    │   └── index.ts          # Centralized dictionary for all 10 languages
    ├── data/
    │   └── pcosContent.ts    # Deep educational PCOS guide & myths data
    ├── services/
    │   └── api.ts            # Client API client for /api/analyze & /api/health
    └── components/
        ├── Navbar.tsx         # Responsive navbar with 10-language selector
        ├── HeroSection.tsx    # Landing hero, tagline & trust pillars
        ├── SymptomChecker.tsx # Free-text input form with validation & privacy badge
        ├── AnalysisResults.tsx# Card-based assessment with print layout & care badges
        ├── PcosEducation.tsx  # Tabbed PCOS educational guide & myths breakdown
        ├── HowItWorks.tsx     # 3-step educational methodology
        ├── EmergencyBanner.tsx# Urgent care guidance & 24/7 helplines
        └── Footer.tsx         # Legal disclaimer, privacy note & language matrix
```

---

## 7. API Endpoints

### `GET /api/health`
Health readiness check verifying that the backend is operational.
- **Response**:
```json
{
  "status": "healthy",
  "timestamp": "2026-10-15T03:00:00.000Z",
  "supportedLanguages": ["en", "hi", "kn", "ta", "te", "ml", "mr", "bho", "pa", "bn"],
  "service": "SakhiCare AI Backend"
}
```

### `POST /api/analyze`
Submits symptom text and target language for structured educational synthesis.
- **Request Body**:
```json
{
  "symptoms": "My periods have been irregular for 3 months and I have severe acne on my jawline.",
  "language": "hi"
}
```
- **Response**:
```json
{
  "success": true,
  "data": {
    "language": "hi",
    "summary": "आपकी माहवारी की अनियमितता और मुँहासे संबंधी लक्षणों का शैक्षिक सारांश...",
    "symptoms_identified": ["अनियमित माहवारी", "जबड़े पर मुँहासे"],
    "possible_explanations": ["हार्मोनल असंतुलन...", "इंसुलिन प्रतिरोध संबंधी प्रभाव..."],
    "pcos_information": "PCOS में एण्ड्रोजन की अधिकता और ओव्यूलेशन में देरी के कारण ऐसे लक्षण देखे जा सकते हैं...",
    "self_care": ["संतुलित आहार", "नियमित 7-8 घंटे की नींद", "हल्का व्यायाम"],
    "care_level": "routine",
    "care_guidance": "सटीक जांच और हार्मोनल प्रोफाइल के लिए स्त्री रोग विशेषज्ञ से परामर्श लें।",
    "warning_signs": ["अचानक तेज असहनीय पेल्विक दर्द", "अत्यधिक भारी रक्तस्राव"],
    "disclaimer": "यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है और चिकित्सकीय निदान नहीं है।"
  }
}
```

---

## 8. Prerequisites & Installation

### Prerequisites
- Node.js 20+ installed
- Google Gemini API key (`GEMINI_API_KEY`)

### Setup Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sakhicare-ai
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Add your GEMINI_API_KEY in .env
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

5. Build for production:
   ```bash
   npm run build
   npm start
   ```

---

## 9. Privacy & Medical Safety Protocol

- **Zero Local/Session Storage**: Symptom input and AI results are never saved to `localStorage`, `sessionStorage`, or cookies.
- **Zero Logging**: Raw symptom text is never printed to server terminal logs.
- **No Diagnostic Claims**: The application does not provide clinical diagnoses, diagnostic probabilities, or risk scores.
- **No Prescriptions**: The AI is strictly instructed never to recommend prescription medications or dosage changes.
- **Emergency Priority**: Urgent care red flags are placed ahead of standard educational insights whenever acute symptoms are reported.

---

## 10. Medical Disclaimer

> **DISCLAIMER**: SakhiCare AI is strictly an educational tool and does NOT provide medical advice, clinical diagnoses, individualized treatment plans, or prescription recommendations. If you are experiencing sudden, severe, or worsening symptoms, please contact your local emergency services (112 / 108 in India) or consult a licensed healthcare professional immediately.
