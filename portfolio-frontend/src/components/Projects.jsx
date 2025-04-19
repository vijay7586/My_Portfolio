import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'A full-stack web application built with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'A mobile-responsive website with modern design',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'An e-commerce platform with payment integration',
    technologies: ['Next.js', 'Stripe', 'MongoDB'],
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center p-8 transition-colors duration-500 bg-gray-100 dark:bg-gray-900 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:20px_20px] dark:bg-none" />
      <div className="absolute inset-0 dark:block hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="twinkle-dot"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: `${Math.random() * 0.5 + 0.2}`,
            }}
          />
        ))}
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-500">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 