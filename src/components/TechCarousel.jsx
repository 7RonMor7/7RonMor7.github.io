import React from 'react';
import { techStackData } from '../data/techstackData';

export default function TechCarousel() {
  // Duplicamos el array para que el scroll parezca infinito y sin cortes
  const doubleTechnologies = [...techStackData, ...techStackData];

  return (
    <div className="pt-8 space-y-4 text-center w-full max-w-4xl mx-auto overflow-hidden">
      <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider">
        Technologies I work with
      </p>

      {/* Contenedor con efecto de degradado/desvanecido en los bordes */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex gap-4 py-2 w-max">
          {doubleTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="bg-slate-900/80 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 hover:border-blue-500/80 transition-all hover:bg-slate-800/80 flex-shrink-0 cursor-pointer"
            >
              <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}