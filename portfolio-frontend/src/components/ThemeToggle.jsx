import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className="inline-flex h-9 w-9 items-center justify-center text-muted transition-colors duration-200 hover:text-ink"
    aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    title={isDark ? 'Light mode' : 'Dark mode'}
  >
    {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
  </button>
);

export default ThemeToggle;
