import React from 'react';
import { X, CheckCircle2, Cpu, Github, ExternalLink, ArrowRight, Layers, Lock } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close Project Details"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="tag tag-accent" style={{ fontSize: '0.75rem' }}>{project.category}</span>
            <span className="tag tag-indigo" style={{ fontSize: '0.75rem' }}>{project.period}</span>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>{project.title}</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '0.25rem' }}>
            {project.subtitle}
          </p>
        </div>

        {/* Overview */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
            Project Overview
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {project.overview}
          </p>
        </div>

        {/* Technical Architecture & Specifications */}
        {project.technicalHighlights && (
          <div style={{ marginBottom: '1.5rem', background: 'rgba(7, 11, 20, 0.6)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Cpu size={16} />
              <span>Technical Specifications & Architecture</span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.technicalHighlights.map((spec, sIdx) => (
                <li key={sIdx} style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>▸</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Features Breakdown */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Layers size={16} />
            <span>Implemented Features</span>
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.keyFeatures.map((feat, fIdx) => (
              <div key={fIdx} style={{ padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {feat.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {feat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies List */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.6rem' }}>
            Technologies & Components
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.technologies.map((tech, tIdx) => (
              <span key={tIdx} className="tag tag-indigo" style={{ fontSize: '0.8rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '0.75rem' }}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Github size={16} />
              <span>Explore on GitHub</span>
              <ExternalLink size={14} />
            </a>
          ) : (
            <span className="tag" style={{ color: 'var(--text-muted)' }}>
              <Lock size={13} style={{ marginRight: '0.3rem' }} />
              Repository is private for academic evaluation
            </span>
          )}

          <button type="button" onClick={onClose} className="btn btn-secondary btn-sm">
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
