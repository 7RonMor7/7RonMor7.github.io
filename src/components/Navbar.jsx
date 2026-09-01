import React, { useState } from 'react';
import { navItems } from '../data/navigation';

export default function Navbar({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (item) => {
    setActiveTab(item);
    setMenuOpen(false); // cierra el menú móvil al navegar
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f19]/80 border-b border-slate-800/80 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo estilo CodeCraft */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => goTo('Home')}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-blue-500 font-bold text-xl">&lt;/&gt;</span>
          <span className="font-semibold text-lg tracking-wide text-white">RonDev</span>
        </div>

        {/* Enlaces de Navegación (Pestañas) - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => goTo(item)}
              aria-current={activeTab === item ? 'page' : undefined}
              className={`relative text-sm font-medium px-3.5 py-1.5 rounded-lg transition-colors duration-200 ${
                activeTab === item
                  ? 'text-white bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600'
                  : 'text-slate-400 hover:text-white hover:bg-blue-500/80'
              }`}
            >
              {item}
              {/*{activeTab === item && (
                <span className="navbar-active-indicator absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}*/}
            </button>
          ))}
        </nav>

        {/* Botón de Acción Hire Me */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => goTo('Contact')}
            className="bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600 hover:from-cyan-500 hover:via-blue-400 hover:to-blue-600 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
          >
            Hire Me
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Botón hamburguesa - Mobile */}
        <button
          className="md:hidden text-slate-200 p-2 rounded-lg border border-cyan-500/30 bg-blue-500/10 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/50 hover:border-cyan-400/60 hover:bg-cyan-500/20 active:scale-95 transition-all duration-300"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable - Mobile */}
      {menuOpen && (
        <nav className="navbar-mobile-menu md:hidden mt-4 flex flex-col gap-4 px-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => goTo(item)}
              className={`text-left text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 ${
                activeTab === item 
                ? 'text-white bg-blue-500/80 font-semibold' 
                : 'text-slate-400 hover:text-white hover:bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600'
              }`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => goTo('Contact')}
            className="bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600 hover:from-cyan-500 hover:via-blue-400 hover:to-blue-600 text-white font-medium text-sm px-5 py-2.5 rounded-lg text-center transition-all duration-200"
          >
            Hire Me
          </button>
        </nav>
      )}
    </header>
  );
}