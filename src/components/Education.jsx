import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2, Award } from 'lucide-react';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Strong foundation in computer hardware, network protocols, operating systems, and software engineering principles.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {educationData.map((edu, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-header">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span className="tag tag-accent" style={{ fontSize: '0.75rem' }}>
                      <Award size={12} />
                      Bachelor Degree (S.T.)
                    </span>
                    <span className="tag tag-success" style={{ fontSize: '0.75rem' }}>
                      <CheckCircle2 size={12} />
                      {edu.status}
                    </span>
                  </div>
                  <h3 className="timeline-role">{edu.degree}</h3>
                  <div className="timeline-company">
                    <span>{edu.institution}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="timeline-period">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                {edu.description}
              </p>

              {/* Coursework & Competency Grid */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={16} style={{ color: 'var(--accent-cyan)' }} />
                  <span>Key Coursework & Relevant Technology Domains</span>
                </h4>

                <div className="coursework-grid">
                  {edu.relevantCoursework.map((course, cIdx) => (
                    <div key={cIdx} className="coursework-item">
                      <CheckCircle2 size={14} />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Skills Acquired */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Competencies:
                </span>
                {edu.skillsAcquired.map((skill, sIdx) => (
                  <span key={sIdx} className="tag tag-indigo" style={{ fontSize: '0.78rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
