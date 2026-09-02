import React from 'react';
import AvailabilityCard from '../components/AvailabilityCard';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { contactIntro, socialLinks } from '../data/contactData';
import { useLanguage, t } from '../context/LanguageContext';

const uiText = {
  followMe: { es: 'Sígueme', en: 'Follow Me' },
};

async function sendToWeb3Forms(formData) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Web3Forms submission failed');
  }
}

export default function ContactSection({ setActiveTab }) {
  const { language } = useLanguage();

  return (
    <section className="py-6 space-y-10 animate-fade-in">
      {/* Encabezado */}
      <div className="text-center space-y-3">
        <span className="bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
          {t(contactIntro.badge, language)}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-4">
          {t(contactIntro.heading, language)}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto pt-4">
        {/* Columna Izquierda */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{t(contactIntro.title, language)}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{t(contactIntro.text, language)}</p>
          </div>

          <AvailabilityCard onSeeEducation={setActiveTab ? () => setActiveTab('Education') : undefined} />

          {/* Redes */}
          <div className="space-y-3 pt-2">
            <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider">
              {t(uiText.followMe, language)}
            </p>
            <SocialLinks links={socialLinks} />
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl">
          <ContactForm onSubmitMessage={sendToWeb3Forms} />
        </div>
      </div>
    </section>
  );
}