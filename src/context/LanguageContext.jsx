/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { content } from '../data/translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'lang';
const SUPPORTED = ['fr', 'en', 'ar'];

function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {
    /* localStorage unavailable (private mode) — fall through to detection */
  }

  const browser = (navigator.language || 'fr').toLowerCase();
  if (browser.startsWith('ar')) return 'ar';
  if (browser.startsWith('en')) return 'en';
  return 'fr';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage);

  useEffect(() => {
    // Switch document direction automatically for Arabic
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, [lang]);

  const t = content[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
