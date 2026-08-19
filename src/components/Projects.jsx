import React from 'react';
import { projectsData } from '../data/portfolioData';
import { FolderGit2, Cpu, ExternalLink, Github, CheckCircle2, Info, ArrowUpRight, Lock } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Engineering Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Demonstrated engineering solutions spanning IoT embedded systems, automated monitoring, and professional version control workflows.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                {/* Category & Badge */}
                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  <span className="tag tag-accent" style={{ fontSize: '0.75rem' }}>
                    {project.badge}
                  </span>
                </div>

                {/* Project Title & Overview */}
                <h3 className="project-title">{project.title}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--accent-cyan)', marginBottom: '0.75rem', fontWeight: 600 }}>
                  {project.subtitle}
                </p>
                <p className="project-overview">{project.overview}</p>

                {/* Key Features List */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>
                    Key Functional Features:
                  </div>
                  <ul className="project-features-list">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={15} />
                        <div>
                          <strong style={{ color: 'var(--text-primary)' }}>{feat.title}: </strong>
                          <span>{feat.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tag tag-indigo" style={{ fontSize: '0.78rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => onSelectProject(project)}
                  id={`btn-view-details-${project.id}`}
                >
                  <Info size={15} />
                  <span>View Details & Architecture</span>
                </button>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    id={`btn-github-${project.id}`}
                  >
                    <Github size={15} />
                    <span>GitHub Profile</span>
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span
                    className="tag"
                    style={{ fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}
                    title="Private academic repository — code and documentation available upon verified request."
                  >
                    <Lock size={13} />
                    <span>Academic Repo (On Request)</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
