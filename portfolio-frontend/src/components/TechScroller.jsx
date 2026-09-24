import React from 'react';
import { techStrip } from '../data/portfolioData';

const TechScroller = () => {
  const items = [...techStrip, ...techStrip];

  return (
    <div className="relative border-y border-line/50 bg-surface/40 py-3.5 backdrop-blur" aria-label="Core capabilities">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-canvas to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-canvas to-transparent sm:w-16" />
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-8 hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-8 whitespace-nowrap text-sm font-medium text-muted"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechScroller;
