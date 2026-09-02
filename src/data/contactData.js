
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import instagramIcon from '../assets/images/instagram.png';

export const contactIntro = {
  badge: { es: 'TRABAJEMOS JUNTOS', en: "LET'S WORK TOGETHER" },
  heading: { es: '¿Tienes un proyecto en mente?', en: 'Have a project in mind?' },
  title: { es: '¡Construyamos algo increíble juntos!', en: "Let's build something amazing together!" },
  text: { 
    es: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.', 
    en: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision." },
};

/*
// Testimonial de ejemplo, para utilizar probablemete más adelante.
export const testimonial = {
  quote: {
    es: 'Alex es un desarrollador excepcional que entrega trabajo de alta calidad a tiempo. Su atención al detalle y habilidades de resolución de problemas son sobresalientes.',
    en: 'Alex is an exceptional developer who delivers high-quality work on time. His attention to detail and problem-solving skills are outstanding.',
  },
  authorName: 'Sarah Johnson',
  authorRole: { es: 'CEO, TechStart', en: 'CEO, TechStart' },
  authorPhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
};*/

// Nombres de redes sociales: no se traducen (son nombres propios)
export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/7RonMor7', icon: githubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ronald-moreno-53a1702a5/', icon: linkedinIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/ronaldmor_7/', icon: instagramIcon },
];

// Por ahora desactivado.
export const contactInfo = {
  email: 'ronald7moreno7@gmail.com',
  phone: '+57 (555) 123-4567',
};