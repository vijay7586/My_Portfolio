import React, { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const TIP_KEY = 'ask-about-me-tip-seen';

const AskAboutMeButton = ({ onClick }) => {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(TIP_KEY)) return undefined;
    } catch {
      // ignore
    }
    const timer = window.setTimeout(() => setShowTip(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const dismissTip = () => {
    setShowTip(false);
    try {
      sessionStorage.setItem(TIP_KEY, '1');
    } catch {
      // ignore
    }
  };

  const openAssistant = () => {
    dismissTip();
    onClick?.();
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {showTip && (
        <div
          role="status"
          className="relative max-w-[260px] rounded-2xl border border-line/70 bg-surface/95 px-4 py-3 text-sm text-ink shadow-glow backdrop-blur-md"
        >
          <button
            type="button"
            onClick={dismissTip}
            className="absolute right-2 top-2 rounded-full p-1 text-muted hover:text-ink"
            aria-label="Dismiss tip"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="pr-5 font-semibold text-ink">New: Ask About Me</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            Tap the button below to ask about Vijaya’s experience, skills, projects, or background.
          </p>
          <span
            className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-b border-r border-line/70 bg-surface/95"
            aria-hidden="true"
          />
        </div>
      )}

      <button
        type="button"
        onClick={openAssistant}
        className="inline-flex items-center gap-3 rounded-full border border-line/70 bg-gradient-to-r from-accent to-accent-soft px-6 py-4 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label="Ask About Me"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Ask About Me
      </button>
    </div>
  );
};

export default AskAboutMeButton;
