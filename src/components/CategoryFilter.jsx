import React from 'react';

export default function CategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-6 py-3 rounded-xl text-xs font-semibold transition-all ${
            activeCategory === cat.id
              ? 'bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/80'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}