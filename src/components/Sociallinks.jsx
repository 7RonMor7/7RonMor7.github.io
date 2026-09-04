import React, { useState } from 'react';

function SocialButton({ network }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <a
      href={network.href}
      target="_blank"
      rel="noopener noreferrer"
      title={network.name}
      aria-label={network.name}
      style={{
        '--aura-color': network.aura,
        '--icon-color': network.color,
      }}
      // onTouchStart/onTouchEnd simulan el hover en móvil: mantener
      // presionado activa el mismo aura + tooltip que el mouse en desktop.
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      className={`relative w-[52px] h-[52px] rounded-2xl flex items-center justify-center
                  bg-slate-900/80 border transition-all duration-200 ease-out
                  ${
                    isActive
                      ? '-translate-y-1 scale-[1.08] bg-slate-800/70 border-[var(--icon-color)] shadow-[0_0_0_1px_var(--aura-color),0_0_14px_4px_var(--aura-color),0_6px_20px_rgba(0,0,0,0.35)]'
                      : 'border-slate-800'
                  }`}
    >
      <img
        src={network.icon}
        alt={network.name}
        draggable={false}
        className={`w-[26px] h-[26px] object-contain pointer-events-none transition-all duration-200 ${
          isActive ? 'drop-shadow-[0_0_4px_var(--aura-color)]' : ''
        }`}
      />

      {/* Tooltip */}
      <span
        className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap
                    bg-slate-900 border border-slate-700 text-slate-300 text-[11px]
                    px-2.5 py-1 rounded-md pointer-events-none transition-all duration-150
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
      >
        {network.name}
      </span>
    </a>
  );
}

export default function SocialLinks({ links }) {
  return (
    <div className="flex gap-4">
      {links.map((network) => (
        <SocialButton key={network.name} network={network} />
      ))}
    </div>
  );
}