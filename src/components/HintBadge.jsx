import React from 'react';
import { useLanguage, t } from '../context/LanguageContext';

/**
 * Etiqueta informativa que avisa al visitante de una interacción que de
 * otro modo pasaría desapercibida.
 *
 * - `text`      → versión desktop (hover). Se posiciona absolute arriba
 *                 a la derecha, así que su lugar en el JSX no afecta
 *                 dónde se ve.
 * - `touchText` → versión móvil (toque), opcional. Se renderiza en el
 *                 flujo normal, centrada, justo donde se coloque el
 *                 componente. Si no se pasa, en móvil no se muestra nada.
 *
 * Por eso conviene colocar <HintBadge> DESPUÉS del encabezado de la
 * sección: el desktop se ancla igual en la esquina, y el móvil queda
 * debajo del título, que es donde se lee natural.
 */

function CursorIcon(){
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5 shrink-0 animate-hint-nudge"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
      />
    </svg>
  );
}

/** Mano tocando la pantalla, con ondas que se expanden desde el punto de contacto. */
function TapIcon(){
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Ondas del toque */}
      <circle
        cx="10.5"
        cy="6.5"
        r="7"
        stroke="currentColor"
        strokeWidth="1.2"
        className="animate-hint-ripple"
      />
      {/* Mano haciendo tap */}
      <path
        className="animate-hint-tap"
        fill="currentColor"
        d="M18.19 12.44l-3.24-1.62c1.29-1 2.12-2.56 2.12-4.32 0-3.03-2.47-5.5-5.5-5.5s-5.5 2.47-5.5 5.5c0 2.13 1.22 3.98 3 4.89v3.26c-2.15-.46-2.02-.44-2.26-.44-.53 0-1.03.21-1.41.59L4 16.22l5.09 5.09c.43.44 1.03.69 1.65.69h6.4c.94 0 1.74-.7 1.86-1.63l.5-3.68c.14-1.02-.39-2-1.31-2.46zm-.19 5.86L17.5 20h-6.4c-.35 0-.68-.14-.92-.38L5.82 15.2l3.15.66V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5.5h1.38l4.96 2.48c.33.16.53.51.48.87l-.79.95z"
      />
    </svg>
  );
}

const sharedClasses = 
  'items-center gap-2 bg-slate-900/80 border border-cyan-500/30 backdrop-blur-sm ' +
  'text-cyan-300 text-xs font-medium px-4 py-2 rounded-full ' +
  'shadow-lg shadow-cyan-500/10 animate-hint-pulse';

export default function HintBadge({ text, touchText }) {
  const { language } = useLanguage();

  return (
    <>
      {/* Desktop: anclada arriba a la derecha de la sección */}
      <div className={`hidden md:flex absolute top-0 right-0 z-20 ${sharedClasses}`}>
        <CursorIcon />
        {t(text, language)}
      </div>
 
      {/* Móvil: en el flujo, centrada bajo el encabezado */}
      {touchText && (
        <div className="flex md:hidden justify-center">
          <div className={`inline-flex ${sharedClasses}`}>
            <TapIcon />
            {t(touchText, language)}
          </div>
        </div>
      )}
    </>
  );
}