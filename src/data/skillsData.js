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
    label: 'Frontend',
    skills: [
      { name: 'HTML', icon: HTMLIcon, note: 'Estructura semántica y accesible', level: 3 },
      { name: 'CSS', icon: CSSIcon, note: 'Layouts responsivos y animaciones', level: 3 },
      { name: 'JavaScript', icon: JavaScriptIcon, note: 'Lógica del lado del cliente', level: 4 },
      { name: 'React', icon: ReactIcon, note: 'Interfaces basadas en componentes', level: 4 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Java', icon: JavaIcon, note: 'Lógica de negocio y APIs', level: 4 },
      { name: 'Spring Boot', icon: SpringBootIcon, note: 'APIs REST y microservicios', level: 4 },
      { name: 'C#', icon: CsharpIcon, note: 'Aplicaciones y servicios .NET', level: 3 },
      { name: '.NET', icon: DotNetIcon, note: 'Framework backend de Microsoft', level: 3 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'SQL Server', icon: SQLServerIcon, note: 'Bases de datos relacionales', level: 4 },
      { name: 'MongoDB', icon: MongoDBIcon, note: 'Bases de datos NoSQL', level: 3 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', icon: GitIcon, note: 'Control de versiones', level: 4 },
      { name: 'GitHub', icon: GitHubIcon, note: 'Repositorios y colaboración', level: 4 },
      { name: 'Visual Studio', icon: VisualStudioIcon, note: 'IDE para C# / .NET', level: 3 },
      { name: 'VS Code', icon: VSCodeIcon, note: 'Editor de código principal', level: 4 },
      { name: 'IntelliJ IDEA', icon: IntelliJIcon, note: 'IDE para Java / Spring Boot', level: 4 },
    ],
  },
];