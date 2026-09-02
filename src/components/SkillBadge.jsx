import React, { useState, useEffect, useRef } from 'react';
import StarRating from './StarRating';
import { useLanguage, t } from '../context/LanguageContext';

const uiText = {
  viewDetails: { es: 'Ver detalles', en: 'View details' },
  masteryLevel: { es: 'Nivel de dominio', en: 'Mastery level' },
  close: { es: 'Cerrar', en: 'Close' },
};

export default function SkillBadge({ icon, name, note, level }) {
  const { language } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;
    const handleOutsideTouch = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('touchstart', handleOutsideTouch);
    return () => document.removeEventListener('touchstart', handleOutsideTouch);
  }, [isActive]);

  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setExpanded(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [expanded]);

  return (
    <>
      <div
        ref={wrapperRef}
        className="group relative pb-3"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onTouchStart={() => setIsActive(true)}
      >
        <div className={`relative z-10 bg-slate-900/60 border border-slate-800/80 rounded-xl px-4 py-4 flex flex-col items-center gap-2 group-hover:border-blue-500/80 group-hover:bg-slate-900/90 transition-all ${isActive ? 'border-blue-500/80 bg-slate-900/90' : 'border-slate-800/80'}`}>
          <img src={icon} alt={name} className="w-8 h-8 object-contain" />
          <span className="text-xs font-semibold text-slate-200 text-center">{name}</span>
        </div>

        <button
          type="button"
          onClick={() => setExpanded(true)}
          className={`absolute top-full left-1/2 -translate-x-1/2 z-20
                     bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-semibold
                     px-3 py-1 rounded-full whitespace-nowrap shadow-lg transition-all duration-150 ${
                       isActive
                         ? 'opacity-100 translate-y-0 pointer-events-auto'
                         : 'opacity-0 translate-y-1 pointer-events-none'
                     }`}
        >
          {t(uiText.viewDetails, language)}
        </button>
      </div>

      {/* Overlay + tarjeta expandida */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-sm w-full text-center space-y-4 shadow-2xl animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setExpanded(false)}
              aria-label={t(uiText.close, language)}
              className="absolute top-3 right-3 text-slate-500 hover:text-white transition-colors text-sm"
            >
              ✕
            </button>

            <img src={icon} alt={name} className="w-14 h-14 object-contain mx-auto" />
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{t(note, language)}</p>

            <div className="flex flex-col items-center gap-1 pt-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                {t(uiText.masteryLevel, language)}
              </span>
              <StarRating level={level} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}