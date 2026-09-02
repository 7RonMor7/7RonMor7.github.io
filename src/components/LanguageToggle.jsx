import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-full pl-2.5 pr-0.5 py-0.5"
    >
      {/* Ícono de idioma/globo (neutral, sin banderas de país) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5 text-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.077 8.267 14.502 3.5 17.396"
        />
      </svg>

      <div className="flex items-center text-[11px] font-bold">
        <span
          className={`px-2 py-1 rounded-full transition-colors ${
            language === 'es' ? 'bg-blue-600 text-white' : 'text-slate-400'
          }`}
        >
          ES
        </span>
        <span
          className={`px-2 py-1 rounded-full transition-colors ${
            language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400'
          }`}
        >
          EN
        </span>
      </div>
    </button>
  );
}