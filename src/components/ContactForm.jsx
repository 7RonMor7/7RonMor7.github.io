import React, { useState } from 'react';

// IMPORTANTE: por defecto este formulario solo simula el envío
// (ver simulateSubmit más abajo). Pasa la prop `onSubmitMessage` para
// conectarlo a un servicio real — ver el paso a paso de Formspree/Web3Forms.

async function simulateSubmit() {
  await new Promise((resolve) => setTimeout(resolve, 600));
}

export default function ContactForm({ onSubmitMessage = simulateSubmit }) {
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
        <h4 className="text-xl font-bold text-white">Message Sent!</h4>
        <p className="text-slate-400 text-sm max-w-xs">
          Thank you for reaching out. I will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  const inputClasses =
    'w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-blue-500 transition-all';
  const labelClasses = 'block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelClasses}>Name</label>
        <input
          type="text"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange('name')}
          className={inputClasses}
        />
      </div>

      <div>
        <label className={labelClasses}>Email</label>
        <input
          type="email"
          required
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange('email')}
          className={inputClasses}
        />
      </div>

      <div>
        <label className={labelClasses}>Message</label>
        <textarea
          rows="4"
          required
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange('message')}
          className={`${inputClasses} resize-none`}
        ></textarea>
      </div>

      {status === 'error' && (
        <p role="alert" className="text-xs text-red-400">
          No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-sm py-3 rounded-lg shadow-lg shadow-blue-600/30 transition-all"
      >
        {status === 'sending' ? 'Sending...' : 'Get In Touch'}
      </button>
    </form>
  );
}