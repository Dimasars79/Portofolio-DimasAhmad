import React from 'react';
import { personalInfo, aboutData } from '../data/portfolioData';
import { Cpu, TrendingUp, Layers, Sparkles, GraduationCap, MapPin, CheckCircle, Mail, Globe } from 'lucide-react';

export default function About() {
  const iconMap = {
    Cpu: <Cpu size={22} />,
    TrendingUp: <TrendingUp size={22} />,
    Layers: <Layers size={22} />,
    Sparkles: <Sparkles size={22} />
  };

  return (
    <section className="section" id="about" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging technical IT infrastructure with structured business process analysis and documentation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Left: Narrative & Key Strengths */}
          <div className="about-narrative">
            <div className="glass-card">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Engineering Mindset & Systematic Approach
              </h3>
              
              <p style={{ marginBottom: '1.25rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {personalInfo.bioFull}
              </p>

              <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {aboutData.summary}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>
                  Core Competencies
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {aboutData.keyAttributes.map((attr, idx) => (
                    <span key={idx} className="tag tag-accent" style={{ fontSize: '0.8rem' }}>
                      <CheckCircle size={12} style={{ color: 'var(--accent-cyan)' }} />
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Meta Card */}
            <div className="glass-card" style={{ padding: '1.5rem 2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div className="meta-item">
                  <div className="meta-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div className="meta-label">Education</div>
                    <div className="meta-value">Telkom University</div>
                  </div>
                </div>

                <div className="meta-item">
                  <div className="meta-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="meta-label">Location</div>
                    <div className="meta-value">Jakarta, Indonesia</div>
                  </div>
                </div>

                <div className="meta-item">
                  <div className="meta-icon">
                    <Layers size={18} />
                  </div>
                  <div>
                    <div className="meta-label">Primary Track</div>
                    <div className="meta-value">IT Support & Analysis</div>
                  </div>
                </div>

                <div className="meta-item">
                  <div className="meta-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="meta-label">Direct Contact</div>
                    <div className="meta-value" style={{ fontSize: '0.85rem' }}>Dimasars79@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Focus Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Key Areas of Interest & Practice
            </h3>

            <div className="about-pillars-grid">
              {aboutData.pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon">
                    {iconMap[pillar.icon] || <Cpu size={20} />}
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>

            {/* Quote Card */}
            <div 
              style={{
                marginTop: 'auto',
                padding: '1.5rem',
                background: 'rgba(56, 189, 248, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div style={{ width: '4px', height: '100%', background: 'var(--accent-cyan)', borderRadius: '2px', alignSelf: 'stretch' }}></div>
              <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>
                "Committed to delivering reliable IT support and clear, structured system documentation that empowers organizations to operate effectively."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
