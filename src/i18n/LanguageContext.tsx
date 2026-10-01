import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations, type Language } from './translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  tRaw: (key: string) => unknown;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const STORAGE_KEY = 'raywerthi.language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Match the prerendered Russian HTML during hydration; restore preferences afterwards.
  const [lang, updateLang] = useState<Language>('ru');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'ru' || saved === 'hy' || saved === 'en') updateLang(saved);
    } catch {
      // Storage may be unavailable; language switching still works for this visit.
    }
  }, []);

  const setLang = useCallback((next: Language) => {
    updateLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Keep the selected language in memory when persistence is blocked.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const resolve = useCallback((key: string): unknown => {
    let result: unknown = translations[lang];
    for (const part of key.split('.')) {
      if (result && typeof result === 'object' && Object.prototype.hasOwnProperty.call(result, part)) {
        result = (result as Record<string, unknown>)[part];
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

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tRaw: resolve }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};