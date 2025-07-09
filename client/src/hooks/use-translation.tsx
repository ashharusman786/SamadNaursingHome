import { useState, useEffect, createContext, useContext } from 'react';
import translationsData from '@/data/translations.json';

type Language = 'en' | 'hi';
type Translations = typeof translationsData;

interface TranslationContextType {
  currentLang: Language;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lang');
      if (stored === 'en' || stored === 'hi') return stored;
    }
    return 'en';
  });

  const translations: Translations = translationsData;

  const t = (key: string): string => {
    return (translations[currentLang] as Record<string, string>)[key] || key;
  };

  const toggleLanguage = () => {
    setCurrentLang(prev => {
      const next = prev === 'en' ? 'hi' : 'en';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', currentLang);
    localStorage.setItem('lang', currentLang);
  }, [currentLang]);

  return (
    <TranslationContext.Provider value={{ currentLang, t, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
