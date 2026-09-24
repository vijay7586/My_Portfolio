import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Monitor } from 'lucide-react';
import Section from './Section';
import { experiences } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

const icons = {
  temple: Code2,
  'capital-one': Briefcase,
  'sacred-heart': GraduationCap,
  'cognizant-jr': Monitor,
  'cognizant-pa': Briefcase,
  saveetha: GraduationCap,
};

const Experience = () => {
  const reduced = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const glowTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Section
      id="experience"
      kicker="Professional Journey"
      title="Work Experience & Education"
      subtitle="Roles and education along one timeline."
    >
      <div ref={timelineRef} className="relative mx-auto max-w-5xl">
        {/* Center timeline — desktop */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 md:block"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent via-accent-soft to-accent-pink" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent via-accent-soft to-accent-pink opacity-50 blur-sm" />
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="timeline-flow absolute inset-x-0 h-1/3 rounded-full" />
          </div>
          {!reduced && (
            <motion.div
              className="absolute left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2"
              style={{ top: glowTop }}
            >
              <span className="absolute inset-0 rounded-full bg-accent/40 blur-md" />
              <span className="absolute inset-2 rounded-full bg-gradient-to-b from-white via-accent to-accent-soft shadow-glow" />
            </motion.div>
          )}
        </div>

        {/* Left timeline — mobile */}
        <div
          className="pointer-events-none absolute left-[19px] top-2 bottom-2 w-0.5 md:hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent via-accent-soft to-accent-pink" />
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="timeline-flow absolute inset-x-0 h-1/3 rounded-full" />
          </div>
        </div>

        <div className="space-y-10 md:space-y-14">
          {experiences.map((item, index) => {
            const Icon = icons[item.id] || Briefcase;
            const isLeft = index % 2 === 0;
            const isWork = item.type === 'work';

            return (
              <motion.div
                key={item.id}
                initial={reduced ? false : { opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative flex flex-col md:items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                  <article className="glass-panel card-interactive p-5 sm:p-6">
                    <div className="mb-3">
                      <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-muted">{item.company}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
                        {item.period}
                        {item.location ? ` · ${item.location}` : ''}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                    {item.technologies?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              isWork
                                ? 'bg-accent/10 text-accent'
                                : 'bg-accent-soft/15 text-accent-soft'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </div>

                <div className="absolute left-[8px] top-6 z-10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface shadow-soft md:h-14 md:w-14 ${
                      isWork ? 'text-accent' : 'text-accent-soft'
                    }`}
                  >
                    <Icon className="h-5 w-5 md:h-7 md:w-7" aria-hidden="true" />
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" aria-hidden="true" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
