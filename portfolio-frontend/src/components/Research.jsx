import React from 'react';
import Section from './Section';
import { research } from '../data/portfolioData';

const Research = () => (
  <Section
    id="research"
    kicker="Publication"
    title="Research"
    subtitle="Applied machine-learning work beyond product engineering."
  >
    <article className="glass-panel card-interactive max-w-3xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">{research.title}</h3>
          <p className="mt-1 text-sm text-accent">{research.type}</p>
        </div>
        <span className="rounded-full border border-accent-green/40 bg-accent-green/10 px-3 py-1 text-xs font-semibold text-accent-green">
          {research.result}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{research.summary}</p>
      <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm text-muted">
        {research.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2">
        {research.technologies.map((tech) => (
          <li key={tech} className="pill">
            {tech}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm font-medium text-ink">{research.publication}</p>
    </article>
  </Section>
);

export default Research;
