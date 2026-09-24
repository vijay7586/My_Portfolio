import React, { Suspense, lazy, useState } from 'react';
import Navbar from './components/Navigation';
import Hero from './components/Hero';
import TechScroller from './components/TechScroller';
import TwinkleBackground from './components/TwinkleBackground';
import { useTheme } from './hooks/useTheme';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Research = lazy(() => import('./components/Research'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

const SectionFallback = () => (
  <div className="section-shell" aria-hidden="true">
    <div className="h-36 animate-pulse rounded-card border border-line/50 bg-surface/50" />
  </div>
);

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-canvas text-ink transition-colors duration-300">
      <TwinkleBackground />
      <div className="relative z-10">
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
        <main>
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <TechScroller />
          <Suspense fallback={<SectionFallback />}>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Research />
            <Contact onOpenResume={() => setResumeOpen(true)} />
            <Footer />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
