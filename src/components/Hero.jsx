import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ onOpenCvModal }) {
  const roles = [
    "Dimas Ars",
    "IT Support Specialist",
    "Business Analyst",
    "Computer Engineering Graduate",
    "System Analyst"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex];

      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));

        // When complete word is typed
        if (currentText === fullText) {
          // Pause at full text
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(60);
          return;
        }
      } else {
        // Deleting backward
        setCurrentText(fullText.substring(0, currentText.length - 1));

        // When word is completely erased
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
          return;
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 45 : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed, roles]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Narrative & Call to Actions */}
          <div className="hero-content">
            {/* Status & Location Badge */}
            <div className="hero-status hero-entrance-1" id="hero-status-badge">
              <span className="status-dot"></span>
              <span>Available for Opportunities • {personalInfo.location}</span>
            </div>

            {/* Animated Headline */}
            <h1 className="hero-title hero-entrance-2">
              <span className="hero-greeting-line">
                Hello, I'm <span className="wave-emoji" role="img" aria-label="waving hand">👋</span>
              </span>
              <span className="hero-name-line">
                <span className="animated-gradient-name" id="typewriter-headline">
                  {currentText}
                </span>
                <span className="typewriter-caret" aria-hidden="true">|</span>
              </span>
            </h1>

            {/* Subtitle */}
            <div className="hero-subtitle hero-entrance-3">
              <span>Computer Engineering Graduate</span>
              <span className="hero-subtitle-highlight">|</span>
              <span>IT Support</span>
              <span className="hero-subtitle-highlight">|</span>
              <span>Business Analysis</span>
            </div>

            {/* Short Intro */}
            <p className="hero-description hero-entrance-4">
              {personalInfo.bioShort}
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions hero-entrance-5">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn btn-primary btn-interactive"
                id="cta-view-projects"
              >
                <span>View My Projects</span>
                <ArrowRight size={18} className="btn-icon-arrow" />
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="btn btn-secondary btn-interactive"
                id="cta-download-cv"
              >
                <Download size={18} className="btn-icon-bounce" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="hero-socials hero-entrance-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                id="hero-github-link"
                title="Dimas Ars on GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                id="hero-linkedin-link"
                title="Dimas Ars on LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                id="hero-email-link"
                title="Email Dimas Ars"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>

              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={15} style={{ color: 'var(--accent-cyan)' }} />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Profile & Tech Card */}
          <div className="hero-visual hero-entrance-card">
            <div className="hero-card hero-floating-card">
              {/* Profile Avatar / Real Photo */}
              <div className="hero-avatar-wrapper">
                <div className="hero-avatar" title="Dimas Ahmad Noorsaid">
                  <img 
                    src="/profile.jpg" 
                    alt="Dimas Ahmad Noorsaid - Computer Engineering Graduate" 
                    className="hero-avatar-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="avatar-badge" title="Telkom University Graduate • Verified Profile">
                  <CheckCircle2 size={18} />
                </div>
              </div>

              <h2 className="hero-card-name">{personalInfo.name}</h2>
              <p className="hero-card-role">{personalInfo.degree} • {personalInfo.university}</p>

              {/* Quick Highlights Grid */}
              <div className="hero-stats-grid">
                <div className="hero-stat-item stat-item-interactive">
                  <div className="stat-label">Focus Areas</div>
                  <div className="stat-value" style={{ color: 'var(--accent-cyan)' }}>IT Support & BA</div>
                </div>
                <div className="hero-stat-item stat-item-interactive">
                  <div className="stat-label">Modeling Tool</div>
                  <div className="stat-value" style={{ color: 'var(--accent-indigo)' }}>Sparx EA / BPMN</div>
                </div>
                <div className="hero-stat-item stat-item-interactive">
                  <div className="stat-label">IoT Tech</div>
                  <div className="stat-value" style={{ color: 'var(--accent-emerald)' }}>ESP32 & Sensors</div>
                </div>
                <div className="hero-stat-item stat-item-interactive">
                  <div className="stat-label">Base Location</div>
                  <div className="stat-value">Jakarta, ID</div>
                </div>
              </div>

              {/* Tech Pills */}
              <div className="hero-tech-pills">
                <span className="tag tag-accent pill-interactive">IT Support</span>
                <span className="tag tag-indigo pill-interactive">Business Analysis</span>
                <span className="tag pill-interactive">Sparx EA</span>
                <span className="tag pill-interactive">Networking</span>
                <span className="tag tag-success pill-interactive">Git & GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
