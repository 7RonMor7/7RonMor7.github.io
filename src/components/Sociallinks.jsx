import React from 'react';

export default function SocialLinks({ links }) {
  return (
    <div className="flex gap-4">
      {links.map((network) => (
        <a
          key={network.name}
          href={network.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={network.name}
          title={network.name}
          className="group bg-blue-400 border border-slate-800 hover:border-black-500 hover:bg-blue-300 p-3.5 rounded-lg transition-all"
        >
          <img
            src={network.icon}
            alt=""
            aria-hidden="true"
            className="w-5 h-5 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
          />
        </a>
      ))}
    </div>
  );
}