import React from 'react';
import { learningJourneyData } from '../data/portfolioData';
import { Sparkles, Headphones, FileCheck, GitBranch, Network, Wrench } from 'lucide-react';

export default function LearningJourney() {
  const iconMap = {
    Headphones: <Headphones size={22} />,
    FileCheck: <FileCheck size={22} />,
    GitBranch: <GitBranch size={22} />,
    Network: <Network size={22} />,
    Wrench: <Wrench size={22} />
  };

  return (
    <section className="section" id="learning">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Continuous Development</span>
          </div>
          <h2 className="section-title">Technical Learning Journey</h2>
          <p className="section-subtitle">
            Ongoing practical exploration, industry learning, and technical upskilling in IT operations, governance standards, and systems troubleshooting.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="learning-grid">
          {learningJourneyData.map((item, idx) => (
            <div key={item.id} className={`learning-card reveal-on-scroll reveal-delay-${(idx % 3) + 1} learning-card-interactive`}>
              <div className="learning-header">
                <div className="learning-icon learning-icon-bounce">
                  {iconMap[item.icon] || <Wrench size={22} />}
                </div>
                <div>
                  <div className="learning-tag">{item.tag}</div>
                  <h3 className="learning-title">{item.title}</h3>
                </div>
              </div>

              <p className="learning-desc">{item.description}</p>

              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                  Topics & Focus Areas:
                </div>
                <ul className="learning-topics-list">
                  {item.topics.map((topic, tIdx) => (
                    <li key={tIdx}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
