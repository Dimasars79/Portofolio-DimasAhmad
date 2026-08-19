import React from 'react';
import { personalInfo, educationData, experienceData, skillsData } from '../data/portfolioData';
import { X, Download, Printer, CheckCircle, Mail, MapPin, Linkedin, Github, FileText, ExternalLink } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close CV Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>
              <FileText size={16} />
              <span>Curriculum Vitae Preview</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>{personalInfo.name}</h2>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <a
              href={`/${personalInfo.cvFileName}`}
              download={personalInfo.cvFileName}
              className="btn btn-primary btn-sm"
              id="btn-modal-download-cv"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* CV Document Container */}
        <div style={{ background: 'rgba(7, 11, 20, 0.7)', borderRadius: 'var(--radius-md)', padding: '1.75rem', border: '1px solid var(--border-subtle)' }}>
          {/* Header Summary */}
          <div style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)' }}>{personalInfo.name}</h3>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0.25rem 0 0.5rem 0' }}>
              {personalInfo.subtitle}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>📍 {personalInfo.location}</span>
              <span>✉️ {personalInfo.email}</span>
              <span>🔗 linkedin.com/in/dimasars</span>
              <span>🐙 github.com/Dimasars79</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
              Professional Summary
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {personalInfo.bioFull}
            </p>
          </div>

          {/* Experience Section */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.6rem' }}>
              Experience
            </h4>
            {experienceData.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <span>{exp.role} — {exp.company}</span>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.35rem', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {exp.responsibilities.slice(0, 3).map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
              Education
            </h4>
            {educationData.map((edu, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <span>{edu.degree}</span>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>{edu.institution}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{edu.location}</p>
              </div>
            ))}
          </div>

          {/* Core Skills Matrix */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
              Key Technical & Business Skills
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {skillsData.items.map((s, idx) => (
                <span key={idx} className="tag tag-accent" style={{ fontSize: '0.75rem' }}>
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span>💡 To replace with your official PDF resume file, simply place <code>Dimas_Ahmad_Noorsaid_CV.pdf</code> in the <code>public/</code> folder.</span>
          <button type="button" onClick={onClose} className="btn btn-secondary btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
