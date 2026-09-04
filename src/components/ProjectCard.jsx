import React, { useState, useEffect, useRef } from 'react';
import VideoModal from './VideoModal';
import { useLanguage, t } from '../context/LanguageContext';

const CYCLE_INTERVAL_MS = 1500;

const uiText = {
  viewProject: { es: 'Ver Proyecto', en: 'View Project' },
  watchDemo: { es: 'Ver Demo', en: 'Watch Demo' },
  demoComingSoon: { es: 'Demo próximamente', en: 'Demo coming soon' },
  desktopApp: { es: 'App de escritorio — ver repositorio', en: 'Desktop app — see repository' },
  viewLabel: { es: 'vista', en: 'view' },
  githubRepoLabel: { es: 'Repositorio de', en: 'Repository for' },
  onGithub: { es: 'en GitHub', en: 'on GitHub' },
};

export default function ProjectCard({ project }) {
  const { language } = useLanguage();
  const [imageIndex, setImageIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const intervalRef = useRef(null);
  const cardRef = useRef(null);
  const hasMultipleImages = project.images.length > 1;

  const title = t(project.title, language);
  const description = t(project.description, language);

  const startCycling = () => {
    if (!hasMultipleImages) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % project.images.length);
    }, CYCLE_INTERVAL_MS);
  };

  const stopCycling = () => {
    clearInterval(intervalRef.current);
    setImageIndex(0);
  };

  // En pantallas táctiles: en vez de depender de un toque, la tarjeta rota
  // sola SOLO mientras está realmente visible en pantalla (Intersection
  // Observer). Así, si tienes varias tarjetas con múltiples imágenes, no
  // todas animan a la vez fuera de vista — se pausan cuando salen del
  // viewport y retoman cuando vuelven a aparecer al hacer scroll.
  // En desktop, el comportamiento sigue siendo por hover (sin cambios).
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (!isTouchDevice || !hasMultipleImages || !cardRef.current) return;
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCycling();
        } else {
          stopCycling();
        }
      },
      { threshold: 0.5 } // se considera "visible" con el 50% de la tarjeta en pantalla
    );
 
    observer.observe(cardRef.current);
 
    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-blue-500/80 transition-all hover:bg-slate-900/90 group flex flex-col justify-between"
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
    >
      <div>
        {/* Imagen del proyecto con overlay e id */}
        <div className="relative overflow-hidden h-48 bg-slate-800">
          <span className="absolute top-3 left-3 bg-slate-950/80 border border-slate-800 text-slate-300 text-xs font-mono font-bold px-2.5 py-1 rounded-md z-10">
            {project.id}
          </span>
          {project.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${title} - ${t(uiText.viewLabel, language)} ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                i === imageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {hasMultipleImages && (
            <div className="absolute bottom-2 right-2 flex gap-1 z-10">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === imageIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Contenido de la Tarjeta */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>

          {/* Etiquetas de Tecnologías */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-800/80 border border-slate-700/50 text-slate-300 text-[11px] font-medium px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Enlaces al proyecto: demo + repositorio */}
      <div className="p-6 pt-0 flex items-center justify-between gap-4 border-t border-slate-800/80 mt-4 pt-4">
        {project.demoType === 'live' && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-blue-500/80 transition-colors"
          >
            {t(uiText.viewProject, language)}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}

        {project.demoType === 'video' && project.videoUrl && (
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-blue-500/80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t(uiText.watchDemo, language)}
          </button>
        )}

        {project.demoType === 'video' && !project.videoUrl && (
          <span className="text-[11px] text-slate-500 italic">{t(uiText.demoComingSoon, language)}</span>
        )}

        {project.demoType === 'none' && (
          <span className="text-[11px] text-slate-500 italic">{t(uiText.desktopApp, language)}</span>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t(uiText.githubRepoLabel, language)} ${title} ${t(uiText.onGithub, language)}`}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.68-1.29-1.68-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.08.78 2.17v3.22c0 .3.21.66.79.55A10.52 10.52 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
          </a>
        )}
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        videoUrl={project.videoUrl}
        title={title}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}