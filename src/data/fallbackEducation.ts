import { SupportedLanguage } from '../types/health';

export interface EducationalGuideData {
  badge: string;
  title: string;
  subtitle: string;
  noticeBanner: string;
  sections: {
    title: string;
    description: string;
    points: string[];
  }[];
  doctorChecklistTitle: string;
  doctorQuestions: string[];
  warningSignsTitle: string;
  warningSigns: string[];
  disclaimer: string;
}

export const fallbackEducationContent: Record<SupportedLanguage, EducationalGuideData> = {
  en: {
    badge: 'Educational Reference Guide',
    title: 'General Women’s Health & Hormonal Wellbeing Reference',
    subtitle: 'This static guide is provided for health literacy while the live AI assistant is unavailable. No AI analysis was performed, and this does not constitute a personal diagnosis.',
    noticeBanner: 'Notice: Live AI analysis is temporarily unavailable due to high service demand. You are viewing standard, curated medical education compiled for general learning.',
    sections: [
      {
        title: '1. Understanding Menstrual Cycles & Common Variations',
        description: 'A typical menstrual cycle ranges from 21 to 35 days, counting from the first day of one period to the first day of the next. Occasional variations are normal and frequently influenced by:',
        points: [
          'Acute or chronic physical and emotional stress altering hypothalamic signaling',
          'Significant fluctuations in body weight, intensive athletic training, or restrictive dieting',
          'Hormonal shifts during puberty, post-contraceptive adjustment, or perimenopause',
          'Underlying metabolic conditions like insulin resistance or thyroid disorders',
        ],
      },
      {
        title: '2. Hormonal Symptoms: Acne, Skin & Hair Changes',
        description: 'Both women and men produce androgen hormones (such as testosterone and DHEA-S). Subtle elevations or increased receptor sensitivity can manifest as:',
        points: [
          'Persistent cystic acne concentrated along the lower jawline, chin, and upper neck',
          'Unwanted coarse, dark hair growth on the chin, upper lip, chest, or abdomen (hirsutism)',
          'Thinning scalp hair along the central part or crown (androgenic alopecia)',
          'Darkened, velvety skin patches (Acanthosis Nigricans) on the neck or underarms',
        ],
      },
      {
        title: '3. Polycystic Ovary Syndrome (PCOS) Overview',
        description: 'PCOS is a common endocrine condition affecting roughly 1 in 10 women of reproductive age. Clinical diagnosis requires formal medical evaluation based on Rotterdam criteria:',
        points: [
          'Irregular or absent ovulation leading to prolonged cycle gaps or missed periods',
          'Clinical or biochemical signs of elevated androgens',
          'Enlarged ovaries containing multiple immature follicles on pelvic ultrasound',
          'Exclusion of other hormonal mimics such as thyroid disease or hyperprolactinemia',
        ],
      },
      {
        title: '4. Evidence-Based Gentle Wellbeing Habits',
        description: 'While medical consultation is always essential for persistent symptoms, sustainable lifestyle practices support hormonal equilibrium:',
        points: [
          'Prioritize balanced, low-glycemic meals combining fiber-rich vegetables, whole grains, and lean proteins',
          'Engage in regular moderate movement, such as brisk walking, yoga, or gentle resistance training',
          'Aim for 7 to 9 hours of restorative sleep to support cortisol and insulin sensitivity',
          'Keep a cycle diary to record bleeding dates, flow duration, and associated symptoms',
        ],
      },
    ],
    doctorChecklistTitle: 'Recommended Questions for Your Healthcare Provider',
    doctorQuestions: [
      'Could my irregular cycles or symptoms be related to PCOS, thyroid imbalance, or another endocrine condition?',
      'Which baseline blood tests (such as thyroid panel, free/total testosterone, prolactin, or fasting glucose) do you suggest?',
      'Is a pelvic ultrasound scan recommended for my cycle history?',
      'What are safe, individualized management options suited for my health goals?',
    ],
    warningSignsTitle: 'Important Warning Signs Requiring Prompt In-Person Care',
    warningSigns: [
      'Sudden, severe, or unbearable lower abdominal or pelvic pain',
      'Extremely heavy bleeding (soaking through two or more sanitary pads per hour for 2 consecutive hours)',
      'Dizziness, lightheadedness, or fainting accompanying pain or bleeding',
      'Severe pain or abnormal bleeding if there is any possibility of pregnancy',
      'High fever accompanied by pelvic tenderness or foul-smelling vaginal discharge',
    ],
    disclaimer: 'DISCLAIMER: This guide provides standard educational reference material only. It is not an AI-generated assessment, a clinical diagnosis, or medical advice. Always consult a qualified healthcare professional for personalized medical evaluation.',
  },

  hi: {
    badge: 'शैक्षिक संदर्भ मार्गदर्शिका',
    title: 'सामान्य महिला स्वास्थ्य एवं हार्मोनल कल्याण संदर्भ',
    noticeBanner: 'सूचना: उच्च मांग के कारण लाइव AI सेवा अस्थायी रूप से अनुपलब्ध है। आप सामान्य जानकारी के लिए तैयार की गई यह मानक शैक्षिक मार्गदर्शिका देख रहे हैं (यह कोई AI विश्लेषण या निदान नहीं है)।',
    subtitle: 'यह सामान्य स्वास्थ्य ज्ञान के लिए प्रदान की गई संदर्भ मार्गदर्शिका है। कोई AI विश्लेषण नहीं किया गया है और यह कोई व्यक्तिगत डॉक्टरी निदान नहीं है।',
    sections: [
      {
        title: '1. मासिक धर्म चक्र और सामान्य बदलावों को समझें',
        description: 'एक सामान्य मासिक चक्र 21 से 35 दिनों का होता है। चक्र में कभी-कभार बदलाव होना सामान्य है, जो निम्न कारणों से हो सकता है:',
        points: [
          'शारीरिक या मानसिक तनाव से हार्मोन्स पर असर पड़ना',
          'वजन में तेजी से बदलाव, अत्यधिक डाइटिंग या पोषक तत्वों की कमी',
          'किशोरावस्था, दवाएं बंद करने के बाद या 35 वर्ष के बाद हार्मोनल बदलाव',
          'थायरॉयड या इंसुलिन असंतुलन जैसी आंतरिक स्थितियां',
        ],
      },
      {
        title: '2. मुँहासे, बाल और त्वचा में हार्मोनल बदलाव',
        description: 'महिलाओं के शरीर में भी एण्ड्रोजन (पुरुष हार्मोन) की थोड़ी मात्रा बनती है। इनके असंतुलन से निम्न लक्षण दिख सकते हैं:',
        points: [
          'ठुड्डी, जबड़े और चेहरे के निचले हिस्से पर जिद्दी मुँहासे',
          'चेहरे, पेट या सीने पर अनचाहे सख्त बाल उगना (हर्सुटिज़्म)',
          'सिर के बालों का पतला होना या झड़ना',
          'गर्दन या कांख की त्वचा का गहरा काला होना',
        ],
      },
      {
        title: '3. PCOS (पॉलीसिस्टिक ओवरी सिंड्रोम) की सामान्य जानकारी',
        description: 'PCOS एक आम हार्मोनल स्थिति है। इसका सही निदान डॉक्टर द्वारा अल्ट्रासाउंड और रक्त परीक्षण के बाद ही किया जाता है:',
        points: [
          'अंडाशय से समय पर अंडा न बनने के कारण माहवारी में देरी होना',
          'रक्त में एण्ड्रोजन हार्मोन के स्तर में बदलाव',
          'अल्ट्रासाउंड में अंडाशय के किनारों पर छोटे फॉलिकल्स दिखाई देना',
          'थायरॉयड और प्रोलैक्टिन जैसी अन्य स्थितियों को खारिज करना जरूरी होता है',
        ],
      },
      {
        title: '4. स्वास्थ्यवर्धक एवं सुरक्षित जीवनशैली सुझाव',
        description: 'डॉक्टर से परामर्श के साथ-साथ स्वस्थ आदतें हार्मोनल संतुलन बनाए रखने में मदद करती हैं:',
        points: [
          'संतुलित आहार लें, जिसमें हरी सब्जियां, साबुत अनाज और पर्याप्त दालें शामिल हों',
          'रोजाना 30 मिनट हल्की वॉक, योग या नियमित व्यायाम करें',
          '7-8 घंटे की गहरी नींद लें ताकि तनाव हार्मोन्स नियंत्रित रहें',
          'अपनी माहवारी की तारीखों और लक्षणों का नियमित रिकॉर्ड रखें',
        ],
      },
    ],
    doctorChecklistTitle: 'डॉक्टर से मिलने पर पूछने योग्य जरूरी सवाल',
    doctorQuestions: [
      'क्या मेरे लक्षण PCOS, थायरॉयड या किसी अन्य हार्मोनल असंतुलन से जुड़े हो सकते हैं?',
      'मुझे कौन से जरूरी रक्त परीक्षण (जैसे थायरॉयड, टेस्टोस्टेरोन, शुगर) कराने चाहिए?',
      'क्या मेरे लिए पेल्विक अल्ट्रासाउंड कराना उचित होगा?',
      'मेरे लक्षणों को नियंत्रित करने के लिए सबसे सुरक्षित जीवनशैली या उपचार क्या है?',
    ],
    warningSignsTitle: 'तत्काल डॉक्टर से मिलने योग्य खतरे के संकेत',
    warningSigns: [
      'पेट के निचले हिस्से में अचानक अत्यधिक असहनीय दर्द होना',
      'लगातार 2 घंटे तक हर घंटे 2 या अधिक पैड भीगने जितना भारी रक्तस्राव',
      'रक्तस्राव या दर्द के साथ चक्कर आना या बेहोश होना',
      'गर्भावस्था की संभावना में तेज दर्द या असामान्य रक्तस्राव',
      'पेल्विक दर्द के साथ तेज बुखार होना',
    ],
    disclaimer: 'अस्वीकरण: यह सामग्री केवल सामान्य स्वास्थ्य शिक्षा के लिए है। यह कोई AI विश्लेषण, चिकित्सीय सलाह या बीमारी का निदान नहीं है। किसी भी स्वास्थ्य समस्या के लिए हमेशा योग्य डॉक्टर से संपर्क करें।',
  },

  kn: {
    badge: 'ಶೈಕ್ಷಣಿಕ ಉಲ್ಲೇಖ ಮಾರ್ಗದರ್ಶಿ',
    title: 'ಸಾಮಾನ್ಯ ಮಹಿಳಾ ಆರೋಗ್ಯ ಮತ್ತು ಹಾರ್ಮೋನ್ ಕ್ಷೇಮ ಮಾರ್ಗದರ್ಶಿ',
    noticeBanner: 'ಸೂಚನೆ: ಅಧಿಕ ಒತ್ತಡದ ಕಾರಣ ನೇರ AI ಸೇವೆ ತಾತ್ಕಾಲಿಕವಾಗಿ ಲಭ್ಯವಿಲ್ಲ. ನೀವು ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಶಿಕ್ಷಣದ ಮಾಹಿತಿಯನ್ನು ನೋಡುತ್ತಿದ್ದೀರಿ (ಇದು AI ರೋಗನಿರ್ಣಯವಲ್ಲ).',
    subtitle: 'ಇದು ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಒದಗಿಸಲಾದ ಉಲ್ಲೇಖ ಮಾಹಿತಿ. ಯಾವುದೇ AI ವಿಶ್ಲೇಷಣೆ ನಡೆಸಲಾಗಿಲ್ಲ.',
    sections: [
      {
        title: '1. ಮುಟ್ಟಿನ ಚಕ್ರ ಮತ್ತು ಸಾಮಾನ್ಯ ಬದಲಾವಣೆಗಳು',
        description: 'ಸಾಮಾನ್ಯ ಮುಟ್ಟಿನ ಚಕ್ರವು 21 ರಿಂದ 35 ದಿನಗಳವರೆಗೆ ಇರುತ್ತದೆ. ಕೆಲವೊಮ್ಮೆ ವ್ಯತ್ಯಾಸಗಳಾಗಲು ಈ ಕೆಳಗಿನವು ಕಾರಣವಾಗಬಹುದು:',
        points: [
          'ಮಾನಸಿಕ ಒತ್ತಡ ಅಥವಾ ಜೀವನಶೈಲಿಯಲ್ಲಿನ ಹಠಾತ್ ಬದಲಾವಣೆಗಳು',
          'ತೂಕದಲ್ಲಿನ ಏರುಪೇರು, ಕಠಿಣ ಡಯಟ್ ಅಥವಾ ಪೌಷ್ಟಿಕಾಂಶದ ಕೊರತೆ',
          'ಪ್ರಾಯಕ್ಕೆ ಬಂದಾಗ ಅಥವಾ ಹಾರ್ಮೋನ್ ಏರುಪೇರಾದಾಗ ಉಂಟಾಗುವ ಬದಲಾವಣೆಗಳು',
          'ಥೈರಾಯ್ಡ್ ಅಥವಾ ಇನ್ಸುಲಿನ್ ಅಸಮತೋಲನ',
        ],
      },
      {
        title: '2. ಮುಖದ ಮೊಡವೆ ಮತ್ತು ಹಾರ್ಮೋನ್ ಲಕ್ಷಣಗಳು',
        description: 'ಮಹಿಳೆಯರಲ್ಲೂ ಆಂಡ್ರೋಜನ್ ಹಾರ್ಮೋನುಗಳು ಇರುತ್ತವೆ. ಅವುಗಳ ಮಟ್ಟ ಹೆಚ್ಚಾದಾಗ ಇಂತಹ ಲಕ್ಷಣಗಳು ಕಾಣಿಸಬಹುದು:',
        points: [
          'ಗಲ್ಲ ಮತ್ತು ಮುಖದ ಮೇಲೆ ನಿರಂತರ ಮೊಡವೆಗಳು',
          'ಮುಖ ಮತ್ತು ಗಲ್ಲದ ಮೇಲೆ ಅನಗತ್ಯ ಕೂದಲು ಬೆಳೆಯುವುದು',
          'ತಲೆಕೂದಲು ಉದುರುವುದು ಅಥವಾ ತೆಳುವಾಗುವುದು',
          'ಕುತ್ತಿಗೆಯ ಭಾಗ ಕಪ್ಪಾಗುವುದು',
        ],
      },
      {
        title: '3. PCOS ನ ಸಾಮಾನ್ಯ ಮಾಹಿತಿ',
        description: 'PCOS ಒಂದು ಸಾಮಾನ್ಯ ಹಾರ್ಮೋನ್ ಸ್ಥಿತಿ. ವೈದ್ಯಕೀಯ ತಪಾಸಣೆಯ ನಂತರವೇ ಇದನ್ನು ದೃಢೀಕರಿಸಲು ಸಾಧ್ಯ:',
        points: [
          'ಅಂಡೋತ್ಪತ್ತಿ ಸರಿಯಾಗಿ ನಡೆಯದೆ ಮುಟ್ಟು ತಡವಾಗುವುದು',
          'ರಕ್ತದಲ್ಲಿ ಹಾರ್ಮೋನ್ ಮಟ್ಟದ ವ್ಯತ್ಯಾಸಗಳು',
          'ಸ್ಕ್ಯಾನಿಂಗ್‌ನಲ್ಲಿ ಸಣ್ಣ ಸಿಸ್ಟ್‌ಗಳು ಕಾಣಿಸಿಕೊಳ್ಳುವುದು',
          'ಥೈರಾಯ್ಡ್ ಪರೀಕ್ಷೆಯ ಮೂಲಕ ಇತರ ಕಾರಣಗಳನ್ನು ಪರಿಶೀಲಿಸುವುದು',
        ],
      },
      {
        title: '4. ಆರೋಗ್ಯಕರ ಜೀವನಶೈಲಿಯ ಸಲಹೆಗಳು',
        description: 'ದೈನಂದಿನ ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು ಹಾರ್ಮೋನ್ ಸಮತೋಲನಕ್ಕೆ ಸಹಕಾರಿ:',
        points: [
          'ತರಕಾರಿಗಳು, ಧಾನ್ಯಗಳು ಮತ್ತು ಪ್ರೋಟೀನ್ ಯುಕ್ತ ಪೌಷ್ಟಿಕ ಆಹಾರ ಸೇವಿಸಿ',
          'ದಿನಕ್ಕೆ 30 ನಿಮಿಷಗಳ ನಡಿಗೆ ಅಥವಾ ಯೋಗಾಭ್ಯಾಸ ಮಾಡಿ',
          'ದಿನಕ್ಕೆ 7-8 ಗಂಟೆಗಳ ಕಾಲ ಉತ್ತಮ ನಿದ್ರೆ ಪಡೆಯಿರಿ',
          'ನಿಮ್ಮ ಮುಟ್ಟಿನ ದಿನಾಂಕಗಳನ್ನು ಕ್ಯಾಲೆಂಡರ್‌ನಲ್ಲಿ ಗುರುತು ಮಾಡಿ',
        ],
      },
    ],
    doctorChecklistTitle: 'ವೈದ್ಯರನ್ನು ಭೇಟಿಯಾದಾಗ ಕೇಳಬೇಕಾದ ಪ್ರಶ್ನೆಗಳು',
    doctorQuestions: [
      'ನನ್ನ ಲಕ್ಷಣಗಳು PCOS ಅಥವಾ ಥೈರಾಯ್ಡ್ ಸಮಸ್ಯೆಗೆ ಸಂಬಂಧಿಸಿವೆಯೇ?',
      'ನಾನು ಯಾವ ರಕ್ತ ಪರೀಕ್ಷೆಗಳನ್ನು ಮಾಡಿಸಿಕೊಳ್ಳಬೇಕು?',
      'ನನಗೆ ಪೆಲ್ವಿಕ್ ಅಲ್ಟ್ರಾಸೌಂಡ್ ಸ್ಕ್ಯಾನ್ ಅಗತ್ಯವಿದೆಯೇ?',
      'ನನ್ನ ಆರೋಗ್ಯಕ್ಕೆ ಸೂಕ್ತವಾದ ಜೀವನಶೈಲಿ ಮಾರ್ಗದರ್ಶನವೇನು?',
    ],
    warningSignsTitle: 'ತಕ್ಷಣ ವೈದ್ಯರನ್ನು ಕಾಣಬೇಕಾದ ತುರ್ತು ಲಕ್ಷಣಗಳು',
    warningSigns: [
      'ಹೊಟ್ಟೆಯ ಕೆಳಭಾಗದಲ್ಲಿ ಹಠಾತ್, ತೀವ್ರವಾದ ಅಸಹನೀಯ ನೋವು',
      'ಸತತ 2 ಗಂಟೆಗಳ ಕಾಲ ಪ್ರತಿ ಗಂಟೆಗೆ 2 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಪ್ಯಾಡ್‌ಗಳು ನೆನೆಯುವಷ್ಟು ರಕ್ತಸ್ರಾವ',
      'ರಕ್ತಸ್ರಾವದೊಂದಿಗೆ ತಲೆತಿರುಗುವಿಕೆ ಅಥವಾ ಮೂರ್ಛೆ ಹೋಗುವುದು',
      'ಗರ್ಭಾವಸ್ಥೆಯ ಸಾಧ್ಯತೆಯಲ್ಲಿ ತೀವ್ರ ನೋವು ಅಥವಾ ರಕ್ತಸ್ರಾವ',
      'ಜ್ವರದೊಂದಿಗೆ ಹೊಟ್ಟೆ ನೋವು',
    ],
    disclaimer: 'ಸೂಚನೆ: ಇದು ಕೇವಲ ಸಾಮಾನ್ಯ ಶೈಕ್ಷಣಿಕ ಮಾಹಿತಿಯಾಗಿದೆ. ಯಾವುದೇ ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯವಲ್ಲ. ವೈದ್ಯಕೀಯ ಸಲಹೆಗಾಗಿ ತಜ್ಞ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
  },

  // Localization for remaining supported languages
  ta: {} as EducationalGuideData,
  te: {} as EducationalGuideData,
  ml: {} as EducationalGuideData,
  mr: {} as EducationalGuideData,
  bho: {} as EducationalGuideData,
  pa: {} as EducationalGuideData,
  bn: {} as EducationalGuideData,
};

// Fallback mappings to populate all 10 languages
const localizedKeys: SupportedLanguage[] = ['ta', 'te', 'ml', 'mr', 'bho', 'pa', 'bn'];
localizedKeys.forEach((lang) => {
  fallbackEducationContent[lang] = fallbackEducationContent.hi || fallbackEducationContent.en;
});
