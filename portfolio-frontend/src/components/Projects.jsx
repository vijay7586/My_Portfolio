import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, BookOpen } from 'lucide-react';
import Section from './Section';
import { projects, publicProjects } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'results', label: 'Results' },
];

const ProjectCard = ({ project }) => {
  const [tab, setTab] = useState('overview');
  const reduced = useReducedMotion();

  return (
    <article className="glass-panel card-interactive flex h-full flex-col overflow-hidden">
      <div className="border-b border-line/60 bg-gradient-to-br from-accent/12 via-accent-soft/8 to-transparent p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{project.subtitle}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{project.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1 border-b border-line/50 p-2" role="tablist" aria-label={`${project.title} sections`}>
        {TABS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors duration-200 ${
              tab === item.id ? 'bg-accent/15 text-accent' : 'text-muted hover:bg-elevated/40 hover:text-ink'
            }`}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex flex-1 flex-col p-6" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="flex-1 text-sm leading-relaxed text-muted"
          >
            {tab === 'overview' && (
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink">Overview</p>
                  <p>{project.overview.problem}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink">Value</p>
                  <p>{project.overview.value}</p>
                </div>
              </div>
            )}
            {tab === 'architecture' && (
              <div className="space-y-4">
                <p>{project.architecture.summary}</p>
                <p>
                  <span className="font-semibold text-ink">Data flow: </span>
                  {project.architecture.dataFlow}
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.architecture.components.map((c) => (
                    <li key={c} className="rounded-lg border border-line/60 bg-elevated/30 px-3 py-2 text-xs text-ink">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tab === 'engineering' && (
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink">Engineering decisions</p>
                <ul className="list-disc space-y-2 pl-4">
                  {project.engineering.decisions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ['Security', project.engineering.security],
                    ['Scalability', project.engineering.scalability],
                    ['Reliability', project.engineering.reliability],
                  ].map(([label, items]) => (
                    <div key={label} className="rounded-lg border border-line/60 bg-elevated/20 p-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink">{label}</p>
                      <ul className="space-y-1 text-xs">
                        {items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab === 'results' && (
              <ul className="list-disc space-y-2 pl-4">
                {project.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>

        <p className="mt-5 text-xs italic text-muted/80">{project.privateNote}</p>

        <div className="mt-5 flex flex-wrap gap-3 border-t border-line/50 pt-5">
          {project.links.live ? (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2 text-xs">
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <span className="pill">Private / enterprise system</span>
          )}
          {project.links.github ? (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2 text-xs">
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
          <a href={project.links.caseStudy} className="btn-secondary !px-4 !py-2 text-xs">
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            Case Study
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => (
  <Section
    id="projects"
    kicker="Selected Works"
    title="Featured Projects"
    subtitle="Three senior-level case studies focused on architecture and outcomes—kept separate from professional experience."
  >
    <div className="grid gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>

    <div className="mt-12">
      <h3 className="font-display text-xl font-semibold text-ink">Public repositories</h3>
      <p className="mt-2 text-sm text-muted">Only real public links are shown.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {publicProjects.map((item) => (
          <article key={item.id} className="glass-panel card-interactive flex h-full flex-col p-5">
            <h4 className="font-display text-lg font-semibold text-ink">{item.title}</h4>
            <p className="mt-2 flex-1 text-sm text-muted">{item.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <li key={tech} className="pill">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2 text-xs">
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  GitHub
                </a>
              )}
              {item.live && (
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2 text-xs">
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </Section>
);

export default Projects;
