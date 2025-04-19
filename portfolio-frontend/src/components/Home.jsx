import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Home = () => {
  const professions = [
    "Full Stack Developer",
    "Software Engineer",
    "AI Web Developer"
  ];
  const [currentProfession, setCurrentProfession] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession((prev) => (prev + 1) % professions.length);
    }, 3000); // Changed to 6 seconds to match animation duration

    return () => clearInterval(interval);
  }, [professions.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Light_theme_background.jpg"
          alt="Light theme background"
          className="w-full h-full object-cover transition-all duration-500 dark:opacity-0 opacity-50"
        />
        <img
          src="/images/Dark_theme_background.jpg"
          alt="Dark theme background"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 dark:opacity-50 opacity-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[50rem] text-center px-4">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 rounded-full blur-xl animate-pulse shadow-[0_0_20px_rgba(168,85,247,0.5)] dark:shadow-[0_0_20px_rgba(236,72,153,0.5)]" />
              <img
                src="/images/vijay-profile.jpg"
                alt="Profile portrait"
                className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover border-[0.35rem] border-gradient-to-r from-gray-400 to-blue-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] dark:shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-10"
              />
            </motion.div>
          </div>
        </div>

        <motion.h1
          className="mb-4 mt-8 text-4xl font-bold !leading-[1.5] sm:text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Vijaya Durga Reddy Padala
        </motion.h1>

        <div className="h-16 flex items-center justify-center">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                className="text-2xl md:text-3xl font-sans font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-500 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span>I am a</span>
                <div className="ml-2 h-8 overflow-hidden relative">
                  <motion.span
                    className="scrolling-text text-2xl md:text-3xl font-sans font-medium bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    key={currentProfession}
                  >
                    {professions[currentProfession]}
                  </motion.span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2 justify-center items-center mt-2 mb-16"
        >
          <div className="flex gap-2 flex-col sm:flex-row text-lg font-medium">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-sky-400 to-sky-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:from-sky-500 hover:to-sky-600 active:scale-95 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact me
              <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="group bg-gradient-to-r from-sky-400 to-sky-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:from-sky-500 hover:to-sky-600 active:scale-95 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              My Resume
              <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
            </a>
          </div>
          <div className="flex gap-2 text-lg font-medium">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sky-400 to-sky-500 text-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] hover:from-sky-500 hover:to-sky-600 active:scale-95 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              aria-label="Linkedin"
              title="Linkedin"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sky-400 to-sky-500 text-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] hover:from-sky-500 hover:to-sky-600 active:scale-95 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithubSquare />
            </a>
          </div>
        </motion.div>

        {/* Mouse Scroll Indicator */}
        <motion.div
          className="absolute bottom-[2%] left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="w-6 h-10 border-2 border-gray-700 dark:border-gray-300 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-1 bg-gray-700 dark:bg-gray-300 rounded-full"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 