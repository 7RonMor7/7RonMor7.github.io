import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

export default function ProjectsSection() {
  return (
    <section className="py-6 space-y-10 animate-fade-in">
      {/* Encabezado de la sección */}
      <div className="text-center space-y-3">
        <span className="bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
          FEATURED PROJECTS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-4">
          Some of My Recent Work
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