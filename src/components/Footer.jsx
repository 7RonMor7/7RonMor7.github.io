import React from 'react';
import { navItems } from '../data/navigation';
import { profile } from '../data/profileData';
import { useLanguage, t } from '../context/LanguageContext';

const uiText = {
  rights: { es: 'Desarrollador. Todos los derechos reservados.', en: 'Developer. All rights reserved.' },
  madeWith: { es: 'Hecho con', en: 'Made with' },
  by: { es: 'por', en: 'by' },
};

export default function Footer({ setActiveTab }) {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  const handleNavClick = (key) => {
    setActiveTab(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#0b0f19] mt-20 py-6 px-6 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Izquierda: Derechos reservados */}
        <p>© {year} {profile.name} {t(uiText.rights, language)}</p>

        {/* Centro: Enlaces rápidos de navegación */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className="hover:text-white transition-colors"
            >
              {item[language]}
            </button>
          ))}
        </div>

        {/* Derecha: Crédito de diseño */}
        <p className="flex items-center gap-1">
          {t(uiText.madeWith, language)} <span className="text-red-500">❤️</span> {t(uiText.by, language)} {profile.name}
        </p>
      </div>
    </footer>
  );
}