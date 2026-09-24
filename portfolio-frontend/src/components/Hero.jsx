import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { publicAsset } from '../utils/helpers';
import { useReducedMotion } from '../hooks/useReducedMotion';

const heroLines = [
  'Senior AI Full Stack Engineer with 5+ years of experience.',
  'Building scalable AI, full-stack, backend, and cloud applications.',
  'Working with React, Python, Java, Node.js, LLMs, AWS, and Azure.',
];

const Hero = ({ onOpenResume }) => {
  const reduced = useReducedMotion();
  const fade = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="home"
      className="relative flex min-h-[min(92vh,920px)] scroll-mt-24 items-center overflow-hidden pt-20 sm:pt-24"
    >
      <div className="section-shell w-full !py-10 sm:!py-14">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-16">
          <div className="max-w-2xl">
            <motion.h1
              {...fade(0)}
              className="font-brand text-[2.35rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[3.25rem] lg:text-[4rem]"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              {...fade(0.1)}
              className="mt-6 max-w-xl space-y-2 text-base leading-relaxed text-muted sm:text-lg"
            >
              {heroLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </motion.div>

            <motion.div {...fade(0.18)} className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="contact"
                smooth={true}
                duration={450}
                offset={-72}
                className="btn-primary cursor-pointer !rounded-xl !px-5 !py-2.5"
              >
                Get in Touch
              </Link>
              <button
                type="button"
                onClick={onOpenResume}
                className="btn-secondary !rounded-xl !px-5 !py-2.5"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Resume
              </button>
            </motion.div>
          </div>

          <motion.div
            {...fade(0.08)}
            className="mx-auto w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
          >
            <div className="relative mx-auto aspect-square w-full">
              <div
                className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-accent/40 via-accent-soft/40 to-accent-pink/40 blur-xl"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent via-accent-soft to-accent-pink opacity-60 blur-md"
                aria-hidden="true"
              />
              <div className="relative z-10 overflow-hidden rounded-full border-[0.35rem] border-white/70 bg-surface shadow-[0_0_20px_rgb(var(--color-accent-soft)/0.35)] dark:border-elevated">
                <img
                  src={publicAsset('/images/vijay-profile.jpg')}
                  alt={`${profile.name} professional portrait`}
                  width={320}
                  height={320}
                  className="h-full w-full object-cover object-[center_12%]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
