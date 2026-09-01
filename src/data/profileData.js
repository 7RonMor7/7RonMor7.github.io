
import CsharpIcon from '../assets/icons/csharp.svg';
import JavaIcon from '../assets/icons/java.svg';
import SpringBootIcon from '../assets/icons/spring.svg';
import JavaScriptIcon from '../assets/icons/javascript.svg';
import ReactIcon from '../assets/icons/react.svg';
import NodeIcon from '../assets/icons/nodejs.svg';
import GitIcon from '../assets/icons/git.svg';

import profilePhoto from '../assets/images/profile-photo.jpg';

export const profile = {
  name: 'Ronald',
  role: "I'm a Software Developer",
  headline: 'I turn ideas into digital solutions.',
  bio: "I'm a Software Development student focused on building full-stack applications using modern technologies, with a strong interest in backend development, databases and scalable software solutions.",
  photoUrl: profilePhoto,
  photoAlt: 'Tu Foto de Perfil',
  cvFile: {
    href: '/Hoja-de-Vida-Ronald.pdf',
    downloadName: 'Hoja-de-Vida-Ronald.pdf',
  },
};

export const techStack = [
  { name: 'C#', icon: CsharpIcon },
  { name: 'Java', icon: JavaIcon },
  { name: 'Spring Boot', icon: SpringBootIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'Git', icon: GitIcon },
];

// Contenido que se muestra en la tarjeta de código flotante
export const codeSnippet = {
  name: 'Ronald',
  skills: ['Problem Solving', 'Teamwork'],
  practices: ['Clean Code', 'Testing'],
  passion: 'Building full-stack applications',
};