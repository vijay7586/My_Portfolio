import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { achievements } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Achievements = () => {
  const reduced = useReducedMotion();

  return (
    <Section
      id="achievements"
      kicker="Recognition"
      title="Achievements"
      subtitle="Defensible outcomes from leadership, optimization, research, and production delivery."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, index) => (
          <motion.article
            key={item.label}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="glass-panel card-interactive p-5 text-center sm:text-left"
          >
            <p className="font-display text-3xl font-semibold text-accent sm:text-4xl">{item.value}</p>
            <h3 className="mt-3 text-sm font-semibold text-ink">{item.label}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
