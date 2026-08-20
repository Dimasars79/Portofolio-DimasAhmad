import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LearningJourney from './components/LearningJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import ProjectModal from './components/ProjectModal';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('dimas-portfolio-theme');
    if (savedTheme) return savedTheme;
    return 'dark';
  });

  // Apply theme to document root whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dimas-portfolio-theme', theme);
  }, [theme]);

  // Activate scroll-reveal animations across sections
  useScrollReveal();

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCvModalOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-root">
      {/* Sticky Navigation Bar with Theme Switcher */}
      <Navbar 
        onOpenCvModal={() => setIsCvModalOpen(true)} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <LearningJourney />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CvModal 
        isOpen={isCvModalOpen} 
        onClose={() => setIsCvModalOpen(false)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
