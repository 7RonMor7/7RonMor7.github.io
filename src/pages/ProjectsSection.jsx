import React from 'react';
import ProjectCard from '../components/ProjectCard';
import HintBagde from '../components/HintBadge';
import { projectsData } from '../data/projectsData';
import { useLanguage, t } from '../context/LanguageContext';

const uiText = {
  badge: { es: 'PROYECTOS DESTACADOS', en: 'FEATURED PROJECTS' },
  heading: { es: 'Algunos de mis trabajos recientes', en: 'Some of My Recent Work' },
  hint: {
    es: 'Pasa el cursor sobre un proyecto para ver más imágenes',
    en: 'Hover over a project to see more images',
  },
};

export default function ProjectsSection() {
  const { language } = useLanguage();

  return (
    // "relative" es necesario para posicionar el HintBadge en la esquina
    <section className="relative py-6 space-y-10 animate-fade-in">
      <HintBagde text={uiText.hint} />
      
      {/* Encabezado de la sección */}
      <div className="text-center space-y-3">
        <span className="bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
          {t(uiText.badge, language)}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-4">
          {t(uiText.heading, language)}
        </h2>
      </div>

      {/* Grid de Proyectos (1 col móvil, 3 col escritorio) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pt-4">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}