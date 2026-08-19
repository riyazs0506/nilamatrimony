export interface SiteContact {
  phone: string;
  email: string;
  location: string;
}

export interface SiteSocial {
  instagram: string;
  facebook: string;
}

export interface SiteConfig {
  name: string;

  tagline: {
    en: string;
    ta: string;
  };

  description: {
    en: string;
    ta: string;
  };

  contact: SiteContact;

  social: SiteSocial;
}

export const site: SiteConfig = {
  name: 'Kongu Nila Matrimony',

  tagline: {
    en: 'Find Someone Who Feels Like Home',
    ta: 'மனதிற்குப் பிடித்த வாழ்க்கைத்துணை',
  },

  description: {
    en: 'A trusted matrimonial service built around Kongu heritage, Tamil culture, family values and meaningful relationships.',
    ta: 'கொங்கு பாரம்பரியம், தமிழ் கலாச்சாரம், குடும்ப மதிப்புகள் மற்றும் அர்த்தமுள்ள உறவுகளை மையமாகக் கொண்ட நம்பகமான திருமண சேவை.',
  },

  contact: {
    phone: '+91 98422 12345',
    email: 'support@kongunilamatrimony.com',
    location: 'Coimbatore, Tamil Nadu, India',
  },

  social: {
    instagram: '#',
    facebook: '#',
  },
};