import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Mango Leaf Disease Detection',
    description: 'Machine learning research project using Python, NumPy, TensorFlow, image preprocessing, feature extraction, and classification. Achieved 92% accuracy and published the work in IJERT.',
    technologies: ['Python', 'TensorFlow', 'NumPy', 'Machine Learning'],
    image: 'linear-gradient(135deg, #166534, #65a30d)',
    githubLink: 'https://github.com/vijay7586',
    liveLink: ''
  },
  {
    title: 'Bug Tracking System',
    description: 'Full-stack bug tracking application with React.js and Spring Boot. Built frontend workflows and backend REST services, and improved dashboard latency by 20% through optimization and caching.',
    technologies: ['React.js', 'Spring Boot', 'REST APIs'],
    image: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
    githubLink: 'https://github.com/vijay7586',
    liveLink: ''
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
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group h-full min-h-[28rem]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 rounded-xl animate-pulse" />
              <div className="relative h-full min-h-[28rem] flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-gray-400 dark:border-gray-500 group-hover:border-gray-500 dark:group-hover:border-gray-400">
                <div
                  role="img"
                  aria-label={project.title}
                  className="w-full h-40 shrink-0 rounded-lg flex items-end p-4 text-white font-semibold bg-cover bg-center mb-4"
                  style={{ backgroundImage: project.image }}
                >
                  <span className="line-clamp-2">{project.title}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4 min-h-[6rem]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem] content-start">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto pt-2 min-h-[1.75rem]">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
