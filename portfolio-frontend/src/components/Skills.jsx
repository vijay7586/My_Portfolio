import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaAws, FaAngular, FaWindows } from 'react-icons/fa';
import { SiRedux, SiExpress, SiSpringboot, SiMongodb, SiMysql, SiGraphql, SiKubernetes, SiTerraform, SiPostman, SiTailwindcss, SiPostgresql, SiOracle, SiTypescript, SiFirebase, SiFastapi, SiGithubactions, SiOpenai } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';

const skills = [
  {
    category: 'AI / Generative AI',
    items: [
      { name: 'LLMs / GPT', icon: <SiOpenai className="text-gray-800 dark:text-white" /> },
      { name: 'OpenAI APIs', icon: <SiOpenai className="text-emerald-500" /> },
      { name: 'RAG', icon: <FaPython className="text-blue-600" /> },
      { name: 'Embeddings', icon: <FaPython className="text-indigo-500" /> },
      { name: 'AI Agents', icon: <FaReact className="text-purple-500" /> },
      { name: 'TensorFlow', icon: <FaPython className="text-orange-500" /> },
    ]
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: <FaPython className="text-blue-600" /> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'JavaScript', icon: <DiJavascript className="text-yellow-500" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'SQL', icon: <SiMysql className="text-blue-500" /> },
      { name: 'HTML / CSS', icon: <FaHtml5 className="text-orange-500" /> },
    ]
  },
  {
    category: 'Frontend & Mobile',
    items: [
      { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
      { name: 'React Native', icon: <FaReact className="text-cyan-500" /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
      { name: 'Angular', icon: <FaAngular className="text-red-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
    ]
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express / NestJS', icon: <SiExpress className="text-black dark:text-white" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
      { name: 'REST APIs', icon: <SiPostman className="text-orange-500" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> }
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
      { name: 'Azure', icon: <FaWindows className="text-blue-500" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-500" /> },
      { name: 'Terraform', icon: <SiTerraform className="text-purple-500" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="text-gray-800 dark:text-white" /> }
    ]
  },
  {
    category: 'Databases & Tools',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'Azure SQL', icon: <FaWindows className="text-blue-600" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
      { name: 'Oracle', icon: <SiOracle className="text-red-500" /> },
      { name: 'Git / JIRA', icon: <FaGitAlt className="text-orange-500" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[80vh] flex items-center justify-center pt-16 pb-8 px-8 transition-colors duration-500 bg-gray-100 dark:bg-gray-900 relative"
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
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white"
        >
          Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 rounded-xl animate-pulse" />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-gray-400 dark:border-gray-500 group-hover:border-gray-500 dark:group-hover:border-gray-400 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                  {skillCategory.category}
                </h3>
                <div className="grid grid-cols-2 gap-4 flex-grow">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 border-2 border-gray-400 dark:border-gray-500 hover:border-gray-500 dark:hover:border-gray-400"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 