import React from 'react';
import { isImageIcon } from '../utils/icon';

export default function EducationCard({ item }) {
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
                {item.title}
              </h3>
              <p className="text-xs font-medium text-slate-400">{item.institution}</p>
            </div>
          </div>

          <span className="bg-slate-800/80 border border-slate-700/50 text-slate-300 text-[10px] font-mono px-2.5 py-1 rounded-md whitespace-nowrap">
            {item.period}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>

        {/* Áreas claves vistas (Skills / Badges) */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Áreas clave vistas
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-[11px] font-medium px-2.5 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Enlace opcional al certificado/credencial */}
      {item.credentialUrl && (
        <div className="pt-4 mt-4 border-t border-slate-800/50 flex justify-between items-center text-xs">
          <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {item.status}
          </span>
          <a
            href={item.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-blue-500/80 font-semibold flex items-center gap-1 transition-colors"
          >
            Ver Credencial
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}