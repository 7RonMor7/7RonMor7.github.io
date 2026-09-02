import javaIcon from '../assets/icons/java.svg';
import pythonIcon from '../assets/icons/python.svg';
import gorroIcon from '../assets/images/gorro-graduacion.png';

export const educationCategories = [
  { id: 'all', label: 'Todo' },
  { id: 'university', label: 'Títulos Universitarios' },
  { id: 'courses', label: 'Cursos' },
  { id: 'certificates', label: 'Certificaciones' },
];

export const educationData = [
  // --- TÍTULOS UNIVERSITARIOS ---
  {
    id: 'edu-1',
    type: 'university',
    title: 'Tecnología en Desarrollo de Software',
    institution: 'Institución Universitaria Pascual Bravo',
    period: '2024 - 2027', 
    status: 'En curso',
    description: 'Formación profesional enfocada en el diseño, desarrollo, implementación y gestión de sistemas informáticos.',
    skills: ['Estructura de Datos', 'POO', 'Diseñador de interfaz gráfica', 'Bases de Datos Relacionales', 'Analísta de Requisitos'],
    icon: gorroIcon,
    progress: { creditsCompleted: 64, creditsTotal: 96 }, // Ejemplo de progreso académico
    credentialUrl: null, // TODO: link real si aplica
  },

  // --- CURSOS COMPLETADOS ---
  {
    id: 'course-1',
    type: 'courses',
    title: 'Curso de Java desde cero a experto',
    institution: 'Edutin Academy',
    period: '2025',
    status: 'Completado',
    description: 'Curso de Java enfocado en el manejo práctico de los elementos de la sintaxis del lenguaje, la programación orientada a objetos, estructuras de datos, y el desarrollo de aplicaciones avanzadas.',
    skills: ['Java', 'Java swing', 'POO', 'Model-View-Controller'],
    icon: javaIcon,
    credentialUrl: 'https://app.edutin.com/verify/10654144',
  },
  /*{
    id: 'course-2',
    type: 'courses',
    title: 'Desarrollo Web Full Stack con React y Node.js',
    institution: 'Platzi / Udemy',
    period: '2023',
    status: 'Completado',
    description: 'Programa intensivo para la creación de aplicaciones SPA integradas con APIs RESTful, gestión de estado y autenticación.',
    skills: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'REST API', 'Git & GitHub'],
    icon: '💻',
    credentialUrl: '#',
  },
  {
    id: 'course-3',
    type: 'courses',
    title: 'Especialización en Java & Spring Boot',
    institution: 'Alura / Udemy',
    period: '2023 - 2024',
    status: 'Completado',
    description: 'Desarrollo Backend enfocado en Spring Framework, construcción de APIs robustas, ORM con Hibernate y seguridad web.',
    skills: ['Java 17', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'PostgreSQL', 'JUnit'],
    icon: '☕',
    credentialUrl: '#',
  },*/

  // --- CERTIFICACIONES ---
  {
    id: 'cert-1',
    type: 'certificates',
    title: 'Web Development with Python',
    institution: 'IBM SkillsBuild',
    period: '2025',
    status: 'Vigente',
    description: 'Certificación que acredita competencia práctica en desarrollo web, programación en Python y depuración de código en Python.',
    skills: ['Python', 'Django', 'Git', 'POO', 'Web Development', 'Testing'],
    icon: pythonIcon,
    credentialUrl: 'https://www.credly.com/badges/76c3804f-aa20-4483-b6a2-4ed081bb33c0/public_url',
  },
  /*{
    id: 'cert-2',
    type: 'certificates',
    title: 'AWS Certified Cloud Practitioner',
    institution: 'Amazon Web Services',
    period: '2024',
    status: 'Vigente',
    description: 'Certificación oficial que valida conocimientos fundamentales en servicios en la nube de AWS, seguridad y despliegue.',
    skills: ['AWS EC2', 'AWS S3', 'Cloud Computing', 'IAM', 'Servicios Serverless'],
    icon: '📜',
    credentialUrl: '#',
  },
  {
    id: 'cert-3',
    type: 'certificates',
    title: 'EF SET English Certificate (C1 Advanced)',
    institution: 'EF Standard English Test',
    period: '2024',
    status: 'Vigente',
    description: 'Acreditación de nivel de inglés avanzado (C1) para comunicación profesional y trabajo en equipos multidisciplinarios internacionales.',
    skills: ['Professional English', 'Technical Communication', 'Reading & Listening'],
    icon: '🌐',
    credentialUrl: '#',
  },*/
];