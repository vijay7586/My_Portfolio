import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ isDark, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = useMemo(() => navLinks.map((link) => link.to), []);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled || menuOpen
            ? 'border-b border-line/40 bg-canvas/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
          aria-label="Primary"
        >
          <Link
            to="home"
            smooth={true}
            duration={450}
            offset={-72}
            className="cursor-pointer font-brand text-xl font-bold tracking-tight text-accent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-accent-soft sm:text-2xl"
          >
            VDRP
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <ul className="hidden items-center gap-1 md:flex lg:gap-2">
              {navLinks.map((link) => {
                const isActive = active === link.to;
                return (
                  <li key={link.to} className="relative flex items-center justify-center">
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={450}
                      offset={-72}
                      className={`relative cursor-pointer px-2.5 py-2 text-[13px] tracking-wide transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-accent hover:shadow-lg ${
                        isActive ? 'font-medium text-accent' : 'text-muted'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="transition-all duration-300 ease-in-out hover:-translate-y-1">
              <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            </div>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center text-ink transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-accent md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="border-b border-line/40 bg-canvas/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={450}
                    offset={-72}
                    onClick={closeMenu}
                    className={`block cursor-pointer py-2.5 text-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-accent ${
                      active === link.to ? 'font-medium text-accent' : 'text-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
