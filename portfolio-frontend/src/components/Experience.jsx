import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CodeBracketIcon, 
  ComputerDesktopIcon,
  BookOpenIcon 
} from '@heroicons/react/24/outline';

const experiences = [
  {
    type: 'education',
    company: 'Sacred Heart University',
    position: 'Masters of Computer and Information Science',
    period: 'Aug 2023 - Dec 2024',
    description: 'Pursuing advanced studies in Computer Science with focus on modern software development and emerging technologies.',
    technologies: ['Advanced Programming', 'Data Structures', 'Machine Learning', 'Cloud Computing'],
    icon: AcademicCapIcon
  },
  {
    type: 'work',
    company: 'Cognizant',
    position: 'Full Stack Developer',
    period: 'Sep 2021 - Aug 2023',
    description: 'Developed and maintained enterprise-level applications using modern web technologies. Led team initiatives and implemented best practices.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
    icon: CodeBracketIcon
  },
  {
    type: 'work',
    company: 'Cognizant',
    position: 'Java Developer Intern',
    period: 'Dec 2020 - Sep 2021',
    description: 'Worked on Java-based enterprise applications, implemented REST APIs, and contributed to backend development.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Git'],
    icon: ComputerDesktopIcon
  },
  {
    type: 'work',
    company: 'Smart Technology',
    position: 'Software Developer Intern',
    period: 'Jan 2020 - Nov 2020',
    description: 'Developed software solutions and participated in the full software development lifecycle.',
    technologies: ['Python', 'Django', 'JavaScript', 'HTML/CSS', 'MySQL'],
    icon: BriefcaseIcon
  },
  {
    type: 'education',
    company: 'Saveeth School of Engineering',
    position: 'Bachelor of Technology in Electronics and Communication Engineering',
    period: 'Aug 2017 - May 2021',
    description: 'Completed undergraduate studies with focus on electronics, communication systems, and embedded programming.',
    technologies: ['Embedded Systems', 'Digital Electronics', 'Communication Systems', 'C/C++'],
    icon: BookOpenIcon
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center p-8 transition-colors duration-500 bg-gray-100 dark:bg-gray-900 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:20px_20px] dark:bg-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        >
          Work Experience & Education
        </motion.h2>
        <div className="relative">
          {/* Vertical line with beam effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full blur-sm opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full blur-md opacity-30" />
          </div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 rounded-xl animate-pulse" />
                      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-gray-400 dark:border-gray-500 group-hover:border-gray-500 dark:group-hover:border-gray-400">
                        <div className="flex flex-col">
                          <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                              {experience.position}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">{experience.company}</p>
                            <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">{experience.period}</p>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 rounded-full text-sm ${
                                  experience.type === 'work'
                                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                    : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Icon on timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                      experience.type === 'work' 
                        ? 'bg-blue-100 dark:bg-blue-900' 
                        : 'bg-purple-100 dark:bg-purple-900'
                    }`}>
                      <Icon className={`w-7 h-7 ${
                        experience.type === 'work' 
                          ? 'text-blue-600 dark:text-blue-300' 
                          : 'text-purple-600 dark:text-purple-300'
                      }`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 