import React from 'react';

export default function StarRating({ level, max = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Nivel ${level} de ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${i < level ? 'text-blue-400' : 'text-slate-700'}`}
          fill="currentColor"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
}