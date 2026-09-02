import React, { useState } from 'react';
import { useLanguage, t } from '../context/LanguageContext';

const uiText = {
  nameLabel: { es: 'Nombre', en: 'Name' },
  namePlaceholder: { es: 'Tu nombre', en: 'Your Name' },
  emailLabel: { es: 'Correo', en: 'Email' },
  emailPlaceholder: { es: 'tu.correo@ejemplo.com', en: 'your.email@example.com' },
  messageLabel: { es: 'Mensaje', en: 'Message' },
  messagePlaceholder: { es: 'Cuéntame sobre tu proyecto...', en: 'Tell me about your project...' },
  sending: { es: 'Enviando...', en: 'Sending...' },
  submit: { es: 'Contactar', en: 'Get In Touch' },
  errorText: { es: 'No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos.', en: "We couldn't send your message. Please try again in a few minutes." },
  successTitle: { es: '¡Mensaje enviado!', en: 'Message Sent!' },
  successText: {
    es: 'Gracias por escribirme. Te responderé lo antes posible.',
    en: 'Thank you for reaching out. I will get back to you as soon as possible.',
  },
};

async function simulateSubmit() {
  await new Promise((resolve) => setTimeout(resolve, 600));
}

export default function ContactForm({ onSubmitMessage = simulateSubmit }) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await onSubmitMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-3">
        <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xl font-bold">
          ✓
        </div>
        <h4 className="text-xl font-bold text-white">{t(uiText.successTitle, language)}</h4>
        <p className="text-slate-400 text-sm max-w-xs">{t(uiText.successText, language)}</p>
      </div>
    );
  }

  const inputClasses =
    'w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-blue-500 transition-all';
  const labelClasses = 'block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelClasses}>{t(uiText.nameLabel, language)}</label>
        <input
          type="text"
          required
          placeholder={t(uiText.namePlaceholder, language)}
          value={formData.name}
          onChange={handleChange('name')}
          className={inputClasses}
        />
      </div>

      <div>
        <label className={labelClasses}>{t(uiText.emailLabel, language)}</label>
        <input
          type="email"
          required
          placeholder={t(uiText.emailPlaceholder, language)}
          value={formData.email}
          onChange={handleChange('email')}
          className={inputClasses}
        />
      </div>

      <div>
        <label className={labelClasses}>{t(uiText.messageLabel, language)}</label>
        <textarea
          rows="4"
          required
          placeholder={t(uiText.messagePlaceholder, language)}
          value={formData.message}
          onChange={handleChange('message')}
          className={`${inputClasses} resize-none`}
        ></textarea>
      </div>

      {status === 'error' && (
        <p role="alert" className="text-xs text-red-400">
          {t(uiText.errorText, language)}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-sm py-3 rounded-lg shadow-lg shadow-blue-600/30 transition-all"
      >
        {status === 'sending' ? t(uiText.sending, language) : t(uiText.submit, language)}
      </button>
    </form>
  );
}