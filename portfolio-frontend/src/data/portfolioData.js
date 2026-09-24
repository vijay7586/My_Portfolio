export const profile = {
  name: 'Vijaya Durga Reddy Padala',
  primaryTitle: 'Senior Software Engineer II',
  secondaryTitle: 'AI Full Stack Engineer',
  mainStatement:
    'Building scalable AI-enabled, full-stack, backend, mobile, and cloud-native applications for complex enterprise systems.',
  secondaryStatement:
    'Experienced across distributed systems, API platforms, AI-powered workflows, web/mobile development, and cloud architecture.',
  location: 'Philadelphia, PA',
  email: 'vijayadurgareddyp@gmail.com',
  phone: '+1-516-421-3089',
  github: 'https://github.com/vijay7586',
  linkedin: 'https://www.linkedin.com/in/vijay-padala-1217121a1',
  resumeFile: 'Vijaya_Resume.pdf',
  resumeDownloadName: 'Vijaya_Durga_Reddy_Padala_Resume.pdf',
  about: {
    experience: [
      '5+ years Software Engineering',
      '4+ years Full-Stack / Backend Development',
      '2+ years AI-Enabled Application Development',
    ],
    education: [
      {
        degree: 'M.S. Computer and Information Science',
        school: 'Sacred Heart University',
      },
      {
        degree: 'B.Tech. Electronics and Communication Engineering',
        school: 'Saveetha School of Engineering',
      },
    ],
    story: [
      'I got into software through early full-stack and support work, where I often had to fix whatever was broken that day. That curiosity pulled me toward how frontend, backend, APIs, databases, and cloud actually fit together in real products—not just as separate boxes on a diagram.',
      'From there I worked on banking and insurance applications, then payment and transaction systems, healthcare platforms, and later AI-enabled web and mobile apps. Over time I cared less about staying in one layer of the stack and more about solving the whole problem. Today I’m a Senior Software Engineer II and AI Full Stack Engineer, and I still like moving across AI, frontend, backend, mobile, distributed systems, APIs, and cloud when that’s what the work needs.',
    ],
    howIWork:
      'I enjoy breaking complex problems into practical pieces a team can ship. I like helping teammates get unblocked, talking through architecture, debugging tricky paths, and making systems a little easier to maintain. Clear communication matters to me, and I’m happy to learn a new area when a project asks for it.',
  },
  highlights: [
    '5+ years experience',
    'Senior Software Engineer II',
    'AI + Full Stack',
    'Web + Mobile + Backend',
    'Cloud + Distributed Systems',
  ],
};

export const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Research', to: 'research' },
  { name: 'Contact', to: 'contact' },
];

export const techStrip = [
  'AI-Enabled Full Stack Engineering',
  'React & React Native',
  'Python & Node.js',
  'Java & Spring Boot',
  'LLM Agents & RAG',
  'REST & GraphQL APIs',
  'Distributed Systems',
  'Cloud-Native Architecture',
  'Azure & AWS',
  'Event-Driven Systems',
  'Technical Leadership',
];

export const skillGroups = [
  {
    category: 'AI Application Engineering',
    items: ['LLMs', 'AI Agents', 'RAG', 'Embeddings', 'Semantic Search', 'Prompt Engineering'],
  },
  {
    category: 'Full Stack & Mobile',
    items: ['React', 'React Native', 'TypeScript', 'Node.js', 'Python'],
  },
  {
    category: 'Backend & Distributed Systems',
    items: ['Java', 'Spring Boot', 'FastAPI', 'REST', 'GraphQL', 'Kafka', 'Microservices'],
  },
  {
    category: 'Cloud & Platform',
    items: ['Azure', 'AWS', 'Docker', 'Terraform', 'CI/CD'],
  },
  {
    category: 'Data & Integration',
    items: ['PostgreSQL', 'Oracle', 'Neo4j', 'OAuth', 'Webhooks', 'Third-Party APIs'],
  },
  {
    category: 'Testing',
    items: ['Jest', 'JUnit', 'Cypress', 'Playwright', 'Selenium'],
  },
];

export const achievements = [
  {
    value: '2',
    label: 'Full Stack Engineers Led',
    detail: 'Technical leadership across AI-enabled web and mobile delivery.',
  },
  {
    value: '25%',
    label: 'Query Performance Improvement',
    detail: 'Optimized Oracle/Hibernate transaction-history queries.',
  },
  {
    value: '92%',
    label: 'ML Research Accuracy',
    detail: 'Published machine-learning research for mango leaf disease classification.',
  },
  {
    value: 'Multi',
    label: 'Enterprise Domains',
    detail: 'Built and supported production applications across multiple industries.',
  },
];

export const experiences = [
  {
    id: 'temple',
    type: 'work',
    company: 'Temple University Health System',
    title: 'Senior Software Engineer II',
    period: 'Apr 2026 – Present',
    location: 'Philadelphia, PA',
    description:
      'Lead AI-enabled full-stack applications with React, TypeScript, React Native, Node.js, and Python/FastAPI. Integrate LLM agents, RAG, and secure cloud workflows on Azure.',
    achievements: [
      'Lead 2 full-stack engineers building AI-enabled web/mobile applications.',
      'Develop React/React Native frontends with Node.js and Python/FastAPI backend services.',
      'Integrate AI-agent, RAG, semantic retrieval, Epic/FHIR, CMS, and Azure services.',
      'Drive architecture, code reviews, sprint planning, testing, and production readiness.',
    ],
    technologies: [
      'React',
      'React Native',
      'TypeScript',
      'Node.js',
      'Python',
      'FastAPI',
      'Azure',
      'LLMs',
      'RAG',
      'FHIR',
    ],
    details:
      'Cross-platform delivery with secure integrations and cloud-native deployment patterns. Domain integrations are examples of applied engineering, not a single-industry identity.',
  },
  {
    id: 'capital-one',
    type: 'work',
    company: 'Capital One',
    title: 'Senior Software Engineer',
    period: 'Mar 2025 – Mar 2026',
    location: 'Richmond, VA',
    description:
      'Built backend microservices for online payments and financial workflows using Java, Spring Boot, REST/GraphQL, and PostgreSQL. Designed resilient third-party integrations with retries and idempotency.',
    achievements: [
      'Built Java/Spring Boot services supporting payments and transaction workflows.',
      'Integrated fintech providers and communication services using REST APIs and webhooks.',
      'Improved PostgreSQL performance and built resilient retry/idempotency patterns.',
      'Supported CI/CD, Docker deployments, production debugging, and system reliability.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'REST',
      'GraphQL',
      'Docker',
      'GitHub Actions',
    ],
    details:
      'Focused on reliable APIs, integration resilience, and operational readiness for high-volume transaction systems.',
  },
  {
    id: 'sacred-heart',
    type: 'education',
    company: 'Sacred Heart University',
    title: 'M.S. in Computer and Information Science',
    period: 'Sep 2023 – Dec 2024',
    location: 'Fairfield, CT',
    description:
      'Completed graduate studies with a 3.98/4.0 CGPA and induction into the Upsilon Pi Epsilon (UPE) Honor Society.',
    achievements: [],
    technologies: ['Computer Science', 'UPE Honor Society', '3.98 GPA'],
    details: '',
  },
  {
    id: 'cognizant-jr',
    type: 'work',
    company: 'Cognizant Technology Solutions',
    title: 'Jr. Software Engineer',
    period: 'Oct 2021 – Aug 2023',
    location: 'Chennai, India',
    description:
      'Delivered banking and insurance features with Java, Spring Boot, Hibernate, AngularJS, REST APIs, and Oracle. Improved transaction-history retrieval time by 25%.',
    achievements: [
      'Worked on banking and insurance applications.',
      'Built Java/Spring Boot REST APIs and AngularJS interfaces.',
      'Integrated third-party payment/service gateways.',
      'Improved transaction-history query performance by 25%.',
    ],
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'AngularJS', 'Oracle', 'OAuth'],
    details:
      'Delivered features and production support across UI, APIs, and database layers on enterprise applications.',
  },
  {
    id: 'cognizant-pa',
    type: 'work',
    company: 'Cognizant Technology Solutions',
    title: 'Program Analyst',
    period: 'Feb 2021 – Sep 2021',
    location: 'Chennai, India',
    description:
      'Supported a product management platform covering catalogs, inventory, and website content. Built reusable React components connected to Java/Spring Boot REST APIs.',
    achievements: [
      'Supported a product management platform.',
      'Worked on catalog and inventory workflows.',
      'Built React components and integrated Java/Spring Boot APIs.',
      'Participated in debugging, testing, support, and code reviews.',
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'Java', 'Spring Boot', 'REST APIs'],
    details:
      'Built full-stack fundamentals on catalog/inventory workflows while collaborating with senior engineers.',
  },
  {
    id: 'saveetha',
    type: 'education',
    company: 'Saveetha School of Engineering',
    title: 'B.Tech in Electronics and Communication Engineering',
    period: 'Apr 2017 – May 2021',
    location: 'Chennai, India',
    description:
      'Completed undergraduate studies with a 7.89/10 CGPA, with a foundation in electronics, communication systems, and programming.',
    achievements: [],
    technologies: ['Electronics', 'Communication Systems', '7.89 CGPA'],
    details: '',
  },
];

export const projects = [
  {
    id: 'ai-knowledge-agent',
    title: 'Enterprise AI Knowledge Agent',
    subtitle: 'GenAI · RAG · Secure Model Access',
    tags: ['RAG', 'Embeddings', 'AI Agents', 'FastAPI', 'React', 'Auth'],
    overview: {
      problem:
        'Teams needed grounded answers over enterprise knowledge without exposing sensitive data through unmanaged model access paths.',
      value:
        'Delivered agent-assisted workflows with backend-mediated LLM access, retrieval, and structured responses.',
    },
    architecture: {
      summary:
        'Clients call secured APIs. Orchestration services retrieve embeddings, compose prompts, and mediate model calls behind auth boundaries.',
      components: [
        'React clients',
        'FastAPI orchestration',
        'Embedding + vector retrieval',
        'LLM gateway',
        'Auth and evaluation hooks',
      ],
      dataFlow:
        'Query → auth → semantic retrieval → prompt orchestration → model response → client UI.',
    },
    engineering: {
      decisions: [
        'Kept model credentials server-side for auditability.',
        'Used RAG with embeddings and semantic search for grounded answers.',
        'Added evaluation hooks for retrieval quality and response structure.',
      ],
      security: ['Authenticated APIs', 'Backend-mediated secrets', 'Least-privilege services'],
      scalability: ['Stateless orchestrators', 'Independent vector index scaling'],
      reliability: ['Timeouts/retries', 'Clear retrieval-miss fallbacks', 'Request logging'],
    },
    results: [
      'Enabled AI-assisted workflows over curated knowledge with secure model mediation.',
      'Established reusable RAG and agent patterns for later product surfaces.',
    ],
    links: { live: '', github: '', caseStudy: '#projects' },
    privateNote: 'Sanitized representation of production AI patterns; proprietary details omitted.',
  },
  {
    id: 'transaction-platform',
    title: 'Distributed Transaction Processing Platform',
    subtitle: 'Backend · Event-Driven · Reliability',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Webhooks'],
    overview: {
      problem:
        'High-volume transaction workflows needed resilient APIs that stay consistent across internal services and external providers.',
      value:
        'Supported initiation, status processing, and reconciliation with retries, idempotency, and observability.',
    },
    architecture: {
      summary:
        'Spring Boot services expose APIs over PostgreSQL, with Kafka/webhook-driven async status and reconciliation paths.',
      components: [
        'Java / Spring Boot services',
        'REST / GraphQL APIs',
        'PostgreSQL',
        'Kafka / webhook workers',
        'Observability stack',
      ],
      dataFlow:
        'Request → validation → persistence → provider integration → async status → reconciliation.',
    },
    engineering: {
      decisions: [
        'Designed idempotent, retry-aware integration flows.',
        'Optimized schemas and indexes for transactional workloads.',
        'Added structured logging for production triage.',
      ],
      security: ['Payload validation', 'Service authentication'],
      scalability: ['Containerized services', 'Async processing'],
      reliability: ['Retries + idempotency', 'Reconciliation jobs', 'Dead-letter style reprocessing'],
    },
    results: [
      'Improved reliability of transaction and third-party integration workflows.',
      'Strengthened operational readiness with Dockerized CI/CD and clearer failure handling.',
    ],
    links: { live: '', github: '', caseStudy: '#projects' },
    privateNote: 'Generalized from professional distributed-systems work; provider specifics omitted.',
  },
  {
    id: 'engagement-platform',
    title: 'Cross-Platform Web & Mobile Engagement Platform',
    subtitle: 'React · React Native · Cloud',
    tags: ['React', 'React Native', 'Node.js', 'Python', 'Notifications', 'Cloud'],
    overview: {
      problem:
        'Users needed coherent web and mobile experiences with secure APIs, content delivery, and engagement notifications.',
      value:
        'Shipped shared TypeScript patterns across React and React Native with cloud-hosted services and AI-assisted workflows.',
    },
    architecture: {
      summary:
        'Web/mobile clients talk to Node.js and Python services, with secure API integration, content APIs, and push notification channels.',
      components: [
        'React web',
        'React Native mobile',
        'Node.js / NestJS APIs',
        'Python services',
        'Cloud hosting + notifications',
      ],
      dataFlow:
        'Client action → auth → protected APIs → enterprise/content services → optional push notifications.',
    },
    engineering: {
      decisions: [
        'Reused components and API contracts across web and mobile.',
        'Secured access with modern OAuth/OIDC patterns.',
        'Automated testing across clients and APIs.',
      ],
      security: ['Token validation', 'Protected APIs', 'Secret management'],
      scalability: ['Cloud-native services', 'CI/CD release pipelines'],
      reliability: ['Automated test coverage', 'Monitoring and alerting'],
    },
    results: [
      'Delivered cross-platform engagement experiences with secure integrations.',
      'Established reusable mobile/web delivery patterns for subsequent features.',
    ],
    links: { live: '', github: '', caseStudy: '#projects' },
    privateNote: 'Sanitized product patterns from professional cross-platform delivery.',
  },
];

export const publicProjects = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'This site: a senior-oriented React portfolio with case studies, achievements, and contact workflows.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'GitHub Pages'],
    github: 'https://github.com/vijay7586/My_Portfolio',
    live: 'https://vijay7586.github.io/My_Portfolio/',
  },
  {
    id: 'tictactoe',
    title: 'TicTacToe App',
    description: 'A React TicTacToe app with multiplayer-oriented UX patterns.',
    technologies: ['React', 'JavaScript'],
    github: 'https://github.com/vijay7586/TicTacToeApp',
    live: '',
  },
];

export const research = {
  title: 'Mango Leaf Disease Detection',
  type: 'Machine Learning Research · IJERT',
  summary:
    'Built a classification pipeline with Python, TensorFlow, and NumPy using image preprocessing and feature extraction.',
  bullets: [
    'Achieved 92% classification accuracy on mango leaf disease detection.',
    'Published the research in IJERT.',
  ],
  technologies: ['Python', 'TensorFlow', 'NumPy', 'Image Preprocessing', 'Feature Extraction', 'Classification'],
  result: '92% accuracy',
  publication: 'Published in IJERT',
};
