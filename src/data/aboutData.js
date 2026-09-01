// Datos de texto y estadísticas de la sección About.
// Los iconos se referencian por nombre (definidos en icons/StatIcons.jsx)
// para que este archivo se mantenga como datos puros, sin JSX.

import CerebroIcon from '../assets/images/cerebro.png';

export const about = {
  badge: 'ABOUT ME',
  heading: "Interested in building and improving digital solutions",
  paragraphs: [
    "I'm a Software Development student currently completing my degree at Institución Universitaria Pascual Bravo. I'm passionate about software engineering and building and maintaining applications that solve real-world problems.",
    "My main interests include backend development, web and desktop applications, databases and software architecture.",
    "I am constantly looking for opportunities to continue developing my technical skills while contributing to real-world software projects.",
  ],
  ctaLabel: 'Learn More About Me',
};

export const staticStats = [
  { id: 3, value: '7+', label: 'Tecnologías Dominadas', icon: 'tech' },
  { id: 4, value: '2+', label: 'Learning Time', icon: 'time' },
];

/*
  { id: 2, value: '50+', label: 'Projects Completed', icon: 'projects' },
  { id: 3, value: '30+', label: 'Happy Clients', icon: 'clients' },
  { id: 4, value: '100%', label: 'Client Satisfaction', icon: 'satisfaction' },
*/

export const softSkills = [
  { title: 'Resolución de problemas', icon: '🧠' },
  { title: 'Trabajo en equipo', icon: '🤝' },
  { title: 'Pensamiento crítico', icon: '💡' },
  { title: 'Adaptabilidad y aprendizaje autónomo', icon: '🚀' },
];