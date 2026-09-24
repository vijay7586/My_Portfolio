import React, { useMemo } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const STAR_COUNT = 56;

const TwinkleBackground = () => {
  const reduced = useReducedMotion();

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        size: (i % 3) + 1,
        left: ((i * 47) % 97) + 1.5,
        top: ((i * 31) % 97) + 1.5,
        delay: ((i * 0.37) % 3).toFixed(2),
        duration: 2.4 + (i % 5) * 0.45,
        baseOpacity: 0.2 + (i % 5) * 0.08,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className={`twinkle-dot absolute rounded-full bg-black dark:bg-white ${
            reduced ? '' : 'animate-twinkle'
          }`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.baseOpacity,
            animationDelay: reduced ? undefined : `${star.delay}s`,
            animationDuration: reduced ? undefined : `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default TwinkleBackground;
