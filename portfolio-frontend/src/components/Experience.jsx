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
    type: 'work',
    company: 'Temple University Health System',
    position: 'Senior Software Engineer II',
    period: 'Apr 2026 – Present · Philadelphia, PA',
    description: 'Lead AI-enabled full-stack applications with React, TypeScript, React Native, Node.js, NestJS, and Python/FastAPI. Integrate LLM agents, RAG, and Epic/MyChart FHIR workflows with OAuth 2.0 and SMART on FHIR, and ship on Azure with Terraform and CI/CD.',
    technologies: ['React', 'React Native', 'TypeScript', 'FastAPI', 'Azure', 'RAG'],
    icon: CodeBracketIcon
  },
  {
    type: 'work',
    company: 'Capital One',
    position: 'Senior Software Engineer',
    period: 'Mar 2025 – Mar 2026 · Richmond, VA',
    description: 'Built backend microservices for online payments and financial workflows using Java, Spring Boot, REST/GraphQL, and PostgreSQL. Designed resilient third-party integrations with retries and idempotency, and containerized services with Docker and GitHub Actions.',
    technologies: ['Java', 'Spring Boot', 'GraphQL', 'PostgreSQL', 'Docker'],
    icon: BriefcaseIcon
  },
  {
    type: 'education',
    company: 'Sacred Heart University',
    position: 'M.S. in Computer and Information Science',
    period: 'Sep 2023 – Dec 2024 · Fairfield, CT',
    description: 'Completed graduate studies with a 3.98/4.0 CGPA and induction into the Upsilon Pi Epsilon (UPE) Honor Society.',
    technologies: ['Computer Science', 'UPE Honor Society', '3.98 GPA'],
    icon: AcademicCapIcon
  },
  {
    type: 'work',
    company: 'Cognizant Technology Solutions',
    position: 'Jr. Software Engineer',
    period: 'Oct 2021 – Aug 2023 · Chennai, India',
    description: 'Delivered banking and insurance features with Java, Spring Boot, Hibernate, AngularJS, REST APIs, and Oracle. Integrated payment gateways, secured access with Spring Security and OAuth, and reduced transaction-history retrieval time by 25%.',
    technologies: ['Java', 'Spring Boot', 'AngularJS', 'Oracle', 'OAuth'],
    icon: ComputerDesktopIcon
  },
  {
    type: 'work',
    company: 'Cognizant Technology Solutions',
    position: 'Program Analyst',
    period: 'Feb 2021 – Sep 2021 · Chennai, India',
    description: 'Supported a product management platform covering catalogs, inventory, and website content. Built reusable React and Redux components and connected UI screens to Java/Spring Boot REST APIs.',
    technologies: ['React.js', 'Redux', 'Spring Boot', 'REST APIs'],
    icon: BriefcaseIcon
  },
  {
    type: 'education',
    company: 'Saveetha School of Engineering',
    position: 'B.Tech in Electronics and Communication',
    period: 'Apr 2017 – May 2021 · Chennai, India',
    description: 'Completed undergraduate studies with a 7.89/10 CGPA, with a foundation in electronics, communication systems, and programming.',
    technologies: ['Electronics', 'Communication Systems', '7.89 CGPA'],
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full blur-sm opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full blur-md opacity-30" />
          </div>

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
