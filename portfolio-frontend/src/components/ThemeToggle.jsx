import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-5 right-5 bg-white dark:bg-gray-950 w-[4rem] h-[4rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-8 h-8 text-yellow-500" />
      ) : (
        <Moon className="w-8 h-8 text-gray-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 