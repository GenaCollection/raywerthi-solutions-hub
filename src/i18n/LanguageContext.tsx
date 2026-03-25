import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations, type Language } from './translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  tRaw: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ru');

  const resolve = useCallback((key: string): any => {
    const keys = key.split('.');
    let result: any = translations[lang];
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  }, [lang]);

  const t = useCallback((key: string): string => {
    const result = resolve(key);
    return typeof result === 'string' ? result : key;
  }, [resolve]);

  const tRaw = useCallback((key: string): any => {
    return resolve(key);
  }, [resolve]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tRaw }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
