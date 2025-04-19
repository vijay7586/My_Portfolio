import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Company 1',
    position: 'Full Stack Developer',
    period: '2022 - Present',
    description: 'Developed and maintained web applications using React and Node.js. Implemented new features and optimized performance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    company: 'Company 2',
    position: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Built responsive user interfaces and implemented modern design patterns. Collaborated with backend developers to integrate APIs.',
    technologies: ['React', 'TypeScript', 'Redux', 'Jest']
  },
  {
    company: 'Company 3',
    position: 'Junior Developer',
    period: '2019 - 2020',
    description: 'Worked on various web projects and learned modern web development practices. Contributed to team projects and code reviews.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery']
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
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
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {experience.position}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{experience.company}</p>
                </div>
                <p className="text-gray-500 mt-2 md:mt-0 dark:text-gray-300">{experience.period}</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm dark:bg-gray-700 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 