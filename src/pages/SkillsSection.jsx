import React from 'react';
import SkillBadge from '../components/SkillBadge';
import HintBagde from '../components/HintBadge';
import { skillCategories } from '../data/skillsData';
import { useLanguage, t } from '../context/LanguageContext';

const uiText = {
  badge: { es: 'MIS HABILIDADES', en: 'MY SKILLS' },
  heading: { es: 'Tecnologías que domino', en: 'Technologies I Master' },
  hint: {
    es: 'Pasa el cursor sobre una tecnología para ver más detalles',
    en: 'Hover over a technology to see more details',
  },
};

export default function SkillsSection() {
  const { language } = useLanguage();

  return (
    // "relative" es necesario para que el HintBadge se posicione correctamente en la esquina superior derecha de la sección.
    <section className="relative py-6 space-y-10 animate-fade-in">
      <HintBagde text={uiText.hint} />
      
      {/* Encabezado de la sección */}
      <div className="text-center space-y-3">
        <span className="bg-cyan-950/60 text-cyan-400 border border-cyan-600/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
          {t(uiText.badge, language)}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-3">
          {t(uiText.heading, language)}
        </h2>
      </div>

      {/* Una sección por categoría */}
      <div className="max-w-5xl mx-auto space-y-10 text-center">
        {skillCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">
              {t(category.label, language)}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {category.skills.map((skill) => (
                <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} note={skill.note} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}