import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

export default function Experience() {
  return (
    <section className="section" id="experience" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Professional Experience</span>
          </div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Hands-on internship experience in business requirement engineering, BPMN process modeling, and enterprise documentation.
          </p>
        </div>

        {/* Experience Timeline */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {experienceData.map((exp, idx) => (
            <div key={idx} className="timeline-card reveal-on-scroll reveal-delay-1 timeline-interactive">
              <div className="timeline-header">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span className="tag tag-indigo" style={{ fontSize: '0.75rem' }}>
                      <Briefcase size={12} />
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">
                    <Building size={16} />
                    <span>{exp.company}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="timeline-period">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                {exp.summary}
              </p>

              {/* Responsibilities List */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Key Responsibilities & Contributions:
                </h4>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Tools & Frameworks Used */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Key Tools & Methods:
                </span>
                {exp.toolsUsed.map((tool, tIdx) => (
                  <span key={tIdx} className="tag tag-accent pill-interactive" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                    {tool}
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
