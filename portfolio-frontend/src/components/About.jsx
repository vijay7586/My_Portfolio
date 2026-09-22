import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[40vh] flex items-start justify-center pt-8 pb-4 px-8 transition-colors duration-500 bg-gray-100 dark:bg-gray-900 relative"
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
          className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 rounded-2xl animate-pulse" />
          <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-green-300/20 group-hover:border-green-300/40 transition-all duration-300 overflow-hidden">
            <div className="beam-effect" />
            <p className="max-w-[45rem] mx-auto leading-8 text-justify text-gray-700 dark:text-gray-300 relative z-10">
              I am a <b className="italic">Senior AI Full Stack Engineer</b> with <b className="italic">5+ years of experience</b> building scalable enterprise applications across <b className="italic">Generative AI, full-stack development, backend engineering, and cloud</b>. I work with <b className="italic">Python, Java, JavaScript, TypeScript, React.js, React Native, Node.js, Spring Boot, FastAPI, AWS, and Azure</b>. I integrate <b className="italic">LLMs, OpenAI APIs, RAG, embeddings, semantic search, and AI agents</b> into production workflows, and I ship secure APIs, event-driven services, and CI/CD pipelines with Docker, Kubernetes, Terraform, GitHub Actions, and Jenkins. Based in Philadelphia, I currently lead AI-enabled patient-facing web and mobile experiences at Temple University Health System.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 