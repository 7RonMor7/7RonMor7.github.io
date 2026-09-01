// TODO: reemplaza los arrays "images" con imports reales una vez tengas tus
// capturas en src/assets/images/projects/. Ejemplo:
//   import novatech1 from '../assets/images/projects/novatech-1.jpg';
//   import novatech2 from '../assets/images/projects/novatech-2.jpg';
//   ...luego usa images: [novatech1, novatech2] en vez de las URLs de abajo.
//
// "demoType" controla qué botón de demo se muestra en la tarjeta:
//   'live'  -> enlace normal a demoUrl (sitio desplegado)
//   'video' -> botón "Watch Demo" que abre videoUrl (para apps de escritorio
//              o cualquier proyecto que no esté desplegado en la web)
//   'none'  -> no muestra botón de demo, solo el link a GitHub

import novatech1 from '../assets/images/projects/novatech-1.png';
import novatech2 from '../assets/images/projects/novatech-2.png';
import novatech3 from '../assets/images/projects/novatech-3.png';
import comercializador1 from '../assets/images/projects/comercializadora-1.png';
import comercializador2 from '../assets/images/projects/comercializadora-2.png';
import comercializador3 from '../assets/images/projects/comercializadora-3.png';
import farmacia1 from '../assets/images/projects/Farmacia-1.png';
import farmacia2 from '../assets/images/projects/Farmacia-2.png';
import farmacia3 from '../assets/images/projects/Farmacia-3.png';
import FarmaciaVid from '../assets/videos/Video-Farmacia.mp4';
import ComercializadoraVid from '../assets/videos/Video-DonChucho.mp4';

export const projectsData = [
  {
    id: '01',
    title: 'Novatech',
    description:
      'Aplicación full-stack con backend en Spring Boot, frontend en React y base de datos MySQL. Incluye despliegue en producción (backend en Render, frontend en Netlify).',
    images: [
      novatech1,
      novatech2,
      novatech3,
    ],
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    demoType: 'live',
    demoUrl: 'https://novatech-fr.netlify.app/',
    githubUrl: 'https://github.com/7RonMor7/novatech',
  },
  {
    id: '02',
    title: 'Sistema Farmacéutico',
    description: 'Java (Swing) desktop application for pharmacy management, with connection to a MySQL database.',
    images: [
      farmacia1,
      farmacia2,
      farmacia3,
    ],
    tags: ['Java', 'Swing', 'MySQL'],
    demoType: 'video',
    videoUrl: FarmaciaVid, 
    githubUrl: 'https://github.com/7RonMor7/Farmacia-java-swing',
  },
  {
    id: '03',
    title: 'Comercializadora de Seguros',
    description: 'Desktop application in C# (WinForms) for the management of an insurance marketing company with generation of PDF certificates.',
    images: [
      comercializador1,
      comercializador2,
      comercializador3,
    ],
    tags: ['C#', 'WinForms', 'PDF'],
    demoType: 'video',
    videoUrl: ComercializadoraVid,
    githubUrl: 'https://github.com/7RonMor7/Empresa-Comercializadora-csharp',
  },
];