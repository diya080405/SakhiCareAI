import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type, ThinkingLevel } from '@google/genai';
import { AnalysisResult, SupportedLanguage } from './src/types/health';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

// Body parsers with sensible size limits
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// Supported languages list
const VALID_LANGUAGES: Record<SupportedLanguage, string> = {
  en: 'English',
  hi: 'Hindi (हिन्दी)',
  kn: 'Kannada (ಕನ್ನಡ)',
  ta: 'Tamil (தமிழ்)',
  te: 'Telugu (తెలుగు)',
  ml: 'Malayalam (മലയാളം)',
  mr: 'Marathi (मराठी)',
  bho: 'Bhojpuri (भोजपुरी)',
  pa: 'Punjabi (ਪੰਜਾਬੀ)',
  bn: 'Bengali (বাংলা)',
};

// Health Check Endpoint (does not reveal secrets)
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    supportedLanguages: Object.keys(VALID_LANGUAGES),
    service: 'SakhiCare AI Backend',
  });
});

// Build strict language-specific system instruction
function getSystemInstruction(langCode: SupportedLanguage): string {
  const languageName = VALID_LANGUAGES[langCode];

  return `You are SakhiCare AI, an empathetic, dignified, and medically cautious women's health education assistant.
Your goal is to provide evidence-based, compassionate educational guidance to help women understand their symptoms, learn about Polycystic Ovary Syndrome (PCOS) when relevant, explore low-risk self-care wellbeing practices, and understand when to consult a qualified doctor.

CRITICAL MEDICAL SAFETY & ETHICAL RULES:
1. NON-DIAGNOSTIC BOUNDARY: You MUST NOT diagnose PCOS, endometriosis, thyroid disease, or any medical condition. Do not provide a diagnosis, a diagnostic probability score, or a percentage chance of PCOS.
2. NO PRESCRIPTIONS: You MUST NOT prescribe medication, suggest prescription drugs (like metformin, oral contraceptives, spironolactone), or recommend dosage changes.
3. NO MIRACLE CURES: Never promise that any diet, herb, detox tea, or home remedy cures PCOS.
4. URGENCY TRIAGE:
   - "urgent": If the user describes sudden or severe pelvic/abdominal pain, heavy bleeding (soaking >2 pads per hour for 2+ hours), dizziness/fainting with bleeding or pain, possible pregnancy with pain/bleeding, or high fever with pelvic pain.
   - "routine": If symptoms are chronic, recurrent, or suggestive of hormonal imbalances (e.g., irregular periods, persistent jawline acne, excess facial hair, unexplained weight changes) requiring standard evaluation by a gynecologist.
   - "self_care": If symptoms are mild, general lifestyle queries, or routine wellness observations that can be safely monitored at home with lifestyle habits while observing if they persist.
5. CULTURALLY SENSITIVE & RESPECTFUL: Maintain a warm, respectful, supportive tone without judgment, shame, or stigma.
6. TARGET LANGUAGE REQUIREMENT:
   The user has selected the language: ${languageName} (code: ${langCode}).
   EVERY SINGLE TEXT FIELD IN YOUR JSON RESPONSE (summary, symptoms_identified items, possible_explanations items, pcos_information, self_care items, care_guidance, warning_signs items, disclaimer) MUST BE WRITTEN NATURALLY IN ${languageName}.
   For Bhojpuri (${langCode} === 'bho'), use natural, warm, widely understood Bhojpuri in Devanagari script.
   For Kannada, Tamil, Telugu, Malayalam, Bengali, Punjabi, Hindi, and Marathi, write in their appropriate native script.
   Explain medical concepts in plain, accessible, everyday vocabulary. Keep medically important terms understandable.

OUTPUT FORMAT:
You MUST respond with valid JSON strictly conforming to this schema:
{
  "language": "${langCode}",
  "summary": "Compassionate neutral summary of the user's symptoms in ${languageName}",
  "symptoms_identified": ["Symptom 1 in ${languageName}", "Symptom 2 in ${languageName}"],
  "possible_explanations": ["General educational explanation 1 in ${languageName}", "General educational explanation 2 in ${languageName}"],
  "pcos_information": "Educational context explaining how PCOS or hormonal balance may relate to these symptoms (or clarify if unlikely/not typical) in ${languageName}",
  "self_care": ["Low-risk gentle self-care tip 1 in ${languageName}", "Low-risk gentle self-care tip 2 in ${languageName}"],
  "care_level": "self_care" | "routine" | "urgent",
  "care_guidance": "Clear advice on when and what specialist to consult, and questions to ask the doctor in ${languageName}",
  "warning_signs": ["Critical warning symptom 1 to seek immediate care for in ${languageName}", "Critical warning symptom 2 in ${languageName}"],
  "disclaimer": "Clear medical disclaimer in ${languageName} stating that this is for educational purposes only and not a clinical diagnosis or treatment."
}`;
}

// POST /api/analyze - AI-Powered Symptom & Education Checker
app.post('/api/analyze', async (req: Request, res: Response) => {
  let validLanguage: SupportedLanguage = 'en';
  let hasEmergencyKeywords = false;

  try {
    const { symptoms, language } = req.body;

    // 1. Validate inputs
    if (!symptoms || typeof symptoms !== 'string' || symptoms.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Symptom description is required and cannot be empty.',
      });
    }

    const trimmedSymptoms = symptoms.trim();
    if (trimmedSymptoms.length > 3000) {
      return res.status(400).json({
        success: false,
        error: 'Symptom description is too long (maximum 3,000 characters).',
      });
    }

    validLanguage = (language as SupportedLanguage) || 'en';
    if (!VALID_LANGUAGES[validLanguage]) {
      return res.status(400).json({
        success: false,
        error: `Unsupported language code: ${language}. Supported codes: ${Object.keys(VALID_LANGUAGES).join(', ')}`,
      });
    }

    // 2. Check for Gemini API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        success: false,
        error: 'Gemini API key is not configured. Please add GEMINI_API_KEY in the environment secrets.',
      });
    }

    // 3. Initialize Gemini SDK server-side
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const systemInstruction = getSystemInstruction(validLanguage);

    // Conservative deterministic safety check for acute red-flag symptoms
    const lowerSymptoms = trimmedSymptoms.toLowerCase();
    hasEmergencyKeywords = 
      lowerSymptoms.includes('faint') ||
      lowerSymptoms.includes('unbearable') ||
      lowerSymptoms.includes('बेहोश') ||
      lowerSymptoms.includes('मूर्च्छा') ||
      lowerSymptoms.includes('அதிதீவிர') ||
      lowerSymptoms.includes('తీవ్రమైన నొప్పి') ||
      lowerSymptoms.includes('അസഹനീയ') ||
      lowerSymptoms.includes('असह्य') ||
      lowerSymptoms.includes('heavy bleeding') ||
      lowerSymptoms.includes('soaking') ||
      lowerSymptoms.includes('रक्तस्राव') ||
      lowerSymptoms.includes('రక్తస్రావం') ||
      lowerSymptoms.includes('രക്തസ്രാവം') ||
      lowerSymptoms.includes('खून') ||
      lowerSymptoms.includes('severe pelvic pain') ||
      lowerSymptoms.includes('ectopic');

    // Prompt content: pass the user's description and instructions
    const userPrompt = `USER SYMPTOMS INQUIRY:
"""
${trimmedSymptoms}
"""

Please analyze these symptoms safely and provide the structured educational assessment in ${VALID_LANGUAGES[validLanguage]}. Remember not to diagnose or provide probabilities.`;

    // Candidate models to try in order:
    // 1. 'gemini-3.1-flash-lite': Ultra-fast execution (~1-2s), zero thinking overhead, separate fresh quota.
    // 2. 'gemini-3.8-flash': Resilient fallback configured with ThinkingLevel.LOW.
    const candidateModels = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    let response: any = null;
    let lastError: any = null;

    const baseConfig = {
      systemInstruction,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          language: { type: Type.STRING },
          summary: { type: Type.STRING },
          symptoms_identified: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          possible_explanations: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          pcos_information: { type: Type.STRING },
          self_care: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          care_level: {
            type: Type.STRING,
            enum: ['self_care', 'routine', 'urgent'],
          },
          care_guidance: { type: Type.STRING },
          warning_signs: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          disclaimer: { type: Type.STRING },
        },
        required: [
          'language',
          'summary',
          'symptoms_identified',
          'possible_explanations',
          'pcos_information',
          'self_care',
          'care_level',
          'care_guidance',
          'warning_signs',
          'disclaimer',
        ],
      },
    };

    for (const modelName of candidateModels) {
      try {
        const config: any = { ...baseConfig };
        if (modelName === 'gemini-3.8-flash') {
          config.thinkingConfig = { thinkingLevel: ThinkingLevel.LOW };
        }

        // Strict timeout per model call to guarantee completion within 30 seconds
        const generatePromise = ai.models.generateContent({
          model: modelName,
          contents: userPrompt,
          config,
        });

        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('AI analysis timed out')), 20000)
        );

        response = await Promise.race([generatePromise, timeoutPromise]);
        if (response?.text) {
          break; // Success!
        }
      } catch (modelErr: any) {
        lastError = modelErr;
        const msg = (modelErr.message || '').toLowerCase();
        // Avoid repeated automatic retries that consume more quota when 429 is encountered
        if (modelErr.status === 429 || msg.includes('429') || msg.includes('resource_exhausted') || msg.includes('quota')) {
          console.warn(`Quota limit reached on ${modelName}; halting further automatic attempts to conserve quota.`);
          break;
        }
        console.warn(`Model ${modelName} unavailable, checking alternative...`);
      }
    }

    if (!response || !response.text) {
      throw lastError || new Error('All AI models temporarily busy.');
    }

    const rawText = response.text.trim();
    if (!rawText) {
      throw new Error('Received empty response from the AI model.');
    }

    // 5. Parse and validate JSON
    let parsed: any;
    try {
      let cleanedText = rawText.trim();
      const fence = String.fromCharCode(96, 96, 96);
      if (cleanedText.startsWith(fence + 'json')) {
        cleanedText = cleanedText.slice(7);
      } else if (cleanedText.startsWith(fence)) {
        cleanedText = cleanedText.slice(3);
      }
      if (cleanedText.endsWith(fence)) {
        cleanedText = cleanedText.slice(0, -3);
      }
      parsed = JSON.parse(cleanedText.trim());
    } catch (parseError) {
      console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse educational assessment format.');
    }

    // 6. Normalize and validate fields defensively
    const validatedResult: AnalysisResult = {
      language: validLanguage,
      summary: typeof parsed.summary === 'string' && parsed.summary.trim() ? parsed.summary.trim() : 'Health education review of your symptoms.',
      symptoms_identified: Array.isArray(parsed.symptoms_identified)
        ? parsed.symptoms_identified.filter((item: any) => typeof item === 'string' && item.trim())
        : [],
      possible_explanations: Array.isArray(parsed.possible_explanations)
        ? parsed.possible_explanations.filter((item: any) => typeof item === 'string' && item.trim())
        : [],
      pcos_information: typeof parsed.pcos_information === 'string' && parsed.pcos_information.trim()
        ? parsed.pcos_information.trim()
        : 'PCOS is a common endocrine and metabolic condition associated with irregular cycles and androgen variations.',
      self_care: Array.isArray(parsed.self_care)
        ? parsed.self_care.filter((item: any) => typeof item === 'string' && item.trim())
        : ['Prioritize balanced nutrition', 'Ensure 7-8 hours of restful sleep', 'Maintain gentle, consistent movement'],
      care_level: hasEmergencyKeywords
        ? 'urgent'
        : ['self_care', 'routine', 'urgent'].includes(parsed.care_level)
        ? (parsed.care_level as 'self_care' | 'routine' | 'urgent')
        : 'routine',
      care_guidance: typeof parsed.care_guidance === 'string' && parsed.care_guidance.trim()
        ? parsed.care_guidance.trim()
        : 'We recommend scheduling a consultation with a healthcare professional or gynecologist for personalized examination.',
      warning_signs: Array.isArray(parsed.warning_signs)
        ? parsed.warning_signs.filter((item: any) => typeof item === 'string' && item.trim())
        : [
            'Severe sudden pelvic pain',
            'Heavy bleeding soaking through two pads per hour for consecutive hours',
            'Fainting, severe dizziness, or difficulty breathing',
          ],
      disclaimer: typeof parsed.disclaimer === 'string' && parsed.disclaimer.trim()
        ? parsed.disclaimer.trim()
        : 'This assessment is for educational purposes only and is not a medical diagnosis or treatment plan. Always consult a licensed healthcare professional.',
      timestamp: new Date().toISOString(),
    };

    return res.status(200).json({
      success: true,
      data: validatedResult,
    });
  } catch (error: any) {
    console.error('Error during AI analysis:', error.message?.slice(0, 150) || error);

    // If severe red-flag emergency symptoms were detected, provide an immediate conservative urgent safety fallback
    if (hasEmergencyKeywords) {
      const emergencyFallback: AnalysisResult = {
        language: validLanguage,
        summary: validLanguage === 'hi' 
          ? 'आपके द्वारा बताए गए लक्षणों में अचानक तीव्र दर्द, अत्यधिक रक्तस्राव या बेहोशी/चक्कर के संकेत मिले हैं, जिन्हें तत्काल आपातकालीन चिकित्सकीय सहायता की आवश्यकता होती है।'
          : 'Your symptom description indicates potentially acute medical warning signs such as severe pain, heavy bleeding, or dizziness/fainting that require immediate emergency evaluation.',
        symptoms_identified: ['Acute discomfort / severe pain', 'Heavy bleeding or fainting risk'],
        possible_explanations: ['Acute pelvic or abdominal medical emergency requiring urgent clinical evaluation'],
        pcos_information: 'Acute, severe symptoms require ruling out immediate medical emergencies (such as ovarian cyst rupture, ovarian torsion, ectopic pregnancy, or severe hemorrhage) before considering chronic conditions like PCOS.',
        self_care: ['Do NOT wait for an online assessment', 'Seek immediate in-person medical attention', 'Keep someone with you for support'],
        care_level: 'urgent',
        care_guidance: validLanguage === 'hi'
          ? 'कृपया बिना किसी देरी के तुरंत नजदीकी अस्पताल के आपातकालीन विभाग में जाएं या एम्बुलेंस (112 / 108) पर कॉल करें।'
          : 'Please proceed immediately to the nearest hospital emergency room or contact your local emergency service (112 / 108 in India).',
        warning_signs: [
          'Sudden, severe, or unbearable lower abdominal or pelvic pain',
          'Heavy bleeding soaking through 2+ pads per hour for 2 consecutive hours',
          'Fainting, dizziness, or loss of consciousness',
          'Severe pain or bleeding during suspected pregnancy',
        ],
        disclaimer: 'CRITICAL SAFETY NOTICE: This automated safety alert is provided for health education and risk mitigation. It is NOT a clinical diagnosis. Seek emergency medical care immediately.',
        timestamp: new Date().toISOString(),
      };

      return res.status(200).json({
        success: true,
        data: emergencyFallback,
      });
    }

    let statusCode = 500;
    let friendlyMessage = 'Unable to complete symptom analysis at this moment. Please view our Educational Reference Guide below or click Retry Analysis.';

    const errMsg = (error.message || '').toLowerCase();
    const isQuotaExceeded = error.status === 429 || errMsg.includes('429') || errMsg.includes('resource_exhausted') || errMsg.includes('quota');
    const isServiceUnavailable = error.status === 503 || errMsg.includes('503') || errMsg.includes('unavailable') || errMsg.includes('high demand');

    if (isQuotaExceeded) {
      statusCode = 429;
      friendlyMessage = 'The AI service has reached its daily request quota or rate limit. To conserve resources, automatic retries have been paused. You can explore our verified General Health Education Reference Guide below, or try again later.';
    } else if (isServiceUnavailable) {
      statusCode = 503;
      friendlyMessage = 'The AI health assistant is temporarily experiencing peak network demand. You can view our verified General Health Education Reference Guide below, or try again shortly.';
    } else if (errMsg.includes('timed out')) {
      statusCode = 504;
      friendlyMessage = 'The symptom analysis timed out within 30 seconds. Please check your network and click Retry Analysis.';
    }

    return res.status(statusCode).json({
      success: false,
      error: friendlyMessage,
      isQuotaExceeded,
      isServiceUnavailable,
    });
  }
});

// Configure Vite integration
async function setupServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SakhiCare AI server running on port ${PORT} [${isProd ? 'production' : 'development'}]`);
  });
}

setupServer().catch((err) => {
  console.error('Failed to start SakhiCare AI server:', err);
  process.exit(1);
});
