import React from 'react';
import { useLanguage, t } from '../context/LanguageContext';

export default function CategoryFilter({ categories, activeCategory, onChange }) {
  const { language } = useLanguage();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeCategory === cat.id
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
          }`}
        >
          {t(cat.label, language)}
        </button>
      ))}
    </div>
  );
}