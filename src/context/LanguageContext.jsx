import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'es';
    return localStorage.getItem('portfolio-lang') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  }
  return context;
}

// Helper para leer un campo bilingüe: { es: '...', en: '...' }
// Si el campo sigue siendo un string plano (archivo aún no migrado),
// lo devuelve tal cual — así puedes migrar archivo por archivo sin
// romper los que faltan.
export function t(field, language) {
  if (field && typeof field === 'object' && !Array.isArray(field)) {
    return field[language] ?? field.es ?? field.en ?? '';
  }
  return field;
}