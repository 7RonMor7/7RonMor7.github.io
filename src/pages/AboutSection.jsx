import React from 'react';
import StatCard from '../components/StatCard';
import { about, softSkills ,staticStats } from '../data/aboutData';
import { projectsData} from '../data/projectsData';
import { educationData } from '../data/educationData';
import { isImageIcon } from '../utils/icon';
import { useLanguage, t } from '../context/LanguageContext';
import {
  ProjectsIcon,
  EducationIcon,
  TechIcon,
  TimeIcon,
} from '../components/icons/StatIcons';

// Mapea el nombre guardado en los datos al componente de icono real
const iconMap = {
  projects: ProjectsIcon,
  education: EducationIcon,
  tech: TechIcon,
  time: TimeIcon,
};

const uiText = {
  academicProjectsLabel: { es: 'Proyectos Académicos / Personales', en: 'Academic / Personal Projects' },
  coursesLabel: { es: 'Certificaciones / Cursos', en: 'Certificates / Courses' },
  softSkillsHeading: { es: 'Aptitudes y Actitudes', en: 'Skills & Attitudes' },
};

export default function AboutSection({ setActiveTab }) {

  const { language } = useLanguage();

  // Cálculo automático de cantidades
  const projectsCount = projectsData ? projectsData.length : 0;
  const educationCount = educationData ? educationData.length : 0;

  const dynamicStats = [
    {
      id: 1,
      value: `${projectsCount}+`,
      label: uiText.academicProjectsLabel,
      icon: 'projects',
    },
    {
      id: 2,
      value: `${educationCount}+`,
      label: uiText.coursesLabel,
      icon: 'education',
    },
    ...staticStats,
  ];

  return (
    <section className="py-8 space-y-10 animate-fade-in">
      {/* Badge Superior */}
      <div className="inline-block">
        <span className="bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
          {t(about.badge, language)}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Columna Izquierda: Texto Descriptivo */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            {t(about.heading, language)}
          </h2>

          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-slate-400 text-base leading-relaxed">
              {t(paragraph, language)}
            </p>
          ))}

          <div className="pt-2">
            <button
              onClick={() => setActiveTab('Education')}
              className="border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium px-6 py-3 rounded-lg transition-all flex items-center gap-2"
            >
              {t(about.ctaLabel, language)}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Columna Derecha: Tarjetas de Estadísticas (Grid 2x2) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dynamicStats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <StatCard key={stat.id} icon={<Icon />} value={stat.value} label={t(stat.label, language)} />
            );
          })}
        </div>
      </div>

      {/* Bloque: Aptitudes y Actitudes */}
      <div className="pt-8 border-t border-slate-800/80 space-y-4">
        <h3 className="text-xl font-bold text-white tracking-wide">
          {t(uiText.softSkillsHeading, language)}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl flex items-center gap-3 hover:border-blue-500/80 transition-all"
            >
              <span className="w-6 h-6 flex items-center justify-center text-xl shrink-0">
                {isImageIcon(skill.icon) ? (
                  <img src={skill.icon} alt="" className="w-5 h-5 object-contain" />
                ) : (
                  skill.icon
                )}
              </span>
              <span className="text-sm font-semibold text-slate-200">
                {t(skill.title, language)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}