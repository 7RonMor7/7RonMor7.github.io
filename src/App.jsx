import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import SkillsSection from './pages/SkillsSection';
import ProjectsSection from './pages/ProjectsSection';
import EducationSection from './pages/EducationSection';
import ContactSection from './pages/ContactSection';
import Footer from './components/Footer';

// Importa las animaciones globales una sola vez para toda la app
import './styles/animations.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {activeTab === 'Home' && <HeroSection setActiveTab={setActiveTab} />}
        {activeTab === 'About' && <AboutSection setActiveTab={setActiveTab} />}
        {activeTab === 'Skills' && <SkillsSection />}
        {activeTab === 'Projects' && <ProjectsSection />}
        {activeTab === 'Education' && <EducationSection />}
        {activeTab === 'Contact' && <ContactSection setActiveTab={setActiveTab} />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}