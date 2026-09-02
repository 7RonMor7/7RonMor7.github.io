// Datos de texto y estadísticas de la sección About.
// Los iconos se referencian por nombre (definidos en icons/StatIcons.jsx)
// para que este archivo se mantenga como datos puros, sin JSX.

import CerebroIcon from '../assets/images/cerebro.png';
import WorkTeamIcon from '../assets/images/workteam.png';
import PensamientoIcon from '../assets/images/pensamiento.png';
import AdaptabilidadIcon from '../assets/images/learning.png';

export const about = {
  badge: { es: 'SOBRE MÍ', en: 'ABOUT ME' },
  heading: {
     es: 'Interesado en construir y mejorar soluciones digitales',
     en: 'Interested in building and improving digital solutions' 
    },
  paragraphs: [
    {
      es: 'Soy estudiante de Desarrollo de Software, actualmente completando mi carrera en la Institución Universitaria Pascual Bravo. Me apasiona la ingeniería de software y construir y mantener aplicaciones que resuelven problemas del mundo real.',
      en: "I'm a Software Development student currently completing my degree at Institución Universitaria Pascual Bravo. I'm passionate about software engineering and building and maintaining applications that solve real-world problems.",
    },
    {
      es: 'Mis principales intereses incluyen desarrollo backend, aplicaciones web y de escritorio, bases de datos y arquitectura de software.',
      en: "My main interests include backend development, web and desktop applications, databases and software architecture.",
    },
    {
      es: 'Estoy constantemente buscando oportunidades para continuar desarrollando mis habilidades técnicas mientras contribuyo a proyectos de software del mundo real.',
      en: "I am constantly looking for opportunities to continue developing my technical skills while contributing to real-world software projects.",
    },
  ],
  ctaLabel: { es: 'Conóceme más', en: 'Learn More About Me' },
};

export const staticStats = [
  { id: 3, value: '7+', label: { es: 'Tecnologías Dominadas', en: 'Technologies Mastered' }, icon: 'tech' },
  { id: 4, value: '2+', label: { es: 'Tiempo Aprendiendo', en: 'Learning Time' }, icon: 'time' },
];

export const softSkills = [
  { title: { es: 'Resolución de problemas', en: 'Problem Solving' }, icon: CerebroIcon },
  { title: { es: 'Trabajo en equipo', en: 'Teamwork' }, icon: WorkTeamIcon },
  { title: { es: 'Pensamiento crítico', en: 'Critical Thinking' }, icon: PensamientoIcon },
  { title: { es: 'Adaptabilidad y aprendizaje autónomo', en: 'Adaptability & Self-learning' }, icon: AdaptabilidadIcon },
];