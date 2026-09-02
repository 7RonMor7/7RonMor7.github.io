import React, { useState } from 'react';
import EducationCard from '../components/EducationCard';
import CategoryFilter from '../components/CategoryFilter';
import { educationCategories, educationData } from '../data/educationData';
import { useLanguage, t } from '../context/LanguageContext';

const uiText = {
  badge: { es: 'EDUCACIÓN Y CERTIFICACIONES', en: 'EDUCATION & CERTIFICATIONS' },
  heading: { es: 'Formación Académica y Profesional', en: 'Academic & Professional Background' },
  text: {
    es: 'Mi trayectoria de aprendizaje continuo, certificaciones obtenidas y áreas de especialización técnica.',
    en: 'My path of continuous learning, certifications earned and areas of technical specialization.',
  },
};

export default function EducationSection() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredData =
    activeCategory === 'all'
      ? educationData
      : educationData.filter((item) => item.type === activeCategory);

  return (
    <section className="py-6 space-y-10 animate-fade-in max-w-6xl mx-auto">
      {/* Encabezado */}
      <div className="text-center space-y-3">
        <span className="bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
          {t(uiText.badge, language)}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-4">
          {t(uiText.heading, language)}
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed pt-2">
          {t(uiText.text, language)}
        </p>
      </div>

      <CategoryFilter
        categories={educationCategories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {filteredData.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}