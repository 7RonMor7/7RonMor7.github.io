import React from 'react';

// Wrapper para no repetir los mismos atributos svg en cada icono
function IconBase({ children, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {children}
    </svg>
  );
}

export function ProjectsIcon({ className = 'h-5 w-5 text-indigo-400' }) {
  return (
    <IconBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </IconBase>
  );
}

export function EducationIcon({ className = 'h-5 w-5 text-blue-400' }) {
  return (
    <IconBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </IconBase>
  );
}

export function TechIcon({ className = 'h-5 w-5 text-emerald-400' }) {
  return (
    <IconBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </IconBase>
  );
}

export function TimeIcon({ className = 'h-5 w-5 text-purple-400' }) {
  return (
    <IconBase className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </IconBase>
  );
}