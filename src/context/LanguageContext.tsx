import React, { createContext, useContext, useState } from 'react';
import { en } from '../locales/en';
import { ta } from '../locales/ta';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'en';
    }

    const savedLanguage = localStorage.getItem('knm_language');

    return savedLanguage === 'ta' ? 'ta' : 'en';
  });

  const setLanguage = (language: Language) => {
    setLanguageState(language);

    if (typeof window !== 'undefined') {
      localStorage.setItem('knm_language', language);
    }
  };

  const t = (key: keyof typeof en): string => {
    if (language === 'ta') {
      return ta[key] || en[key] || String(key);
    }

    return en[key] || String(key);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    );
  }

  return context;
};