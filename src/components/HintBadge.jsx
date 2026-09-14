import React from 'react';
import { useLanguage, t } from '../context/LanguageContext';

/**
 * Etiqueta informativa que aparece arriba a la derecha de una sección,
 * para avisar al visitante de una interacción que de otro modo pasaría
 * desapercibida (hover para ver detalles, hover para ver más imágenes...).
 *
 * Solo se muestra en desktop (hidden md:flex) porque la pista habla de
 * "pasar el cursor", algo que no aplica en pantallas táctiles.
 */
export default function HintBadge({ text }) {
  const { language } = useLanguage();

  return (
    <div
      className="hidden md:flex absolute top-0 right-0 z-20 items-center gap-2
                 bg-slate-900/80 border border-cyan-500/30 backdrop-blur-sm
                 text-cyan-300 text-xs font-medium px-4 py-2 rounded-full
                 shadow-lg shadow-cyan-500/10 animate-hint-pulse"
    >
      {/* Ícono de cursor/puntero */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5 shrink-0 animate-hint-nudge"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
      {t(text, language)}
    </div>
  );
}