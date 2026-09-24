import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Section = ({
  id,
  kicker,
  title,
  subtitle,
  children,
  className = '',
}) => {
  const reduced = useReducedMotion();

  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <motion.div
        className="section-shell"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {(kicker || title || subtitle) && (
          <header className="mb-10 max-w-3xl">
            {kicker && <p className="section-kicker">{kicker}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
