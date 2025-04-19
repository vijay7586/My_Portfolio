import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-gray-900/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-900/80 dark:border-black/40"
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.to}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                className={`flex w-full items-center justify-center px-3 py-3 hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:text-white dark:hover:text-blue-400 ${
                  activeSection === link.to ? 'text-blue-400 font-medium dark:text-blue-400' : ''
                }`}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActiveSection(link.to)}
              >
                {link.name}

                {activeSection === link.to && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="bg-gray-900/20 rounded-full absolute inset-0 -z-10 dark:bg-gray-900/20"
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Theme Toggle Button */}
      <motion.button
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed right-5 top-4 p-2 rounded-full text-white hover:text-blue-400 hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg sm:right-8 sm:top-7"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.button>

      {/* Mobile menu button */}
      <motion.button
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed right-5 top-4 p-2 rounded-md text-white hover:text-blue-400 hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[4.5rem] left-0 w-full bg-gray-900 dark:bg-gray-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(link.to);
                  }}
                  className={`block px-3 py-2 text-white hover:text-blue-400 text-base font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
                    activeSection === link.to ? 'text-blue-400' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar; 