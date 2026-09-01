//Por ahora no se utiliza, pero lo dejo por si en el futuro quiero usarlo para mostrar un tooltip con información adicional sobre cada tecnología.  

import React from 'react';

export default function SkillCard({ icon, name, level }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-xl space-y-3 hover:border-blue-500/80 transition-all hover:bg-slate-900/90 group">
      {/* Info Superior: Icono, Nombre y Porcentaje */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl p-2 bg-slate-800/80 rounded-lg border border-slate-700/50 group-hover:scale-110 transition-transform">
            {icon}
          </span>
          <span className="font-semibold text-white text-base">{name}</span>
        </div>
        <span className="text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
          {level}
        </span>
      </div>

      {/* Barra de Progreso */}
      <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/30">
        <div
          className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: level }}
        />
      </div>
    </div>
  );
}