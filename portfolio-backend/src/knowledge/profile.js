/**
 * Single source of truth for the portfolio assistant.
 * Update this file when experience, skills, projects, or education change.
 * Then push — no API key changes required.
 */

const profile = {
  name: 'Vijaya Durga Reddy Padala',
  positioning: ['Senior Software Engineer II', 'AI Full Stack Engineer'],
  yearsExperience: '5+ years Software Engineering',
  location: 'Philadelphia, PA',
  positioningNote:
    'Do not describe Vijaya only as a healthcare or finance engineer. Healthcare and financial services are domains where he has applied transferable software-engineering skills.',
  targetRoles: [
    'Senior Software Engineer',
    'AI Full Stack Engineer',
    'Full Stack Engineer',
    'Backend Engineer',
    'AI Application Engineer',
  ],
  experience: [
    {
      company: 'Temple University Health System',
      title: 'Senior Software Engineer II',
      period: 'Apr 2026 – Present',
      location: 'Philadelphia, PA',
      highlights: [
        'Leads 2 full-stack engineers',
        'Builds AI-enabled web and mobile applications',
        'React.js and React Native frontends with TypeScript',
        'Node.js and Python / FastAPI backends',
        'AI agents, RAG, embeddings, and semantic retrieval',
        'Epic/MyChart, FHIR, and SMART on FHIR integrations with OAuth',
        'Azure cloud, CMS content integration, and notifications',
        'Architecture reviews, testing, and production readiness',
      ],
      technologies: [
        'React',
        'React Native',
        'TypeScript',
        'Node.js',
        'NestJS',
        'Python',
        'FastAPI',
        'Azure',
        'LLMs',
        'RAG',
        'FHIR',
        'OAuth',
      ],
    },
    {
      company: 'Capital One',
      title: 'Senior Software Engineer',
      period: 'Mar 2025 – Mar 2026',
      location: 'Richmond, VA',
      highlights: [
        'Java / Spring Boot backend services',
        'Online payments and transaction processing',
        'REST APIs and GraphQL',
        'PostgreSQL',
        'Fintech integrations, webhooks, retries, and idempotency',
        'Docker and GitHub Actions',
        'Production troubleshooting and reliability',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'REST',
        'GraphQL',
        'PostgreSQL',
        'Docker',
        'GitHub Actions',
        'Kafka',
      ],
    },
    {
      company: 'Cognizant Technology Solutions',
      title: 'Jr. Software Engineer',
      period: 'Oct 2021 – Aug 2023',
      location: 'Chennai, India',
      highlights: [
        'Banking, insurance, rewards, and transaction applications',
        'Java, Spring Boot, Hibernate, AngularJS, Oracle',
        'Third-party payment and service gateway integrations',
        '25% transaction-history query performance improvement',
      ],
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'AngularJS', 'Oracle', 'OAuth', 'REST'],
    },
    {
      company: 'Cognizant Technology Solutions',
      title: 'Program Analyst',
      period: 'Feb 2021 – Sep 2021',
      location: 'Chennai, India',
      highlights: [
        'Product management platform with catalog and inventory workflows',
        'React.js and Redux UI components',
        'Java / Spring Boot REST APIs',
        'UI optimization, debugging, and production support',
      ],
      technologies: ['React', 'Redux', 'JavaScript', 'Java', 'Spring Boot', 'REST'],
    },
  ],
  education: [
    {
      degree: 'M.S. Computer and Information Science',
      school: 'Sacred Heart University',
      period: 'Sep 2023 – Dec 2024',
      gpa: '3.98/4.0',
      notes: 'Upsilon Pi Epsilon (UPE) Honor Society',
    },
    {
      degree: 'B.Tech Electronics and Communication Engineering',
      school: 'Saveetha School of Engineering',
      period: 'Apr 2017 – May 2021',
      gpa: '7.89/10',
    },
  ],
  research: {
    title: 'Mango Leaf Disease Detection',
    venue: 'IJERT',
    summary:
      'Image classification pipeline using Python, TensorFlow, and NumPy with preprocessing and feature extraction.',
    results: ['92% classification accuracy', 'Published in IJERT'],
    technologies: ['Python', 'TensorFlow', 'NumPy', 'Image classification'],
  },
  skills: {
    frontendMobile: ['React', 'React Native', 'TypeScript', 'JavaScript'],
    backendApis: [
      'Node.js',
      'Express.js',
      'NestJS',
      'Python',
      'FastAPI',
      'Java',
      'Spring Boot',
      'REST APIs',
      'GraphQL',
      'Microservices',
    ],
    ai: ['LLMs', 'AI Agents', 'RAG', 'Embeddings', 'Semantic Search', 'Generative AI'],
    cloudPlatform: ['Azure', 'AWS', 'Docker', 'Terraform', 'CI/CD'],
    dataMessaging: ['PostgreSQL', 'Oracle', 'Neo4j', 'Kafka'],
    enterprise: ['OAuth', 'FHIR', 'SMART on FHIR'],
  },
  projects: [
    {
      title: 'Enterprise AI Knowledge Agent',
      focus: 'GenAI, RAG, secure model access',
      summary:
        'Grounded enterprise Q&A with backend-mediated LLM access, embeddings, retrieval, and auth boundaries.',
    },
    {
      title: 'Distributed Transaction Processing Platform',
      focus: 'Backend reliability',
      summary:
        'High-volume transaction APIs with Java/Spring Boot, PostgreSQL, retries, idempotency, and reconciliation.',
    },
    {
      title: 'Cross-Platform Web & Mobile Engagement Platform',
      focus: 'React, React Native, cloud',
      summary:
        'Shared TypeScript patterns across web/mobile with Node.js/NestJS and Python services, secure APIs, and notifications.',
    },
  ],
  contact: {
    email: 'vijayadurgareddyp@gmail.com',
    phone: '+1-516-421-3089',
    linkedin: 'https://www.linkedin.com/in/vijay-padala-1217121a1',
    github: 'https://github.com/vijay7586',
    resumeNote: 'Visitors can view or download the resume from the portfolio Resume action.',
    contactFormNote: 'Use the Contact section on the portfolio (#contact).',
  },
  knownGaps: [
    'No certifications are listed in the portfolio.',
    'Do not invent certifications, clearances, or unpublished accomplishments.',
  ],
};

function buildProfileContext() {
  return JSON.stringify(profile, null, 2);
}

module.exports = { profile, buildProfileContext };
