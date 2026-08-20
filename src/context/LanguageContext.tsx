import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { en } from '../locales/en';
import { ta } from '../locales/ta';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof en) => string;
}

const LANGUAGE_STORAGE_KEY = 'knm_language';

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

/* =========================================================
   GET INITIAL LANGUAGE
========================================================= */

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  try {
    const savedLanguage = localStorage.getItem(
      LANGUAGE_STORAGE_KEY
    );

    if (savedLanguage === 'ta') {
      return 'ta';
    }

    return 'en';
  } catch {
    return 'en';
  }
};


/* =========================================================
   PROVIDER
========================================================= */

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  const [language, setLanguageState] =
    useState<Language>(getInitialLanguage);


  /* =======================================================
     CHANGE LANGUAGE
  ======================================================= */

  const setLanguage = useCallback((nextLanguage: Language) => {

    // Update React state immediately
    setLanguageState(nextLanguage);

    // Save selected language
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(
          LANGUAGE_STORAGE_KEY,
          nextLanguage
        );
      } catch {
        // Ignore storage errors
      }
    }

  }, []);


  /* =======================================================
     TRANSLATION FUNCTION
  ======================================================= */

  const t = useCallback(
    (key: keyof typeof en): string => {

      if (language === 'ta') {
        const tamilText = ta[key];

        if (
          typeof tamilText === 'string' &&
          tamilText.trim().length > 0
        ) {
          return tamilText;
        }
      }

      const englishText = en[key];

      if (
        typeof englishText === 'string' &&
        englishText.trim().length > 0
      ) {
        return englishText;
      }

      return String(key);
    },
    [language]
  );


  /* =======================================================
     CONTEXT VALUE
  ======================================================= */

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t]
  );


  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};


/* =========================================================
   HOOK
========================================================= */

export const useLanguage = (): LanguageContextType => {

  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    );
  }

  return context;
};