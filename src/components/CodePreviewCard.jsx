import React from 'react';

export default function CodePreviewCard({ snippet }) {

    return (
    <div className="absolute -bottom-20 -right-2 sm:-right-6 bg-slate-900/95 border border-slate-800 p-4 rounded-xl shadow-2xl backdrop-blur-md max-w-xs w-full text-xs font-mono">
      {/* Cabecera estilo editor */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        </div>
        <span className="text-slate-500 text-[10px]">&lt;/&gt; Code</span>
      </div>
 
      {/* Código JS generado a partir de los datos de perfil */}
      <div className="space-y-1 text-slate-300">
        <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
        <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-green-400">"{snippet.name}"</span>,</p>
        <p className="pl-4">
          <span className="text-slate-400">skills:</span> [
          {snippet.skills.map((skill, i) => (
            <React.Fragment key={skill}>
              <span className="text-orange-400">"{skill}"</span>
              {i < snippet.skills.length - 1 && ', '}
            </React.Fragment>
          ))}
          ],
        </p>
        <p className="pl-4">
          <span className="text-slate-400">practices:</span> [
          {snippet.practices.map((practice, i) => (
            <React.Fragment key={practice}>
              <span className="text-orange-400">"{practice}"</span>
              {i < snippet.practices.length - 1 && ', '}
            </React.Fragment>
          ))}
          ],
        </p>
        <p className="pl-4"><span className="text-slate-400">passion:</span> <span className="text-green-400">"{snippet.passion}"</span></p>
        <p>&#125;;</p>
      </div>
    </div>
  );
}