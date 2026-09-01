import React from 'react';
import { navItems } from '../data/navigation';
import { profile } from '../data/profileData';

export default function Footer({ setActiveTab }) {
  const year = new Date().getFullYear();

  const handleNavClick = (item) => {
    setActiveTab(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#0b0f19] mt-20 py-6 px-6 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Izquierda: Derechos reservados */}
        <p>© {year} {profile.name} Developer. All rights reserved.</p>

        {/* Centro: Enlaces rápidos de navegación */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Derecha: Crédito de diseño */}
        <p className="flex items-center gap-1">
          Made with <span className="text-red-500">❤️</span> by {profile.name}
        </p>
      </div>
    </footer>
  );
}