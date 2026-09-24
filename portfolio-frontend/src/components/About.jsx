import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import Section from './Section';
import { profile } from '../data/portfolioData';

const SideCard = ({ icon: Icon, title, children }) => (
  <div className="rounded-card border border-line/70 bg-surface/70 p-5 shadow-soft backdrop-blur-sm">
    <div className="mb-3 flex items-center gap-2 border-b border-line/50 pb-3">
      <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
      <h3 className="text-sm font-semibold tracking-wide text-ink">{title}</h3>
    </div>
    {children}
  </div>
);

const About = () => {
  const { experience, education, story, howIWork } = profile.about;

  return (
    <Section id="about" kicker="Background" title="About Me">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-12 xl:gap-16">
        <aside className="space-y-5">
          <SideCard icon={Briefcase} title="Experience">
            <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
              {experience.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">
              Currently: <span className="font-medium text-ink">Senior Software Engineer II</span>
            </p>
          </SideCard>

          <SideCard icon={GraduationCap} title="Education">
            <ul className="space-y-4">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="text-sm font-medium leading-snug text-ink">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                </li>
              ))}
            </ul>
          </SideCard>
        </aside>

        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-ink lg:sr-only">
              My story
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
              {story.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className={index === 0 ? 'text-ink/90' : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="border-t border-line/50 pt-6">
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-ink">How I work</h3>
            <p className="text-base leading-relaxed text-muted sm:text-[1.05rem]">{howIWork}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
