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

function TapIcon(){
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
        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
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