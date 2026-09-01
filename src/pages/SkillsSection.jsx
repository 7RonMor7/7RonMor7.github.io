import React from 'react';
import SkillBadge from '../components/SkillBadge';
import { skillCategories } from '../data/skillsData';

export default function SkillsSection() {
  return (
    <section className="py-6 space-y-10 animate-fade-in">
      {/* Encabezado de la sección */}
      <div className="text-center space-y-3">
        <span className="bg-cyan-950/60 text-cyan-400 border border-cyan-600/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
          MY SKILLS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-3">
          Technologies I Master
        </h2>
      </div>

      {/* Una sección por categoría */}
      <div className="max-w-5xl mx-auto space-y-10 text-center">
        {skillCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">
              {category.label}
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