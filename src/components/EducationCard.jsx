import React from 'react';
import { isImageIcon } from '../utils/icon';
import { useLanguage, t } from '../context/LanguageContext';

const uiText = {
  keyAreas: { es: 'Áreas clave vistas', en: 'Key areas covered' },
  credits: { es: 'créditos', en: 'credits' },
  viewCredential: { es: 'Ver Credencial', en: 'View Credential' },
};

export default function EducationCard({ item }) {
  const { language } = useLanguage();

  return (
    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/80 transition-all hover:bg-slate-900/90 group">
      <div className="space-y-4">
        {/* Cabecera de la Tarjeta */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 flex items-center justify-center text-2xl p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/50 group-hover:scale-105 transition-transform">
              {isImageIcon(item.icon) ? (
                <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
              ) : (
                item.icon
              )}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                {t(item.title, language)}
              </h3>
              <p className="text-xs font-medium text-slate-400">{item.institution}</p>
            </div>
          </div>

          <span className="bg-slate-800/80 border border-slate-700/50 text-slate-300 text-[10px] font-mono px-2.5 py-1 rounded-md whitespace-nowrap">
            {item.period}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-slate-400 text-xs leading-relaxed">{t(item.description, language)}</p>

        {/* Áreas claves vistas (Skills / Badges) */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            {t(uiText.keyAreas, language)}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-[11px] font-medium px-2.5 py-1 rounded-md"
              >
                {t(skill, language)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Progreso académico (para títulos en curso, sin credencial todavía) */}
      {item.progress && (
        <div className="pt-4 mt-4 border-t border-slate-800/50 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              {t(item.status, language)}
            </span>
            <span className="text-slate-400 font-mono">
              {item.progress.creditsCompleted} / {item.progress.creditsTotal} {t(uiText.credits, language)}
            </span>
          </div>
          <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/30">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${Math.round(
                  (item.progress.creditsCompleted / item.progress.creditsTotal) * 100
                )}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Enlace opcional al certificado/credencial */}
      {item.credentialUrl && (
        <div className="pt-4 mt-4 border-t border-slate-800/50 flex justify-between items-center text-xs">
          <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {t(item.status, language)}
          </span>
          <a
            href={item.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-blue-500/80 font-semibold flex items-center gap-1 transition-colors"
          >
            {t(uiText.viewCredential, language)}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}