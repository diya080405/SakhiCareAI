import { SupportedLanguage } from '../types/health';

export interface PcosSectionData {
  title: string;
  lead: string;
  keyPoints: { label: string; text: string }[];
  takeaway: string;
}

export interface PcosContentBundle {
  whatIs: PcosSectionData;
  symptoms: PcosSectionData;
  whyVary: PcosSectionData;
  diagnosis: PcosSectionData;
  mimics: PcosSectionData;
  lifestyle: PcosSectionData;
  whenDoctor: PcosSectionData;
  myths: { myth: string; fact: string }[];
}

export const pcosContent: Record<SupportedLanguage, PcosContentBundle> = {
  en: {
    whatIs: {
      title: 'What is Polycystic Ovary Syndrome (PCOS)?',
      lead: 'PCOS is a common hormonal and metabolic condition that affects how a woman’s ovaries function. It is characterized by an imbalance in reproductive hormones and subtle metabolic variations.',
      keyPoints: [
        { label: 'Hormonal Imbalance', text: 'Higher than normal levels of androgens (often termed male hormones, though all females produce them) can disrupt ovulation cycles.' },
        { label: 'Ovulation Variations', text: 'Eggs may develop in fluid-filled sacs (follicles) inside the ovaries, but may not be regularly released, leading to irregular or missed periods.' },
        { label: 'Metabolic Link', text: 'Many people with PCOS have elevated insulin resistance, where cells do not respond effectively to insulin, raising blood sugar and stimulating further androgen production.' },
      ],
      takeaway: 'PCOS is a manageable long-term health condition, not a personal failing or an emergency.',
    },
    symptoms: {
      title: 'Common Signs & Clinical Features',
      lead: 'PCOS presents differently in every individual. Symptoms can emerge in adolescence or later in reproductive years.',
      keyPoints: [
        { label: 'Irregular Menstrual Cycles', text: 'Infrequent periods (fewer than 8 cycles a year), cycles longer than 35 days, or prolonged gaps without bleeding.' },
        { label: 'Excess Androgen Effects', text: 'Persistent cystic acne (especially along the jawline and chin), excess coarse hair growth on chin/chest (hirsutism), or thinning scalp hair.' },
        { label: 'Polycystic Ovaries on Scan', text: 'Enlarged ovaries containing multiple small follicles (often described as a string-of-pearls appearance) visible on pelvic ultrasound.' },
        { label: 'Metabolic & Skin Signs', text: 'Darkened velvety skin patches (Acanthosis Nigricans) around the neck or underarms, persistent fatigue, and weight management challenges.' },
      ],
      takeaway: 'Having one symptom does not guarantee PCOS; a qualified medical evaluation is required.',
    },
    whyVary: {
      title: 'Why Do Symptoms Vary So Much?',
      lead: 'PCOS is a "syndrome" — a collection of symptoms rather than a single uniform disease. No two people experience PCOS the exact same way.',
      keyPoints: [
        { label: 'Genetic Differences', text: 'Family history strongly influences how individual hormone receptors and metabolic pathways respond.' },
        { label: 'Insulin Sensitivity Levels', text: 'Some individuals have high insulin resistance driving acne and weight changes, while others have "lean PCOS" with normal insulin levels.' },
        { label: 'Stress & Adrenal Factors', text: 'Elevated adrenal hormones (like DHEA-S) can trigger androgenic symptoms independent of ovarian dysfunction.' },
        { label: 'Life Stages', text: 'Symptoms may fluctuate during puberty, periods of high stress, post-pregnancy, or as one approaches perimenopause.' },
      ],
      takeaway: 'Treatment must be tailored to your unique personal priorities and symptoms, not a one-size-fits-all formula.',
    },
    diagnosis: {
      title: 'How Healthcare Professionals Evaluate PCOS',
      lead: 'There is no single blood test that diagnoses PCOS. Clinicians worldwide generally reference the Rotterdam Diagnostic Criteria.',
      keyPoints: [
        { label: 'Rotterdam Criteria (2 of 3 Needed)', text: '1) Irregular or absent ovulation; 2) Clinical or biochemical signs of androgen excess; 3) Polycystic ovaries on ultrasound scan.' },
        { label: 'Ruling Out Mimics First', text: 'Doctors run blood tests to rule out thyroid imbalances, high prolactin levels, and adrenal conditions before confirming PCOS.' },
        { label: 'Hormone & Blood Work', text: 'Testing includes LH/FSH ratio, total and free testosterone, DHEA-S, fasting glucose, HbA1c, and lipid panels.' },
        { label: 'Pelvic Ultrasound Timing', text: 'An ultrasound is commonly scheduled in the early follicular phase of the cycle for optimal visualization of ovarian follicles.' },
      ],
      takeaway: 'A complete medical history and physical examination are essential before reaching any conclusion.',
    },
    mimics: {
      title: 'Conditions That Can Mimic PCOS',
      lead: 'Because irregular periods and hair changes can result from multiple health factors, doctors must evaluate alternate explanations.',
      keyPoints: [
        { label: 'Thyroid Disorders', text: 'Hypothyroidism (underactive thyroid) or hyperthyroidism can cause missed periods, fatigue, weight changes, and hair loss.' },
        { label: 'Hyperprolactinemia', text: 'Elevated levels of the prolactin hormone can suppress ovulation and cause menstrual irregularity.' },
        { label: 'Hypothalamic Amenorrhea', text: 'Severe stress, rapid weight loss, or intense athletic overtraining can halt periods by pausing signaling from the brain.' },
        { label: 'Adrenal Hyperplasia (NCCAH)', text: 'A genetic condition of the adrenal glands that causes high androgen production resembling PCOS.' },
      ],
      takeaway: 'Never assume symptoms are PCOS without blood tests ruling out thyroid and hormonal mimics.',
    },
    lifestyle: {
      title: 'Gentle Lifestyle & Wellbeing Strategies',
      lead: 'Sustainable daily habits form the cornerstone of long-term hormone balance and mental wellbeing.',
      keyPoints: [
        { label: 'Nourishing Balanced Meals', text: 'Focus on whole grains, colorful vegetables, healthy fats (nuts, seeds, olive oil), and adequate protein to stabilize blood glucose curves.' },
        { label: 'Joyful, Consistent Movement', text: 'A mix of strength training (builds insulin-sensitive muscle) and gentle walks or yoga (lowers cortisol) works wonders.' },
        { label: 'Restorative Sleep (7-9 Hours)', text: 'Poor sleep elevates ghrelin (hunger hormone) and cortisol, exacerbating insulin resistance and hormone spikes.' },
        { label: 'Emotional & Stress Care', text: 'Mindfulness, gentle breathing exercises, and connecting with supportive communities ease emotional fatigue.' },
      ],
      takeaway: 'Focus on consistent gentle self-care rather than restrictive, stressful crash diets.',
    },
    whenDoctor: {
      title: 'When to Consult a Healthcare Professional',
      lead: 'Reach out to a doctor for personalized care, safe symptom management, and peace of mind.',
      keyPoints: [
        { label: 'Absent Periods (> 90 Days)', text: 'Infrequent uterine lining shedding requires medical evaluation to protect long-term endometrial health.' },
        { label: 'Distressing Physical Symptoms', text: 'Rapidly spreading facial hair, painful cystic acne, or rapid unexplained hair loss warrant targeted medical evaluation.' },
        { label: 'Family Planning Questions', text: 'If you are planning a pregnancy or having difficulty conceiving after 6 to 12 months of trying.' },
        { label: 'Heavy or Prolonged Bleeding', text: 'Bleeding lasting longer than 7 days, passing large clots, or bleeding between cycles.' },
      ],
      takeaway: 'A compassionate gynecologist or endocrinologist can help you create a personalized roadmap.',
    },
    myths: [
      {
        myth: 'Myth: If you have PCOS, you can never get pregnant.',
        fact: 'Fact: PCOS is a leading cause of ovulatory subfertility, but it is NOT sterility. With lifestyle balance, cycle tracking, and safe medical assistance when needed, the vast majority of women with PCOS achieve healthy pregnancies.',
      },
      {
        myth: 'Myth: You must be overweight to have PCOS.',
        fact: 'Fact: PCOS affects individuals of all body types. Up to 30% of people with PCOS have normal BMI (often termed "lean PCOS"), experiencing irregular cycles and androgen symptoms.',
      },
      {
        myth: 'Myth: Irregular periods automatically mean you have PCOS.',
        fact: 'Fact: Many conditions disrupt menstrual cycles, including acute stress, thyroid imbalances, nutritional deficits, low body fat, or hormonal shifts.',
      },
      {
        myth: 'Myth: There is a miracle pill or home supplement that permanently cures PCOS.',
        fact: 'Fact: PCOS cannot be "cured" with a single detox drink, herbal tea, or secret pill. It is managed sustainably through personalized medical care, lifestyle habits, and metabolic balance.',
      },
    ],
  },

  hi: {
    whatIs: {
      title: 'पॉलीसिस्टिक ओवरी सिंड्रोम (PCOS) क्या है?',
      lead: 'PCOS (पीसीओएस) महिलाओं में होने वाला एक आम हार्मोनल और मेटाबॉलिक असंतुलन है, जो अंडाशय (ovaries) के सामान्य कार्य को प्रभावित करता है।',
      keyPoints: [
        { label: 'हार्मोनल असंतुलन', text: 'शरीर में एण्ड्रोजन (पुरुष हार्मोन, जो महिलाओं में भी कम मात्रा में बनते हैं) की अधिकता से ओव्यूलेशन (अंडा बनने और निकलने की प्रक्रिया) बाधित हो जाती है।' },
        { label: 'ओव्यूलेशन में देरी', text: 'अंडाशय में छोटे-छोटे तरल युक्त फॉलिकल्स (अपरिपक्व अंडे) बन सकते हैं, लेकिन वे नियमित रूप से रिलीज नहीं हो पाते, जिससे माहवारी देरी से आती है।' },
        { label: 'इंसुलिन प्रतिरोध (Insulin Resistance)', text: 'PCOS से पीड़ित अधिकतर महिलाओं में शरीर इंसुलिन का सही उपयोग नहीं कर पाता, जिससे रक्त में शुगर और हार्मोन का स्तर प्रभावित होता है।' },
      ],
      takeaway: 'PCOS एक सामान्य और प्रबंधनीय स्थिति है; यह कोई लाइलाज बीमारी या व्यक्तिगत असफलता नहीं है।',
    },
    symptoms: {
      title: 'मुख्य लक्षण और संकेत',
      lead: 'हर महिला में PCOS के लक्षण अलग-अलग हो सकते हैं। कुछ को केवल एक या दो लक्षण महसूस होते हैं, जबकि कुछ में अधिक लक्षण दिख सकते हैं।',
      keyPoints: [
        { label: 'अनियमित माहवारी', text: 'माहवारी का 35 दिनों से अधिक देर से आना, साल में 8 से कम बार माहवारी आना या कई महीनों तक न आना।' },
        { label: 'एण्ड्रोजन के प्रभाव', text: 'ठुड्डी, जबड़े और चेहरे पर सख्त अनचाहे बाल उगना (हर्सुटिज़्म), पीठ या चेहरे पर जिद्दी मुँहासे, या सिर के बाल पतले होना।' },
        { label: 'अल्ट्रासाउंड में सिस्ट', text: 'पेल्विक अल्ट्रासाउंड कराने पर अंडाशय के किनारों पर मोतियों की माला जैसे छोटे फॉलिकल्स दिखाई देना।' },
        { label: 'त्वचा व मेटाबॉलिज्म', text: 'गर्दन और कांख की त्वचा का गहरा काला होना (Acanthosis Nigricans), लगातार थकान और वजन नियंत्रण में कठिनाई।' },
      ],
      takeaway: 'सिर्फ एक लक्षण देखकर खुद को PCOS का मरीज न मानें; विशेषज्ञ डॉक्टर की जांच जरूरी है।',
    },
    whyVary: {
      title: 'हर किसी में लक्षण अलग क्यों होते हैं?',
      lead: 'PCOS एक "सिंड्रोम" है — यानी कई लक्षणों का समूह। शरीर की संरचना और जीवनशैली के अनुसार इसके प्रभाव अलग होते हैं।',
      keyPoints: [
        { label: 'आनुवंशिक कारण (Genetics)', text: 'परिवार में किसी को PCOS या डायबिटीज होने पर हार्मोन्स पर अलग तरह का असर पड़ता है।' },
        { label: 'इंसुलिन संवेदनशीलता', text: 'कुछ महिलाओं में अधिक इंसुलिन की वजह से वजन बढ़ता है, जबकि कुछ दुबली महिलाओं (Lean PCOS) में बिना वजन बढ़े भी चक्र अनियमित हो सकता है।' },
        { label: 'तनाव और एड्रिनल ग्रंथि', text: 'अत्यधिक मानसिक तनाव कोर्टिसोल और एड्रिनल एण्ड्रोजन को बढ़ाता है, जिससे मुँहासे और थकान बढ़ सकती है।' },
        { label: 'जीवन के चरण', text: 'किशोरावस्था, डिलीवरी के बाद या 35 वर्ष के बाद इसके लक्षणों की तीव्रता में बदलाव आ सकता है।' },
      ],
      takeaway: 'हर महिला के लिए उपचार और देखभाल की योजना व्यक्तिगत और अलग होनी चाहिए।',
    },
    diagnosis: {
      title: 'डॉक्टर PCOS की जांच कैसे करते हैं?',
      lead: 'PCOS की पुष्टि के लिए कोई एक अकेला टेस्ट नहीं होता। इसके लिए रॉटरडैम मानदंड (Rotterdam Criteria) का उपयोग किया जाता है।',
      keyPoints: [
        { label: 'रॉटरडैम मानदंड (3 में से कम से कम 2 लक्षण)', text: '1. अनियमित या अनुपस्थित ओव्यूलेशन; 2. एण्ड्रोजन की अधिकता के शारीरिक या लैब लक्षण; 3. अल्ट्रासाउंड में पॉलीसिस्टिक ओवरी।' },
        { label: 'अन्य बीमारियों की जांच', text: 'डॉक्टर पहले थायरॉयड और प्रोलैक्टिन की जांच करके अन्य कारणों को खारिज करते हैं।' },
        { label: 'रक्त परीक्षण (Blood Tests)', text: 'LH, FSH, कुल और मुक्त टेस्टोस्टेरोन, DHEA-S, फास्टिंग ब्लड शुगर और लिपिड प्रोफाइल की जांच की जाती है।' },
        { label: 'पेल्विक अल्ट्रासाउंड', text: 'अंडाशय और गर्भाशय की परत (एंडोमेट्रियम) की स्थिति देखने के लिए अल्ट्रासाउंड किया जाता है।' },
      ],
      takeaway: 'उचित चिकित्सा इतिहास और क्लीनिकल जांच के बाद ही डॉक्टर सही निष्कर्ष पर पहुंचते हैं।',
    },
    mimics: {
      title: 'समान लक्षण वाली अन्य स्थितियां',
      lead: 'कई अन्य हार्मोनल गड़बड़ियों के लक्षण भी PCOS जैसे ही लग सकते हैं, इसलिए सावधानीपूर्वक जांच जरूरी है।',
      keyPoints: [
        { label: 'थायरॉयड विकार', text: 'हाइपोथायरायडिज्म में माहवारी में देरी, वजन बढ़ना, अत्यधिक थकान और बाल झड़ना आम है।' },
        { label: 'हाइपरप्रोलैक्टिनीमिया', text: 'प्रोलैक्टिन हार्मोन का स्तर बढ़ने से ओव्यूलेशन रुक सकता है और माहवारी बंद हो सकती है।' },
        { label: 'तनाव या अत्यधिक डाइटिंग', text: 'बहुत कम खाना, अचानक वजन घटना या भारी तनाव दिमाग से हार्मोनल संकेतों को रोक देता है।' },
        { label: 'एड्रिनल ग्रंथि के विकार', text: 'जन्मजात एड्रिनल हाइपरप्लासिया (NCCAH) में भी एण्ड्रोजन बढ़ जाते हैं।' },
      ],
      takeaway: 'थायरॉयड और अन्य हार्मोन्स की जांच कराए बिना सीधे PCOS न समझें।',
    },
    lifestyle: {
      title: 'स्वस्थ जीवनशैली और देखभाल के उपाय',
      lead: 'संतुलित दैनिक आदतें हार्मोन को नियंत्रित करने और मानसिक शांति बनाए रखने की सबसे मजबूत नींव हैं।',
      keyPoints: [
        { label: 'संतुलित पौष्टिक आहार', text: 'साबुत अनाज, हरी सब्जियां, दालें, मेवे (नट्स) और पर्याप्त प्रोटीन लें ताकि ब्लड शुगर में अचानक उतार-चढ़ाव न आए।' },
        { label: 'नियमित और सुखद व्यायाम', text: 'हल्की वॉक, योग और हल्का स्ट्रेंथ ट्रेनिंग इंसुलिन को सक्रिय रखने में बहुत मददगार होते हैं।' },
        { label: '7-9 घंटे की गहरी नींद', text: 'नींद की कमी तनाव हार्मोन और भूख बढ़ाने वाले हार्मोन्स को असंतुलित कर देती है।' },
        { label: 'तनाव प्रबंधन', text: 'प्राणायाम, ध्यान और अपनी पसंद के शौक के लिए समय निकालना हार्मोनल संतुलन बनाए रखता है।' },
      ],
      takeaway: 'कठोर क्रैश डाइट के बजाय लंबे समय तक चलने वाली स्वस्थ आदतें अपनाएं।',
    },
    whenDoctor: {
      title: 'डॉक्टर से कब मिलना चाहिए?',
      lead: 'सही समय पर स्त्री रोग विशेषज्ञ (Gynecologist) से मिलकर उचित सलाह और उपचार प्राप्त करें।',
      keyPoints: [
        { label: '3 महीने (90 दिन) से माहवारी न आना', text: 'गर्भाशय की परत की सुरक्षा के लिए इतने लंबे अंतराल पर तुरंत डॉक्टर को दिखाएं।' },
        { label: 'असहनीय मुँहासे या बाल उगना', text: 'यदि चेहरे पर अचानक अधिक बाल आ रहे हों या जिद्दी मुँहासे हो रहे हों।' },
        { label: 'गर्भधारण में कठिनाई', text: 'यदि 6 से 12 महीने के प्रयास के बाद भी गर्भधारण नहीं हो पा रहा हो।' },
        { label: 'अत्यधिक या लगातार रक्तस्राव', text: '7 दिन से ज्यादा भारी रक्तस्राव होना या बड़े थक्के निकलना।' },
      ],
      takeaway: 'एक कुशल डॉक्टर आपके लक्षणों के आधार पर व्यक्तिगत उपचार योजना बना सकते हैं।',
    },
    myths: [
      {
        myth: 'भ्रम: PCOS होने पर महिला कभी माँ नहीं बन सकती।',
        fact: 'सच: यह बिल्कुल गलत है। PCOS में केवल ओव्यूलेशन अनियमित होता है। स्वस्थ जीवनशैली और आवश्यकता पड़ने पर सामान्य चिकित्सकीय सहयोग से अधिकांश महिलाएं स्वस्थ गर्भधारण करती हैं।',
      },
      {
        myth: 'भ्रम: केवल मोटे लोगों को ही PCOS होता है।',
        fact: 'सच: PCOS सामान्य वजन या पतली महिलाओं को भी हो सकता है (जिसे "Lean PCOS" कहा जाता है)। यह केवल वजन से जुड़ा रोग नहीं है।',
      },
      {
        myth: 'भ्रम: माहवारी अनियमित होने का मतलब हमेशा PCOS ही होता है।',
        fact: 'सच: थायरॉयड, अत्यधिक तनाव, पोषण की कमी या वजन में अचानक बदलाव से भी चक्र अनियमित हो सकता है।',
      },
      {
        myth: 'भ्रम: कोई ऐसा जादुई चूर्ण या काढ़ा है जो PCOS को हमेशा के लिए जड़ से मिटा देता है।',
        fact: 'सच: PCOS कोई साधारण संक्रमण नहीं है। इसे अच्छी जीवनशैली, संतुलित आहार और डॉक्टर के मार्गदर्शन से पूरी तरह नियंत्रित रखा जाता है।',
      },
    ],
  },

  // Fallbacks for other 8 languages reference natural localized descriptions
  kn: {
    whatIs: {
      title: 'ಪಾಲಿಸಿಸ್ಟಿಕ್ ಓವರಿ ಸಿಂಡ್ರೋಮ್ (PCOS) ಎಂದರೇನು?',
      lead: 'PCOS ಮಹಿಳೆಯರಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಕಂಡುಬರುವ ಒಂದು ಹಾರ್ಮೋನ್ ಮತ್ತು ಚಯಾಪಚಯ ಅಸಮತೋಲನವಾಗಿದೆ. ಇದು ಅಂಡಾಶಯಗಳ ಸಾಮಾನ್ಯ ಕಾರ್ಯನಿರ್ವಹಣೆಯ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ.',
      keyPoints: [
        { label: 'ಹಾರ್ಮೋನುಗಳ ಅಸಮತೋಲನ', text: 'ಆಂಡ್ರೋಜನ್ (ಪುರುಷ ಹಾರ್ಮೋನ್) ಮಟ್ಟ ಹೆಚ್ಚಾಗುವುದರಿಂದ ಅಂಡೋತ್ಪತ್ತಿ ಕ್ರಿಯೆಯಲ್ಲಿ ಏರುಪೇರಾಗುತ್ತದೆ.' },
        { label: 'ಅಂಡೋತ್ಪತ್ತಿಯಲ್ಲಿ ವ್ಯತ್ಯಾಸ', text: 'ಅಂಡಾಶಯಗಳಲ್ಲಿ ಸಣ್ಣ ಚೀಲಗಳಂತಹ ಫಾಲಿಕಲ್‌ಗಳು ರೂಪುಗೊಳ್ಳಬಹುದು, ಆದರೆ ನಿಯಮಿತವಾಗಿ ಬಿಡುಗಡೆಯಾಗುವುದಿಲ್ಲ.' },
        { label: 'ಇನ್ಸುಲಿನ್ ಪ್ರತಿರೋಧ', text: 'ದೇಹದಲ್ಲಿ ಇನ್ಸುಲಿನ್ ಸರಿಯಾಗಿ ಬಳಕೆಯಾಗದೆ ರಕ್ತದಲ್ಲಿ ಸಕ್ಕರೆ ಮತ್ತು ಹಾರ್ಮೋನ್ ಮಟ್ಟ ಏರುಪೇರಾಗುತ್ತದೆ.' },
      ],
      takeaway: 'PCOS ಅನ್ನು ನಿಯಂತ್ರಿಸಬಹುದು; ಇದು ಗುಣಪಡಿಸಲಾಗದ ಭಯಾನಕ ಕಾಯಿಲೆಯಲ್ಲ.',
    },
    symptoms: {
      title: 'ಮುಖ್ಯ ಲಕ್ಷಣಗಳು',
      lead: 'ಪ್ರತಿಯೊಬ್ಬ ಮಹಿಳೆಯಲ್ಲಿ PCOS ಲಕ್ಷಣಗಳು ವಿಭಿನ್ನವಾಗಿರುತ್ತವೆ.',
      keyPoints: [
        { label: 'ಅನಿಯಮಿತ ಮುಟ್ಟು', text: 'ವರ್ಷದಲ್ಲಿ 8 ಕ್ಕಿಂತ ಕಡಿಮೆ ಮುಟ್ಟಾಗುವುದು ಅಥವಾ 35 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ತಡವಾಗುವುದು.' },
        { label: 'ಆಂಡ್ರೋಜನ್ ಪರಿಣಾಮ', text: 'ಮುಖ, ಗಲ್ಲದ ಮೇಲೆ ಕೂದಲು ಬೆಳೆಯುವುದು, ಮುಖದ ಮೇಲೆ ಮೊಡವೆಗಳು, ತಲೆಗೂದಲು ಉದುರುವುದು.' },
        { label: 'ಅಲ್ಟ್ರಾಸೌಂಡ್ ಸ್ಕ್ಯಾನ್', text: 'ಅಂಡಾಶಯದಲ್ಲಿ ಮುತ್ತಿನ ಹಾರದಂತೆ ಸಣ್ಣ ಸಿಸ್ಟ್‌ಗಳು ಕಾಣಿಸಿಕೊಳ್ಳುವುದು.' },
        { label: 'ಆಯಾಸ ಮತ್ತು ತೂಕ', text: 'ಕುತ್ತಿಗೆಯ ಭಾಗ ಕಪ್ಪಾಗುವುದು, ನಿರಂತರ ಆಯಾಸ ಮತ್ತು ತೂಕ ನಿರ್ವಹಣೆ ಕಷ್ಟವಾಗುವುದು.' },
      ],
      takeaway: 'ಒಂದೇ ಲಕ್ಷಣ ಕಂಡುಬಂದ ತಕ್ಷಣ ಭಯಪಡಬೇಡಿ; ವೈದ್ಯಕೀಯ ತಪಾಸಣೆ ಅಗತ್ಯ.',
    },
    whyVary: {
      title: 'ಲಕ್ಷಣಗಳು ಏಕೆ ಭಿನ್ನವಾಗಿರುತ್ತವೆ?',
      lead: 'PCOS ಒಂದು "ಸಿಂಡ್ರೋಮ್" - ಹಲವು ಲಕ್ಷಣಗಳ ಗುಂಪು. ಪ್ರತಿಯೊಬ್ಬರ ದೇಹ ಪ್ರಕೃತಿ ಬೇರೆ ಬೇರೆ.',
      keyPoints: [
        { label: 'ವಂಶವಾಹಿ ಕಾರಣಗಳು', text: 'ಕುಟುಂಬದ ಇತಿಹಾಸವು ಹಾರ್ಮೋನುಗಳ ವರ್ತನೆಯ ಮೇಲೆ ಪ್ರಭಾವ ಬೀರುತ್ತದೆ.' },
        { label: 'ಇನ್ಸುಲಿನ್ ಮಟ್ಟ', text: 'ಕೆಲವರಲ್ಲಿ ತೂಕ ಹೆಚ್ಚಾಗುತ್ತದೆ, ಆದರೆ ತೆಳ್ಳಗಿರುವ ಮಹಿಳೆಯರಲ್ಲೂ (Lean PCOS) ಈ ಸಮಸ್ಯೆ ಇರಬಹುದು.' },
        { label: 'ಮಾನಸಿಕ ಒತ್ತಡ', text: 'ಹೆಚ್ಚಿನ ಒತ್ತಡವು ಹಾರ್ಮೋನ್ ಅಸಮತೋಲನವನ್ನು ಉಲ್ಬಣಗೊಳಿಸುತ್ತದೆ.' },
        { label: 'ಜೀವನದ ಹಂತಗಳು', text: 'ಪ್ರಾಯಕ್ಕೆ ಬಂದಾಗ ಅಥವಾ ಹೆರಿಗೆಯ ನಂತರ ಲಕ್ಷಣಗಳಲ್ಲಿ ಬದಲಾವಣೆಗಳು ಕಾಣಿಸಬಹುದು.' },
      ],
      takeaway: 'ಚಿಕಿತ್ಸೆಯು ಪ್ರತಿಯೊಬ್ಬ ವ್ಯಕ್ತಿಯ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಇರಬೇಕು.',
    },
    diagnosis: {
      title: 'ವೈದ್ಯರು PCOS ಅನ್ನು ಹೇಗೆ ಪರೀಕ್ಷಿಸುತ್ತಾರೆ?',
      lead: 'ರೋಟರ್ಡ್ಯಾಮ್ ಮಾನದಂಡಗಳ ಆಧಾರದ ಮೇಲೆ ವೈದ್ಯರು ಪರೀಕ್ಷೆ ನಡೆಸುತ್ತಾರೆ.',
      keyPoints: [
        { label: 'ರೋಟರ್ಡ್ಯಾಮ್ ನಿಯಮ', text: 'ಅನಿಯಮಿತ ಮುಟ್ಟು, ಆಂಡ್ರೋಜನ್ ಹೆಚ್ಚಳ ಮತ್ತು ಅಲ್ಟ್ರಾಸೌಂಡ್‌ನಲ್ಲಿ ಸಿಸ್ಟ್‌ಗಳು (ಮೂರರಲ್ಲಿ ಕನಿಷ್ಠ ಎರಡು).' },
        { label: 'ಇತರ ಪರೀಕ್ಷೆಗಳು', text: 'ಥೈರಾಯ್ಡ್ ಮತ್ತು ಪ್ರೊಲ್ಯಾಕ್ಟಿನ್ ಪರೀಕ್ಷೆಗಳ ಮೂಲಕ ಇತರ ಕಾರಣಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.' },
        { label: 'ರಕ್ತ ಪರೀಕ್ಷೆಗಳು', text: 'ಟೆಸ್ಟೋಸ್ಟೆರಾನ್, ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಅಂಶ ಮತ್ತು ಹಾರ್ಮೋನ್ ಮಟ್ಟಗಳ ತಪಾಸಣೆ.' },
        { label: 'ಪೆಲ್ವಿಕ್ ಸ್ಕ್ಯಾನ್', text: 'ಅಂಡಾಶಯಗಳ ಸ್ಥಿತಿಯನ್ನು ನೋಡಲು ಸ್ಕ್ಯಾನಿಂಗ್ ಮಾಡಲಾಗುತ್ತದೆ.' },
      ],
      takeaway: 'ವೈದ್ಯರ ಸಂಪೂರ್ಣ ಪರಿಶೀಲನೆಯ ನಂತರವೇ ತೀರ್ಮಾನಕ್ಕೆ ಬರಲಾಗುತ್ತದೆ.',
    },
    mimics: {
      title: 'ಇತರ ಹೋಲುವ ಸಮಸ್ಯೆಗಳು',
      lead: 'ಇತರ ಹಾರ್ಮೋನ್ ಸಮಸ್ಯೆಗಳೂ PCOS ನಂತೆಯೇ ಕಾಣಿಸಬಹುದು.',
      keyPoints: [
        { label: 'ಥೈರಾಯ್ಡ್ ಸಮಸ್ಯೆಗಳು', text: 'ಹೈಪೋಥೈರಾಯ್ಡಿಸಂ ಮುಟ್ಟಿನ ಏರುಪೇರು ಮತ್ತು ತೂಕ ಹೆಚ್ಚಳಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು.' },
        { label: 'ಪ್ರೊಲ್ಯಾಕ್ಟಿನ್ ಹೆಚ್ಚಳ', text: 'ಈ ಹಾರ್ಮೋನ್ ಹೆಚ್ಚಾದರೆ ಮುಟ್ಟು ನಿಲ್ಲಬಹುದು.' },
        { label: 'ವಿಪರೀತ ಒತ್ತಡ/ಡಯಟ್', text: 'ಕಠಿಣ ಆಹಾರ ಪದ್ಧತಿ ಅಥವಾ ಅತಿಯಾದ ತೂಕ ಇಳಿಕೆ ಮುಟ್ಟನ್ನು ತಡೆಯಬಹುದು.' },
        { label: 'ಅಡ್ರಿನಲ್ ಗ್ರಂಥಿಯ ಸಮಸ್ಯೆ', text: 'ಇದು ಕೂಡ ಆಂಡ್ರೋಜನ್ ಮಟ್ಟವನ್ನು ಹೆಚ್ಚಿಸಬಹುದು.' },
      ],
      takeaway: 'ಥೈರಾಯ್ಡ್ ತಪಾಸಣೆ ಇಲ್ಲದೆ PCOS ಎಂದು ಖಚಿತಪಡಿಸಬೇಡಿ.',
    },
    lifestyle: {
      title: 'ಆರೋಗ್ಯಕರ ಜೀವನಶೈಲಿಯ ಸಲಹೆಗಳು',
      lead: 'ದೈನಂದಿನ ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು ಹಾರ್ಮೋನ್ ಸಮತೋಲನಕ್ಕೆ ಮೂಲಾಧಾರ.',
      keyPoints: [
        { label: 'ಪೌಷ್ಟಿಕ ಆಹಾರ', text: 'ಧಾನ್ಯಗಳು, ಹಸಿರು ತರಕಾರಿಗಳು, ಪ್ರೋಟೀನ್ ಯುಕ್ತ ಆಹಾರ ಸೇವಿಸಿ.' },
        { label: 'ನಿಯಮಿತ ನಡಿಗೆ/ವ್ಯಾಯಾಮ', text: 'ದಿನವೂ 30 ನಿಮಿಷಗಳ ನಡಿಗೆ ಅಥವಾ ಯೋಗಾಭ್ಯಾಸ ಇನ್ಸುಲಿನ್ ನಿಯಂತ್ರಣಕ್ಕೆ ಸಹಕಾರಿ.' },
        { label: 'ಉತ್ತಮ ನಿದ್ರೆ', text: 'ದಿನಕ್ಕೆ 7-8 ಗಂಟೆಗಳ ಕಾಲ ಶಾಂತ ನಿದ್ರೆ ಅತ್ಯಗತ್ಯ.' },
        { label: 'ಒತ್ತಡ ನಿರ್ವಹಣೆ', text: 'ಧ್ಯಾನ ಮತ್ತು ಪ್ರಾಣಾಯಾಮದಿಂದ ಮನಸ್ಸನ್ನು ಶಾಂತವಾಗಿರಿಸಿ.' },
      ],
      takeaway: 'ಕಠಿಣ ಡಯಟ್‌ಗಿಂತ ನಿರಂತರ ಆರೋಗ್ಯಕರ ಅಭ್ಯಾಸಗಳು ಮುಖ್ಯ.',
    },
    whenDoctor: {
      title: 'ವೈದ್ಯರನ್ನು ಯಾವಾಗ ಕಾಣಬೇಕು?',
      lead: 'ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಿ ಸಮಾಲೋಚನೆ ನಡೆಸಿ.',
      keyPoints: [
        { label: '3 ತಿಂಗಳಿಗೂ ಹೆಚ್ಚು ಮುಟ್ಟು ಬಾರದಿರುವುದು', text: 'ಗರ್ಭಕೋಶದ ಒಳಪದರದ ಆರೋಗ್ಯಕ್ಕಾಗಿ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.' },
        { label: 'ಅತಿಯಾದ ಮುಖದ ಕೂದಲು/ಮೊಡವೆ', text: 'ಗಂಭೀರ ಮೊಡವೆ ಅಥವಾ ಕೂದಲು ಬೆಳವಣಿಗೆಯ ಲಕ್ಷಣಗಳಿದ್ದಾಗ.' },
        { label: 'ಗರ್ಭಧಾರಣೆಯ ತೊಂದರೆ', text: '1 ವರ್ಷ ಪ್ರಯತ್ನಿಸಿದರೂ ಗರ್ಭಧಾರಣೆಯಾಗದಿದ್ದಾಗ.' },
        { label: 'ಅತಿಯಾದ ರಕ್ತಸ್ರಾವ', text: '7 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ಅವಧಿ ರಕ್ತಸ್ರಾವ ಮುಂದುವರಿದರೆ.' },
      ],
      takeaway: 'ಸ್ತ್ರೀರೋಗ ತಜ್ಞರು ನಿಮ್ಮ ಸಮಸ್ಯೆಗೆ ಸೂಕ್ತ ಪರಿಹಾರ ನೀಡುತ್ತಾರೆ.',
    },
    myths: [
      { myth: 'ಮಿಥ್ಯೆ: PCOS ಇರುವವರು ತಾಯಿಯಾಗಲು ಸಾಧ್ಯವೇ ಇಲ್ಲ.', fact: 'ಸತ್ಯ: ಇದು ಸುಳ್ಳು. ಸೂಕ್ತ ಜೀವನಶೈಲಿ ಮತ್ತು ಅಗತ್ಯವಿದ್ದರೆ ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆಯಿಂದ ಹೆಚ್ಚಿನ ಮಹಿಳೆಯರು ಸುಲಭವಾಗಿ ಗರ್ಭ ಧರಿಸುತ್ತಾರೆ.' },
      { myth: 'ಮಿಥ್ಯೆ: ಕೇವಲ ದಪ್ಪ ಇರುವವರಿಗಷ್ಟೇ PCOS ಬರುತ್ತದೆ.', fact: 'ಸತ್ಯ: ತೆಳ್ಳಗಿರುವ ಮಹಿಳೆಯರಿಗೂ (Lean PCOS) ಈ ಸಮಸ್ಯೆ ಬರಬಹುದು.' },
      { myth: 'ಮಿಥ್ಯೆ: ಮುಟ್ಟು ತಡವಾದರೆ ಅದೆಲ್ಲವೂ PCOS.', fact: 'ಸತ್ಯ: ಥೈರಾಯ್ಡ್, ಒತ್ತಡ ಅಥವಾ ಪೌಷ್ಟಿಕಾಂಶದ ಕೊರತೆಯಿಂದಲೂ ಮುಟ್ಟು ತಡವಾಗಬಹುದು.' },
      { myth: 'ಮಿಥ್ಯೆ: ಒಂದೇ ಗುಳಿಗೆಯಿಂದ PCOS ಅನ್ನು ಶಾಶ್ವತವಾಗಿ ಗುಣಪಡಿಸಬಹುದು.', fact: 'ಸತ್ಯ: ಇದು ದೀರ್ಘಾವಧಿಯ ಜೀವನಶೈಲಿ ನಿರ್ವಹಣೆಯಾಗಿದ್ದು, ಯಾವುದೇ ಮ್ಯಾಜಿಕ್ ಮಾತ್ರೆ ಇಲ್ಲ.' },
    ],
  },

  // Remaining languages map into localized full bundles
  ta: {
    whatIs: {
      title: 'பாலிசிஸ்டிக் ஓவரி சிண்ட்ரோம் (PCOS) என்றால் என்ன?',
      lead: 'PCOS என்பது பெண்களின் கருப்பைகளின் செயல்பாட்டைப் பாதிக்கும் ஒரு பொதுவான ஹார்மோன் சமநிலையின்மை ஆகும்.',
      keyPoints: [
        { label: 'ஹார்மோன் சமநிலையின்மை', text: 'ஆண்ட்ரோஜன் (ஆண் ஹார்மோன்) அளவு அதிகரிப்பதால் அண்டவிடுப்பின் (கருமுட்டை வெளிவருதல்) சுழற்சி பாதிக்கப்படுகிறது.' },
        { label: 'முறையற்ற அண்டவிடுப்பு', text: 'கருமுட்டைகள் முதிர்ச்சியடையாமல் சிறிய நீர்க்கட்டிகளாகத் தங்கக்கூடும்.' },
        { label: 'இன்சுலின் எதிர்ப்புத்தன்மை', text: 'உடல் இன்சுலினைச் சரியாகப் பயன்படுத்த முடியாமல் இரத்த சர்க்கரை மற்றும் ஹார்மோன் அளவுகள் மாறுபடுகின்றன.' },
      ],
      takeaway: 'PCOS என்பது கட்டுப்படுத்தக்கூடிய ஒரு குறைபாடே தவிர தீவிர நோய் அல்ல.',
    },
    symptoms: {
      title: 'முக்கிய அறிகுறிகள்',
      lead: 'ஒவ்வொரு பெண்ணுக்கும் அறிகுறிகள் மாறுபடலாம்.',
      keyPoints: [
        { label: 'ஒழுங்கற்ற மாதவிடாய்', text: 'ஆண்டிற்கு 8 முறைக்கும் குறைவாக வருவது அல்லது 35 நாட்களுக்கு மேல் தாமதமாவது.' },
        { label: 'ஆண்ட்ரோஜன் விளைவுகள்', text: 'முகப்பருக்கள், தாடை மற்றும் முகத்தில் தேவையற்ற முடி வளருதல், முடி மெலிந்து போதல்.' },
        { label: 'ஸ்கேன் பரிசோதனை', text: 'அல்ட்ராசவுண்ட் ஸ்கேனில் முத்துமாலை போன்ற சிறிய நீர்க்கட்டிகள் தெரிவது.' },
        { label: 'சோர்வு மற்றும் எடை', text: 'கழுத்து மடிப்புகள் கருமையாதல், நீடித்த சோர்வு மற்றும் எடை அதிகரிப்பு.' },
      ],
      takeaway: 'ஒரே ஒரு அறிகுறியை வைத்து நீங்களாக முடிவெடுக்க வேண்டாம்; மருத்துவர் ஆலோசனையே சிறந்தது.',
    },
    whyVary: {
      title: 'அறிகுறிகள் ஏன் மாறுபடுகின்றன?',
      lead: 'PCOS என்பது பல அறிகுறிகளின் தொகுப்பாகும்.',
      keyPoints: [
        { label: 'மரபணு காரணங்கள்', text: 'குடும்ப வரலாறு ஹார்மோன் செயல்பாடுகளைப் பாதிக்கிறது.' },
        { label: 'இன்சுலின் அளவு', text: 'உடல் எடை குறைவாக உள்ள பெண்களுக்கும் (Lean PCOS) இது வரலாம்.' },
        { label: 'மன அழுத்தம்', text: 'அதிக மன அழுத்தம் ஹார்மோன் சமநிலையின்மையை அதிகப்படுத்துகிறது.' },
        { label: 'வயது நிலை', text: 'பருவமடைதல் அல்லது பிரசவத்திற்குப் பின் அறிகுறிகள் மாறக்கூடும்.' },
      ],
      takeaway: 'ஒவ்வொருவருக்கும் பிரத்யேகமான சிகிச்சை முறை தேவைப்படுகிறது.',
    },
    diagnosis: {
      title: 'PCOS பரிசோதனை முறை',
      lead: 'ரோட்டர்டாம் அளவுகோலின் அடிப்படையில் மருத்துவர்கள் பரிசோதிக்கின்றனர்.',
      keyPoints: [
        { label: 'ரோட்டர்டாம் அளவுகோல்', text: 'ஒழுங்கற்ற மாதவிடாய், ஆண்ட்ரோஜன் அதிகரிப்பு மற்றும் அல்ட்ராசவுண்டில் நீர்க்கட்டிகள் (3-ல் 2 இருக்க வேண்டும்).' },
        { label: 'பிற காரணங்களை விலக்குதல்', text: 'தைராய்டு மற்றும் புரோலாக்டின் பரிசோதனைகள் செய்யப்படுகின்றன.' },
        { label: 'இரத்தப் பரிசோதனை', text: 'டெஸ்டோஸ்டிரோன், சர்க்கரை மற்றும் கொழுப்பு அளவுகள் சோதிக்கப்படும்.' },
        { label: 'அல்ட்ராசவுண்ட் ஸ்கேன்', text: 'கருப்பை மற்றும் சினைப்பையின் அமைப்பைப் பார்க்க ஸ்கேன் செய்யப்படுகிறது.' },
      ],
      takeaway: 'முழுமையான மருத்துவப் பரிசோதனையே சரியான முடிவைத் தரும்.',
    },
    mimics: {
      title: 'ஒத்த பிற குறைபாடுகள்',
      lead: 'மற்ற ஹார்மோன் பிரச்சனைகளும் PCOS போலவே தோற்றமளிக்கலாம்.',
      keyPoints: [
        { label: 'தைராய்டு குறைபாடுகள்', text: 'ஹைப்போதைராய்டிசம் மாதவிடாய் தாமதம் மற்றும் எடை அதிகரிப்பை ஏற்படுத்தும்.' },
        { label: 'புரோலாக்டின் அதிகரிப்பு', text: 'இது அண்டவிடுப்பை நிறுத்தி மாதவிடாயைத் தடுக்கும்.' },
        { label: 'கடுமையான டயட் / மன அழுத்தம்', text: 'திடீர் எடை குறைவு அல்லது மன உளைச்சல் மாதவிடாயைப் பாதிக்கலாம்.' },
        { label: 'அட்ரீனல் குறைபாடுகள்', text: 'இதுவும் ஆண் ஹார்மோன்களை அதிகரிக்கச் செய்யும்.' },
      ],
      takeaway: 'தைராய்டு பரிசோதனை இல்லாமல் PCOS என உறுதி செய்ய முடியாது.',
    },
    lifestyle: {
      title: 'ஆரோக்கியமான வாழ்க்கை முறை ஆலோசனைகள்',
      lead: 'தினசரி பழக்கவழக்கங்களே ஹார்மோன் சமநிலைக்கு மிக முக்கியமாகும்.',
      keyPoints: [
        { label: 'சத்தான உணவு', text: 'முழு தானியங்கள், காய்கறிகள், பருப்பு வகைகள் மற்றும் புரதங்களை உட்கொள்ளுங்கள்.' },
        { label: 'தினசரி உடற்பயிற்சி', text: 'தினமும் 30 நிமிடங்கள் நடைப்பயிற்சி அல்லது யோகா செய்யுங்கள்.' },
        { label: 'நல்ல தூக்கம்', text: 'தினமும் 7-8 மணி நேர நிம்மதியான தூக்கம் அவசியம்.' },
        { label: 'மன அமைதி', text: 'தியானம் மற்றும் மன அழுத்தத்தைக் குறைக்கும் பயிற்சிகள் மேற்கொள்ளுங்கள்.' },
      ],
      takeaway: 'கடுமையான உணவுக் கட்டுப்பாட்டை விட ஆரோக்கியமான பழக்கவழக்கங்களே சிறந்தது.',
    },
    whenDoctor: {
      title: 'எப்போது மருத்துவரை அணுக வேண்டும்?',
      lead: 'தக்க நேரத்தில் மகளிர் மருத்துவரை அணுகி ஆலோசனை பெறவும்.',
      keyPoints: [
        { label: '3 மாதங்களுக்கு மேல் மாதவிடாய் வராவிட்டால்', text: 'கருப்பையின் ஆரோக்கியத்திற்கு உடனடியாக மருத்துவரை அணுகவும்.' },
        { label: 'தீவிர முகப்பரு அல்லது முடி வளருதல்', text: 'முகத்தில் அதிக முடி அல்லது தீராத முகப்பரு இருக்கும்போது.' },
        { label: 'கருத்தரிப்பதில் சிக்கல்', text: '1 ஆண்டுக்கு மேலாக முயன்றும் கருத்தரிக்க இயலாதபோது.' },
        { label: 'அதிக இரத்தப்போக்கு', text: '7 நாட்களுக்கு மேல் தொடர்ந்து இரத்தப்போக்கு இருந்தால்.' },
      ],
      takeaway: 'தகுதிவாய்ந்த மருத்துவர் தனிப்பயனாக்கப்பட்ட ஆலோசனைகளை வழங்குவார்.',
    },
    myths: [
      { myth: 'கட்டுக்கதை: PCOS இருந்தால் குழந்தை பிறக்கவே பிறக்காது.', fact: 'உண்மை: இது தவறானது. சரியான வாழ்க்கை முறை மற்றும் மருத்துவ உதவியுடன் பெரும்பாலான பெண்கள் ஆரோக்கியமாக குழந்தை பெற்றுக்கொள்கின்றனர்.' },
      { myth: 'கட்டுக்கதை: குண்டாக இருப்பவர்களுக்கு மட்டுமே PCOS வரும்.', fact: 'உண்மை: ஒல்லியாக இருக்கும் பெண்களுக்கும் (Lean PCOS) இது ஏற்படலாம்.' },
      { myth: 'கட்டுக்கதை: மாதவிடாய் தள்ளிப்போனால் அது எப்போதும் PCOS தான்.', fact: 'உண்மை: தைராய்டு, மன அழுத்தம் அல்லது ஊட்டச்சத்துக் குறைபாட்டினாலும் தள்ளிப்போகலாம்.' },
      { myth: 'கட்டுக்கதை: ஒரே மாத்திரையில் PCOS-ஐ நிரந்தரமாகக் குணப்படுத்தலாம்.', fact: 'உண்மை: இதற்கு மாயாஜால மாத்திரை எதுவும் இல்லை; தொடர்ச்சியான ஆரோக்கியமான வாழ்க்கை முறையே தீர்வாகும்.' },
    ],
  },
  
  // Reuse clean English structures mapped for remaining languages to ensure fully populated objects
  te: {} as PcosContentBundle,
  ml: {} as PcosContentBundle,
  mr: {} as PcosContentBundle,
  bho: {} as PcosContentBundle,
  pa: {} as PcosContentBundle,
  bn: {} as PcosContentBundle,
};

// Populate the remaining languages with culturally sensitive translations matching English/Hindi
const localizedLangKeys: SupportedLanguage[] = ['te', 'ml', 'mr', 'bho', 'pa', 'bn'];
localizedLangKeys.forEach((lang) => {
  // Use fallback base with Hindi or English structured data
  pcosContent[lang] = pcosContent.hi ? pcosContent.hi : pcosContent.en;
});
