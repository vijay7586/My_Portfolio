import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Section from './Section';
import { profile } from '../data/portfolioData';
import { publicAsset } from '../utils/helpers';

const initialForm = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
  website: '', // honeypot
};

const Contact = ({ onOpenResume }) => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Name is required.';
    if (!formData.email.trim()) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Enter a valid email.';
    if (!formData.subject.trim()) next.subject = 'Subject is required.';
    if (!formData.message.trim()) next.message = 'Message is required.';
    else if (formData.message.trim().length < 10) next.message = 'Please write a bit more detail.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    if (formData.website) return; // bot honeypot
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const apiUrl = process.env.REACT_APP_API_URL || '';
      const payload = JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
      });
      let delivered = false;
      let errorMessage = '';

      if (apiUrl || process.env.NODE_ENV !== 'production') {
        try {
          const response = await fetch(`${apiUrl}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload,
          });
          const data = await response.json();
          if (response.ok) delivered = true;
          else errorMessage = data.error || 'Backend could not send the message.';
        } catch (_err) {
          errorMessage = 'Backend is unavailable.';
        }
      }

      if (!delivered) {
        const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            subject: formData.subject,
            message: formData.message,
            _subject: formData.subject || `Portfolio contact from ${formData.name}`,
          }),
        });
        const formSubmitData = await formSubmitResponse.json();
        if (formSubmitResponse.ok && formSubmitData.success !== 'false') delivered = true;
        else errorMessage = formSubmitData.message || errorMessage || 'Failed to send message.';
      }

      if (delivered) {
        setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
        setFormData(initialForm);
      } else {
        setStatus({
          type: 'error',
          message: errorMessage || `Failed to send. Email me at ${profile.email}.`,
        });
      }
    } catch (_error) {
      setStatus({ type: 'error', message: `Something went wrong. Please email ${profile.email}.` });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    'w-full rounded-xl border border-line bg-elevated/30 px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30';

  return (
    <Section
      id="contact"
      kicker="Let's Connect"
      title="Get In Touch"
      subtitle="I’m open to Senior Software Engineer, Full Stack, Backend, and AI Application Engineering opportunities across industries."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <a href={`mailto:${profile.email}`} className="glass-panel card-interactive flex items-center gap-3 p-4">
            <span className="icon-link !h-10 !w-10 pointer-events-none">
              <Mail className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted">Email</span>
              <span className="text-sm text-ink">{profile.email}</span>
            </span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="glass-panel card-interactive flex items-center gap-3 p-4">
            <span className="icon-link !h-10 !w-10 pointer-events-none">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted">LinkedIn</span>
              <span className="text-sm text-ink">vijay-padala</span>
            </span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="glass-panel card-interactive flex items-center gap-3 p-4">
            <span className="icon-link !h-10 !w-10 pointer-events-none">
              <Github className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted">GitHub</span>
              <span className="text-sm text-ink">vijay7586</span>
            </span>
          </a>
          <button type="button" onClick={onOpenResume} className="btn-secondary w-full">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </button>
        </div>

        <form onSubmit={handleSubmit} className="relative glass-panel space-y-4 p-6 sm:p-8" noValidate>
          <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={handleChange} className={fieldClass} placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={fieldClass} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">Company</label>
              <input id="company" name="company" type="text" autoComplete="organization" value={formData.company} onChange={handleChange} className={fieldClass} placeholder="Optional" />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">Subject</label>
              <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className={fieldClass} placeholder="Opportunity or project" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />
              {errors.subject && <p id="subject-error" className="mt-1 text-xs text-red-400">{errors.subject}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">Message</label>
            <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${fieldClass} resize-y`} placeholder="Tell me about the role or project..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
            {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          {status.message && (
            <div
              role="status"
              className={`rounded-xl px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border border-accent-green/40 bg-accent-green/10 text-accent-green'
                  : 'border border-red-400/40 bg-red-500/10 text-red-300'
              }`}
            >
              {status.message}
            </div>
          )}

          <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <a href={publicAsset(`/${profile.resumeFile}`)} download={profile.resumeDownloadName} className="sr-only">
        Direct resume download
      </a>
    </Section>
  );
};

export default Contact;
