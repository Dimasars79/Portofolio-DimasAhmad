import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, FileText, Download } from 'lucide-react';

export default function Navbar({ onOpenCvModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'learning', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Learning', href: '#learning', id: 'learning' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar-inner" aria-label="Main Navigation">
            {/* Brand Logo */}
            <a 
              href="#home" 
              className="nav-brand"
              onClick={(e) => handleNavClick(e, '#home')}
              id="brand-link"
            >
              <div className="brand-logo">DA</div>
              <div className="brand-title">
                <span className="brand-name">Dimas Ars</span>
                <span className="brand-badge">Computer Engineering</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    id={`nav-link-${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions & Mobile Button */}
            <div className="nav-actions">
              <button 
                type="button"
                className="btn btn-secondary btn-sm btn-cv-nav"
                onClick={onOpenCvModal}
                id="btn-nav-cv"
                aria-label="View or Download CV"
              >
                <FileText size={16} />
                <span>Resume / CV</span>
              </button>

              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                id="btn-mobile-toggle"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} id="mobile-nav-drawer">
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={`mobile-${item.id}`}>
              <a
                href={item.href}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button 
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCvModal();
            }}
            style={{ width: '100%' }}
          >
            <Download size={16} />
            <span>Download CV (Dimas Ars)</span>
          </button>
        </div>
      </div>
    </>
  );
}
