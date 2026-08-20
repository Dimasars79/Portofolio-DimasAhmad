import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Layers, CheckCircle2, Wrench, BarChart3, Users } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillsData.items 
    : skillsData.items.filter(item => item.category === activeCategory);

  const getLevelBadgeClass = (level) => {
    switch (level.toLowerCase()) {
      case 'strong':
        return 'badge-strong';
      case 'intermediate':
        return 'badge-intermediate';
      case 'fundamental':
      case 'beginner':
        return 'badge-fundamental';
      default:
        return 'badge-intermediate';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'technical':
        return <Wrench size={16} />;
      case 'business':
        return <BarChart3 size={16} />;
      case 'soft':
        return <Users size={16} />;
      default:
        return <Layers size={16} />;
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-badge">
            <Layers size={14} />
            <span>Skill Matrix</span>
          </div>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-subtitle">
            A balanced skill set combining technical troubleshooting, hardware/software fundamentals, and enterprise business process analysis.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter reveal-on-scroll reveal-delay-1">
          {skillsData.categories.map((cat) => {
            const count = cat.id === 'all' 
              ? skillsData.items.length 
              : skillsData.items.filter(item => item.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                id={`filter-btn-${cat.id}`}
              >
                <span>{cat.label}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8, marginLeft: '0.35rem' }}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid reveal-on-scroll reveal-delay-2">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card skill-card-interactive">
              <div>
                <div className="skill-card-top">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ color: 'var(--accent-cyan)' }} className="skill-icon-wrap">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
                  <span className={`skill-badge ${getLevelBadgeClass(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
                <p className="skill-desc">{skill.desc}</p>
              </div>

              {/* Category indicator line */}
              <div style={{ marginTop: '1rem', paddingTop: '0.65rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span style={{ textTransform: 'capitalize' }}>
                  {skill.category === 'business' ? 'Business & Analysis' : `${skill.category} skill`}
                </span>
                <CheckCircle2 size={13} style={{ color: 'var(--accent-cyan)' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Disclaimer note */}
        <div 
          className="reveal-on-scroll reveal-delay-3"
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        >
          <span>ℹ️ Skill proficiencies reflect realistic foundational and practical application levels developed through academic projects and internship experience.</span>
        </div>
      </div>
    </section>
  );
}
