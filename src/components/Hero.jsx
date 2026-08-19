import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, MapPin, ArrowRight, Download, CheckCircle2, Terminal } from 'lucide-react';

export default function Hero({ onOpenCvModal }) {
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
            <div className="hero-status" id="hero-status-badge">
              <span className="status-dot"></span>
              <span>Available for Opportunities • {personalInfo.location}</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              {personalInfo.headline.split("Dimas Ars")[0]}
              <span>Dimas Ars</span>
            </h1>

            {/* Subtitle */}
            <div className="hero-subtitle">
              <span>Computer Engineering Graduate</span>
              <span className="hero-subtitle-highlight">|</span>
              <span>IT Support</span>
              <span className="hero-subtitle-highlight">|</span>
              <span>Business Analysis</span>
            </div>

            {/* Short Intro */}
            <p className="hero-description">
              {personalInfo.bioShort}
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn btn-primary"
                id="cta-view-projects"
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="btn btn-secondary"
                id="cta-download-cv"
              >
                <Download size={18} />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="hero-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                id="hero-github-link"
                title="Dimas Ars on GitHub"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
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
                <Linkedin size={20} />
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
          <div className="hero-visual">
            <div className="hero-card">
              {/* Profile Avatar / Monogram */}
              <div className="hero-avatar-wrapper">
                <div className="hero-avatar" title="Dimas Ahmad Noorsaid">
                  <span>DA</span>
                </div>
                <div className="avatar-badge" title="Telkom University Graduate">
                  <CheckCircle2 size={16} />
                </div>
              </div>

              <h2 className="hero-card-name">{personalInfo.name}</h2>
              <p className="hero-card-role">{personalInfo.degree} • {personalInfo.university}</p>

              {/* Quick Highlights Grid */}
              <div className="hero-stats-grid">
                <div className="hero-stat-item">
                  <div className="stat-label">Focus Areas</div>
                  <div className="stat-value" style={{ color: 'var(--accent-cyan)' }}>IT Support & BA</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-label">Modeling Tool</div>
                  <div className="stat-value" style={{ color: 'var(--accent-indigo)' }}>Sparx EA / BPMN</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-label">IoT Tech</div>
                  <div className="stat-value" style={{ color: 'var(--accent-emerald)' }}>ESP32 & Sensors</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-label">Base Location</div>
                  <div className="stat-value">Jakarta, ID</div>
                </div>
              </div>

              {/* Tech Pills */}
              <div className="hero-tech-pills">
                <span className="tag tag-accent">IT Support</span>
                <span className="tag tag-indigo">Business Analysis</span>
                <span className="tag">Sparx EA</span>
                <span className="tag">Networking</span>
                <span className="tag tag-success">Git & GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
