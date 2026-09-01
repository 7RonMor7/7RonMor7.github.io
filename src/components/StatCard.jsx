import React from 'react';

export default function StatCard({ icon, value, label }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/80 transition-all hover:bg-slate-900/90">
      <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/50">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>
        <p className="text-xs text-slate-400 font-medium">{label}</p>
      </div>
    </div>
  );
}