import React from 'react';

export default function TestimonialCard({ quote, authorName, authorRole, authorPhoto }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl relative space-y-3">
      <span className="text-cyan-400 text-3xl font-serif leading-none">&ldquo;</span>
      <p className="text-xs text-slate-300 italic leading-relaxed">{quote}</p>
      <div className="flex items-center gap-3 pt-2">
        <img
          src={authorPhoto}
          alt={authorName}
          className="w-8 h-8 rounded-full object-cover border border-cyan-500/50"
        />
        <div>
          <p className="text-xs font-bold text-white">{authorName}</p>
          <p className="text-[10px] text-slate-400">{authorRole}</p>
        </div>
      </div>
    </div>
  );
}