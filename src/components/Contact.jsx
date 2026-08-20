import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Send, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    // Compose mailto link so user's client opens directly with prefilled parameters
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setSubmittedStatus('success');
    setTimeout(() => setSubmittedStatus(null), 6000);
  };

  return (
    <section className="section" id="contact" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I am actively open to discussions regarding IT Support, Business Analysis, and digital technology engineering opportunities in Jakarta or remote.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left: Contact Channels & Direct Links */}
          <div className="contact-info-card reveal-on-scroll reveal-delay-1">
            <div className="glass-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Reach Out Directly
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Feel free to email me, connect on LinkedIn, or review my repositories on GitHub. I aim to respond promptly to professional inquiries.
              </p>

              <div className="contact-channels">
                {/* Email Item */}
                <div className="contact-channel-item channel-item-interactive">
                  <div className="channel-left">
                    <div className="channel-icon">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="channel-title">Email Address</div>
                      <div className="channel-value">{personalInfo.email}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn btn-secondary btn-sm btn-interactive"
                    style={{ padding: '0.4rem 0.75rem' }}
                    title="Copy email to clipboard"
                    id="btn-copy-email"
                  >
                    {copied ? <Check size={14} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={14} />}
                    <span style={{ fontSize: '0.78rem' }}>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item channel-item-interactive"
                  id="contact-linkedin-link"
                >
                  <div className="channel-left">
                    <div className="channel-icon" style={{ color: 'var(--accent-indigo)', background: 'rgba(129, 140, 248, 0.1)' }}>
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <div className="channel-title">LinkedIn Profile</div>
                      <div className="channel-value">linkedin.com/in/dimasars</div>
                    </div>
                  </div>
                  <ExternalLink size={16} className="icon-arrow-tilt" style={{ color: 'var(--text-muted)' }} />
                </a>

                {/* GitHub Item */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item channel-item-interactive"
                  id="contact-github-link"
                >
                  <div className="channel-left">
                    <div className="channel-icon">
                      <GithubIcon size={18} />
                    </div>
                    <div>
                      <div className="channel-title">GitHub Repositories</div>
                      <div className="channel-value">github.com/Dimasars79</div>
                    </div>
                  </div>
                  <ExternalLink size={16} className="icon-arrow-tilt" style={{ color: 'var(--text-muted)' }} />
                </a>

                {/* Location Item */}
                <div className="contact-channel-item channel-item-interactive">
                  <div className="channel-left">
                    <div className="channel-icon" style={{ color: 'var(--accent-emerald)', background: 'rgba(52, 211, 153, 0.1)' }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="channel-title">Location</div>
                      <div className="channel-value">{personalInfo.location}</div>
                    </div>
                  </div>
                  <span className="tag tag-success pill-interactive" style={{ fontSize: '0.72rem' }}>Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Composer Form */}
          <div className="glass-card reveal-on-scroll reveal-delay-2">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={18} style={{ color: 'var(--accent-cyan)' }} />
              <span>Send a Message</span>
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Fill in your message details below to quickly open an email draft directly to Dimas.
            </p>

            <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
              <div className="form-row-2col">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins (Recruiter)"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@company.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Opportunity Discussion: IT Support / Business Analyst"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Dimas, we came across your portfolio and would like to discuss an opportunity..."
                  className="form-textarea"
                ></textarea>
              </div>

              {submittedStatus === 'success' && (
                <div style={{ padding: '0.75rem 1rem', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid var(--accent-emerald)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-emerald)', fontSize: '0.85rem' }}>
                  ✓ Opening your default email client with your message drafted to {personalInfo.email}.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-interactive"
                id="btn-submit-contact"
                style={{ width: '100%' }}
              >
                <Send size={16} className="btn-icon-send" />
                <span>Compose Email to Dimas</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
