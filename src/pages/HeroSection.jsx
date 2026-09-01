import React from 'react';
import CodePreviewCard from '../components/CodePreviewCard';
import TechCarousel from '../components/Techcarousel';
import { profile, codeSnippet } from '../data/profileData';

export default function HeroSection({ setActiveTab }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-160px)]">

      {/* Columna Izquierda: Información de Introducción */}
      <div className="lg:col-span-7 space-y-6">

        {/* Badge superior */}
        <div className="inline-block">
          <span className="bg-cyan-950/60 text-cyan-400 border border-cyan-600/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            {profile.role}
          </span>
        </div>

        {/* Título Principal */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-blue-500">
              {profile.name}
            </span>
          </h1>
          <p className="text-3xl sm:text-5xl font-bold text-slate-200 leading-tight">
            {profile.headline}
          </p>
        </div>

        {/* Subtítulo Descripción */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto text-center leading-relaxed">
          {profile.bio}
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-5 w-full">
          <button
            onClick={() => setActiveTab('Projects')}
            className="bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600 hover:from-cyan-500 hover:via-blue-400 hover:to-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 group"
          >
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <a
            href={profile.cvFile.href}
            download={profile.cvFile.downloadName}
            className="border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white font-medium px-6 py-3 rounded-lg transition-all flex items-center gap-2"
          >
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

        {/* Stack Tecnológico Inferior - ahora como carrusel */}
        <TechCarousel />
      </div>

      {/* Columna Derecha: Imagen de Perfil + Tarjeta de Código */}
      <div className="lg:col-span-5 relative flex justify-center items-center">
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-cyan-600/30 rounded-full blur-3xl -z-10 animate-pulse"></div>

        <div className="relative w-full max-w-md">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-cyan-600/20 to-slate-900/80 border border-cyan-500/30 p-2 shadow-2xl">
            <img
              src={profile.photoUrl}
              alt={profile.photoAlt}
              className="w-full h-80 sm:h-96 object-cover object-top rounded-2xl md:grayscale md:hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <CodePreviewCard snippet={codeSnippet} />
        </div>
      </div>

    </div>
  );
}