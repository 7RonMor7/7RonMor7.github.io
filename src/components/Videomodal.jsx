import React, { useEffect, useRef } from 'react';

export default function VideoModal({ isOpen, videoUrl, title, onClose }) {
  const videoRef = useRef(null);
 
  // Cierra con Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);
 
  // Pausa el video al cerrar, para que no siga sonando de fondo
  const handleClose = () => {
    if (videoRef.current) videoRef.current.pause();
    onClose();
  };
 
  if (!isOpen) return null;
 
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        className="relative bg-slate-900 border border-slate-700 rounded-2xl p-4 sm:p-6 max-w-2xl w-full shadow-2xl animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Cerrar video"
            className="text-slate-500 hover:text-white transition-colors text-sm"
          >
            ✕
          </button>
        </div>
 
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          autoPlay
          className="w-full rounded-lg bg-black aspect-video"
        >
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    </div>
  );
}