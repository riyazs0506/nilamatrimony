export interface FAQItem {
  id: string;
  question: string;
  questionTa?: string;
  answer: string;
  answerTa?: string;

  category:
    | 'General'
    | 'About Us'
    | 'How It Works'
    | 'Contact'
    | 'Privacy';
}

export const faq: FAQItem[] = [
  {
    id: 'f1',
    category: 'General',

    question: 'What is Kongu Nila Matrimony?',

    questionTa:
      'கொங்கு நிலா மேட்ரிமோனி என்றால் என்ன?',

    answer:
      'Kongu Nila Matrimony is a matrimonial service created around Kongu heritage, Tamil culture and family values. Our aim is to help individuals and families begin their matrimonial journey with trust, respect and understanding.',

    answerTa:
      'கொங்கு நிலா மேட்ரிமோனி என்பது கொங்கு பாரம்பரியம், தமிழ் கலாச்சாரம் மற்றும் குடும்ப மதிப்புகளை மையமாகக் கொண்ட திருமண சேவையாகும். நம்பிக்கை, மரியாதை மற்றும் புரிதலுடன் திருமணப் பயணத்தைத் தொடங்க தனிநபர்கள் மற்றும் குடும்பங்களுக்கு உதவுவதே எங்கள் நோக்கம்.',
  },

  {
    id: 'f2',
    category: 'About Us',

    question: 'Who is Kongu Nila Matrimony for?',

    questionTa:
      'கொங்கு நிலா மேட்ரிமோனி யாருக்காக?',

    answer:
      'Our service is designed for individuals and families who value Tamil culture, Kongu heritage, family traditions and meaningful relationships.',

    answerTa:
      'தமிழ் கலாச்சாரம், கொங்கு பாரம்பரியம், குடும்ப மரபுகள் மற்றும் அர்த்தமுள்ள உறவுகளை மதிக்கும் தனிநபர்கள் மற்றும் குடும்பங்களுக்காக எங்கள் சேவை உருவாக்கப்பட்டுள்ளது.',
  },

  {
    id: 'f3',
    category: 'About Us',

    question: 'What makes Kongu Nila Matrimony different?',

    questionTa:
      'கொங்கு நிலா மேட்ரிமோனி எவ்வாறு தனித்துவமானது?',

    answer:
      'Kongu Nila Matrimony focuses on cultural understanding, family values, trust, respectful communication and a simple matrimonial experience.',

    answerTa:
      'கலாச்சார புரிதல், குடும்ப மதிப்புகள், நம்பிக்கை, மரியாதையான தொடர்பு மற்றும் எளிமையான திருமண அனுபவத்தை கொங்கு நிலா மேட்ரிமோனி மையமாகக் கொண்டுள்ளது.',
  },

  {
    id: 'f4',
    category: 'How It Works',

    question: 'How does the matrimonial service work?',

    questionTa:
      'திருமண சேவை எவ்வாறு செயல்படுகிறது?',

    answer:
      'Our approach is simple. Individuals and families can learn about our service, understand the matrimonial process and contact our team to discuss their requirements.',

    answerTa:
      'எங்கள் செயல்முறை எளிமையானது. தனிநபர்கள் மற்றும் குடும்பங்கள் எங்கள் சேவையைப் பற்றி அறிந்து, திருமண செயல்முறையைப் புரிந்து கொண்டு, தங்களின் தேவைகள் குறித்து எங்கள் குழுவைத் தொடர்பு கொள்ளலாம்.',
  },

  {
    id: 'f5',
    category: 'How It Works',

    question: 'How do I begin my matrimonial journey?',

    questionTa:
      'எனது திருமணப் பயணத்தை எவ்வாறு தொடங்குவது?',

    answer:
      'You can start by exploring our website and learning about our matrimonial service. If you need further assistance, contact our team through the Contact Us page.',

    answerTa:
      'எங்கள் இணையதளத்தைப் பார்வையிட்டு திருமண சேவையைப் பற்றி அறிந்து உங்கள் பயணத்தைத் தொடங்கலாம். கூடுதல் உதவி தேவைப்பட்டால் Contact Us பக்கத்தின் மூலம் எங்கள் குழுவைத் தொடர்பு கொள்ளலாம்.',
  },

  {
    id: 'f6',
    category: 'How It Works',

    question: 'Can families contact the team before proceeding?',

    questionTa:
      'தொடர்வதற்கு முன் குடும்பங்கள் குழுவைத் தொடர்பு கொள்ள முடியுமா?',

    answer:
      'Yes. Families can contact our team to understand the service, discuss their requirements and ask questions before proceeding.',

    answerTa:
      'ஆம். சேவையைப் புரிந்துகொள்ளவும், தங்களின் தேவைகளைப் பற்றி விவாதிக்கவும், தொடர்வதற்கு முன் கேள்விகளைக் கேட்கவும் குடும்பங்கள் எங்கள் குழுவைத் தொடர்பு கொள்ளலாம்.',
  },

  {
    id: 'f7',
    category: 'Contact',

    question: 'How can I contact Kongu Nila Matrimony?',

    questionTa:
      'கொங்கு நிலா மேட்ரிமோனியை எவ்வாறு தொடர்பு கொள்வது?',

    answer:
      'You can contact our team through the Contact Us page using the enquiry form, phone number or email address provided on the website.',

    answerTa:
      'Contact Us பக்கத்தில் உள்ள விசாரணைப் படிவம், தொலைபேசி எண் அல்லது மின்னஞ்சல் மூலம் எங்கள் குழுவைத் தொடர்பு கொள்ளலாம்.',
  },

  {
    id: 'f8',
    category: 'Contact',

    question: 'Where is Kongu Nila Matrimony based?',

    questionTa:
      'கொங்கு நிலா மேட்ரிமோனி எங்கு அமைந்துள்ளது?',

    answer:
      'Kongu Nila Matrimony is focused on the Kongu region and Tamil Nadu. Please contact our team for further information.',

    answerTa:
      'கொங்கு நிலா மேட்ரிமோனி கொங்கு பகுதி மற்றும் தமிழ்நாட்டை மையமாகக் கொண்டுள்ளது. மேலும் தகவல்களுக்கு எங்கள் குழுவைத் தொடர்பு கொள்ளவும்.',
  },

  {
    id: 'f9',
    category: 'Privacy',

    question: 'How is my information handled?',

    questionTa:
      'எனது தகவல்கள் எவ்வாறு கையாளப்படுகின்றன?',

    answer:
      'We respect the privacy of individuals and families. Please refer to our Privacy Policy for information about how personal information is handled.',

    answerTa:
      'தனிநபர்கள் மற்றும் குடும்பங்களின் தனியுரிமையை நாங்கள் மதிக்கிறோம். தனிப்பட்ட தகவல்கள் எவ்வாறு கையாளப்படுகின்றன என்பதை அறிய எங்கள் Privacy Policy-ஐப் பார்க்கவும்.',
  },

  {
    id: 'f10',
    category: 'Privacy',

    question: 'Why is privacy important in matrimonial services?',

    questionTa:
      'திருமண சேவைகளில் தனியுரிமை ஏன் முக்கியமானது?',

    answer:
      'Matrimonial services may involve personal and family information. Respecting privacy helps create a more comfortable and trustworthy experience for individuals and families.',

    answerTa:
      'திருமண சேவைகளில் தனிப்பட்ட மற்றும் குடும்பத் தகவல்கள் இடம்பெறலாம். தனியுரிமையை மதிப்பது தனிநபர்கள் மற்றும் குடும்பங்களுக்கு பாதுகாப்பான மற்றும் நம்பகமான அனுபவத்தை உருவாக்க உதவுகிறது.',
  },

  {
    id: 'f11',
    category: 'General',

    question: 'Why choose a community-focused matrimonial service?',

    questionTa:
      'சமூகத்தை மையமாகக் கொண்ட திருமண சேவையை ஏன் தேர்வு செய்ய வேண்டும்?',

    answer:
      'A community-focused approach can help families connect through shared cultural understanding, traditions, values and expectations.',

    answerTa:
      'சமூகத்தை மையமாகக் கொண்ட அணுகுமுறை ஒரே கலாச்சாரம், பாரம்பரியம், மதிப்புகள் மற்றும் எதிர்பார்ப்புகளைப் புரிந்துகொள்ளும் குடும்பங்களை இணைக்க உதவும்.',
  },

  {
    id: 'f12',
    category: 'General',

    question: 'Does Kongu Nila Matrimony respect family traditions?',

    questionTa:
      'கொங்கு நிலா மேட்ரிமோனி குடும்ப பாரம்பரியங்களை மதிக்கிறதா?',

    answer:
      'Yes. Our approach is built around respect for Kongu heritage, Tamil culture, family traditions and individual preferences.',

    answerTa:
      'ஆம். கொங்கு பாரம்பரியம், தமிழ் கலாச்சாரம், குடும்ப மரபுகள் மற்றும் தனிநபர் விருப்பங்களுக்கு மரியாதை அளிப்பதை எங்கள் அணுகுமுறை அடிப்படையாகக் கொண்டுள்ளது.',
  },
];