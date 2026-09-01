import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import AvailabilityCard from '../components/AvailabilityCard';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/Sociallinks';
import { contactIntro, socialLinks, contactInfo } from '../data/contactData';

// Envía el mensaje a Web3Forms. La Access Key vive en la variable de entorno
// VITE_WEB3FORMS_KEY (archivo .env en la raíz del proyecto, NO en el código).
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
  return (
    <section className="py-6 space-y-10 animate-fade-in">
      {/* Encabezado */}
      <div className="text-center space-y-3">
        <span className="bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
          {contactIntro.badge}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-4">
          {contactIntro.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto pt-4">
        {/* Columna Izquierda: Mensaje principal + Testimonio + Info de Contacto */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{contactIntro.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{contactIntro.text}</p>
          </div>

          <AvailabilityCard onSeeEducation={setActiveTab ? () => setActiveTab('Education') : undefined} />
          {/*<TestimonialCard
            quote={testimonial.quote}
            authorName={testimonial.authorName}
            authorRole={testimonial.authorRole}
            authorPhoto={testimonial.authorPhoto}
          />*/}

          {/* Datos de contacto y redes */}
          <div className="space-y-3 pt-2">
            <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Follow Me</p>
            <SocialLinks links={socialLinks} />
            <div className="pt-2 text-xs text-slate-400 space-y-2">
              {/*<p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  ✉️ {contactInfo.email}
                </a>
              </p>
              <p>
                <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white transition-colors">
                  📞 {contactInfo.phone}
                </a>
              </p>*/}
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario de Contacto */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl">
          <ContactForm onSubmitMessage={sendToWeb3Forms} />
        </div>
      </div>
    </section>
  );
}