// TODO: personaliza el campo "note" de cada tecnología — es lo que aparece
// en el tooltip al pasar el cursor. Puede ser una frase de lo que haces con
// esa tecnología, años de experiencia, o un nivel ("Avanzado"), lo que prefieras.

import HTMLIcon from '../assets/icons/html5.svg';
import CSSIcon from '../assets/icons/css3.svg';
import JavaScriptIcon from '../assets/icons/javascript.svg';
import ReactIcon from '../assets/icons/react.svg';
import JavaIcon from '../assets/icons/java.svg';
import SpringBootIcon from '../assets/icons/spring.svg';
import CsharpIcon from '../assets/icons/csharp.svg';
import DotNetIcon from '../assets/icons/dotnetcore.svg';
import SQLServerIcon from '../assets/icons/microsoftsqlserver.svg';
import MongoDBIcon from '../assets/icons/mongodb.svg';
import GitIcon from '../assets/icons/git.svg';
import GitHubIcon from '../assets/icons/github.svg';
import VisualStudioIcon from '../assets/icons/visualstudio.svg';
import VSCodeIcon from '../assets/icons/vscode.svg';
import IntelliJIcon from '../assets/icons/intellij.svg';

/*const devicon = (slug, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;*/

export const skillCategories = [
  {
    id: 'frontend',
    label: { es: 'Frontend', en: 'Frontend' },
    skills: [
      { name: 'HTML', icon: HTMLIcon, note: { es: 'Estructura semántica y accesible', en: 'Semantic and accessible markup' }, level: 3 },
      { name: 'CSS', icon: CSSIcon, note: { es: 'Layouts responsivos y animaciones', en: 'Responsive layouts and animations' }, level: 3 },
      { name: 'JavaScript', icon: JavaScriptIcon, note: { es: 'Lógica del lado del cliente', en: 'Client-side logic' }, level: 4 },
      { name: 'React', icon: ReactIcon, note: { es: 'Interfaces basadas en componentes', en: 'Component-based interfaces' }, level: 4 },
    ],
  },
  {
    id: 'backend',
    label: { es: 'Backend', en: 'Backend' },
    skills: [
      { name: 'Java', icon: JavaIcon, note: { es: 'Lógica de negocio y APIs', en: 'Business logic and APIs' }, level: 4 },
      { name: 'Spring Boot', icon: SpringBootIcon, note: { es: 'APIs REST y microservicios', en: 'REST APIs and microservices' }, level: 4 },
      { name: 'C#', icon: CsharpIcon, note: { es: 'Aplicaciones y servicios .NET', en: '.NET applications and services' }, level: 3 },
      { name: '.NET', icon: DotNetIcon, note: { es: 'Framework backend de Microsoft', en: "Microsoft's backend framework" }, level: 3 },
    ],
  },
  {
    id: 'databases',
    label: { es: 'Bases de Datos', en: 'Databases' },
    skills: [
      { name: 'SQL Server', icon: SQLServerIcon, note: { es: 'Bases de datos relacionales', en: 'Relational databases' }, level: 4 },
      { name: 'MongoDB', icon: MongoDBIcon, note: { es: 'Bases de datos NoSQL', en: 'NoSQL databases' }, level: 3 },
    ],
  },
  {
    id: 'tools',
    label: { es: 'Herramientas', en: 'Tools' },
    skills: [
      { name: 'Git', icon: GitIcon, note: { es: 'Control de versiones', en: 'Version control' }, level: 4 },
      { name: 'GitHub', icon: GitHubIcon, note: { es: 'Repositorios y colaboración', en: 'Repositories and collaboration' }, level: 4 },
      { name: 'Visual Studio', icon: VisualStudioIcon, note: { es: 'IDE para C# / .NET', en: 'IDE for C# / .NET' }, level: 3 },
      { name: 'VS Code', icon: VSCodeIcon, note: { es: 'Editor de código principal', en: 'Primary code editor' }, level: 4 },
      { name: 'IntelliJ IDEA', icon: IntelliJIcon, note: { es: 'IDE para Java / Spring Boot', en: 'IDE for Java / Spring Boot' }, level: 4 },
    ],
  },
];