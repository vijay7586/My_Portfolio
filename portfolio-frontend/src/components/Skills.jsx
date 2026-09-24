import React from 'react';
import Section from './Section';
import { skillGroups } from '../data/portfolioData';

const Skills = () => (
  <Section
    id="skills"
    kicker="Technical Expertise"
    title="Skills"
    subtitle="Grouped by how I use them in production"
  >
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <article key={group.category} className="glass-panel card-interactive p-5">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {group.category}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item} className="pill !text-ink">
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
);

export default Skills;
