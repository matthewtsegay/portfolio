export const personalInfo = {
  name: "MATYOS TSEGAY KASSA",
  firstName: "Matyos",
  lastName: "Tsegay Kassa",
  title: "Software Engineer | Backend & Mobile Developer",
  roles: ["Software Engineer", "Backend & Mobile Developer"],
  organization: "Mekelle University",
  location: "Mekelle, Ethiopia",
  profileImage: "/profile.png",
  email: "matyostsegay@gmail.com", // Placeholder, user should update
  github: "https://github.com/matthewtsegay",
  linkedin: "https://linkedin.com/in/matyos-tsegay",
  summary: "Building scalable systems and AI-powered solutions focused on solving real-world community problems.",
  about: "Final-year Software Engineering student at Mekelle University, specializing in backend systems and scalable architecture. Passionate about solving community problems through technology with a vision of building impactful technology companies focused on societal improvement.",
  philosophy: "I believe in engineering discipline, structured problem solving, and building systems that are not just functional, but scalable and maintainable. My approach combines backend rigor with a human-centric focus on community impact.",
  terminalData: {
    specialization: "Backend & Scalable Systems",
    location: "Mekelle, Ethiopia",
    interest: ["AI", "Software Architecture", "Distributed Systems"],
    philosophy: "Discipline, consistency, and community impact."
  }
};

export const coreStrengths = [
  {
    title: "Backend System Design",
    description: "Designing robust and scalable server-side architectures using modern patterns.",
    icon: "Server",
  },
  {
    title: "REST API Development",
    description: "Building high-performance, secure, and well-documented APIs for web and mobile.",
    icon: "Code2",
  },
  {
    title: "Software Architecture",
    description: "Thinking in systems, ensuring maintainability, scalability, and technical excellence.",
    icon: "Component",
  },
  {
    title: "Scalable Databases",
    description: "Optimizing data storage and retrieval with PostgreSQL, MySQL, and NoSQL solutions.",
    icon: "Database",
  },
  {
    title: "Leadership",
    description: "Coordinating teams and managing projects with a structured, disciplined approach.",
    icon: "Users",
  },
];

export const techStack = {
  languages: ["Python", "Dart", "JavaScript", "Go"],
  frontend: ["Flutter", "React.js", "HTML", "CSS", "Next.js"],
  backend: ["Django", "Django REST Framework", "FastAPI", "Node.js"],
  databases: ["PostgreSQL", "MySQL", "Firebase"],
  tools: ["Git", "GitHub", "Docker", "Postman", "Redis", "Celery", "Render", "Vercel"],
};

export const projects = [
  {
    slug: "smart-learning-platform",
    title: "AI-Based Smart Learning Platform",
    description: "AI-powered educational mobile platform for personalized child learning experiences.",
    stack: ["Flutter", "Django", "PostgreSQL", "DRF"],
    features: [
      "AI-assisted learning paths",
      "Robust authentication system",
      "Scalable backend architecture",
      "Personalized recommendation system",
    ],
    problem: "Traditional learning methods often fail to adapt to a child's unique pace and interests, leading to disengagement.",
    solution: "Developed a platform that uses AI to analyze learning patterns and provide personalized content recommendations.",
    architecture: "A Flutter mobile app communicating via REST APIs to a Django backend, with a PostgreSQL database and AI model integration for content matching.",
    challenges: "Synchronizing offline learning data and optimizing AI response times on mobile devices.",
    deployment: "Backend deployed on Render, Frontend via mobile app stores.",
    github: "https://github.com/matthewtsegay",
    demo: "https://demo.example.com",
    image: "/projects/smart-learning.png",
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    description: "Scalable school management platform with AI workflows and payment integration.",
    stack: ["Django", "FastAPI", "PostgreSQL", "Go"],
    features: [
      "Role-based authentication (RBAC)",
      "Integrated payment services",
      "Automated backend workflows",
      "Administrative dashboard",
    ],
    problem: "Inefficient manual school administration and fragmented data management.",
    solution: "A centralized, scalable platform that automates administrative tasks and integrates payment systems.",
    architecture: "Microservices-ready architecture using Django for administration and FastAPI/Go for high-performance modules.",
    challenges: "Handling complex role-based permissions and ensuring data consistency across modules.",
    deployment: "Deployed on dedicated cloud infrastructure using Docker containers.",
    github: "https://github.com/matyos/school-mgmt",
    demo: "https://demo.example.com",
    image: "/projects/school-mgmt.png",
  },
  {
    slug: "nutrition-recommender",
    title: "AI Nutrition Recommender",
    description: "AI-assisted nutrition recommendation and educational platform.",
    stack: ["React.js", "Django", "PostgreSQL"],
    features: [
      "Nutrition recommendation logic",
      "Comprehensive CRUD systems",
      "Secure authentication",
      "Responsive UI/UX",
    ],
    problem: "Difficulty in accessing personalized nutritional advice and tracking dietary needs.",
    solution: "An AI-driven platform that provides tailored nutrition plans based on user health profiles.",
    architecture: "React.js frontend for interactive UI, Django backend for recommendation logic and user management.",
    challenges: "Implementing complex recommendation algorithms and handling sensitive health data.",
    deployment: "Frontend on Vercel, Backend on Render.",
    github: "https://github.com/matyos/nutrition-ai",
    demo: "https://demo.example.com",
    image: "/projects/nutrition.png",
  },
  {
    slug: "e-commerce-platform",
    title: "Scalable E-Commerce Platform",
    description: "Full-stack scalable e-commerce platform with backend API integration.",
    stack: ["React.js", "Django", "PostgreSQL", "Next.js", "Redis", "Celery"],
    features: [
      "Advanced authentication",
      "Product & inventory management",
      "Async task processing (Celery)",
      "Caching with Redis",
    ],
    problem: "Scaling issues in traditional e-commerce platforms during peak traffic.",
    solution: "Built with a focus on performance using caching and asynchronous task processing.",
    architecture: "Next.js frontend with a Django REST API backend, using Redis for caching and Celery for background tasks.",
    challenges: "Implementing real-time inventory updates and optimizing database queries for large product catalogs.",
    deployment: "Fully containerized deployment with CI/CD pipelines.",
    github: "https://github.com/matthewtsegay/E-commerce",
    demo: "https://demo.example.com",
    image: "/projects/ecommerce.png",
  },
];

export const experience = [
  {
    company: "MEDCO Technology Solution",
    role: "Frontend Developer Intern",
    period: "2023 - 2024",
    responsibilities: [
      "Frontend implementation of core features",
      "UI development and debugging",
      "Collaboration on workflow optimization",
    ],
    achievements: [
      "Developed a comprehensive blog website",
      "Integrated Google Forms with spreadsheet automation",
    ],
    tech: ["Vue.js", "JavaScript", "HTML/CSS"],
  },
  {
    company: "E-Commerce Platform Team",
    role: "Backend Developer",
    period: "2024 - Present",
    responsibilities: [
      "Designing scalable backend systems",
      "API development and security",
      "Authentication systems and deployment workflows",
    ],
    tech: ["Django REST Framework", "PostgreSQL", "Redis", "Celery", "Next.js"],
  },
];

export const education = {
  school: "Mekelle University",
  degree: "BSc in Software Engineering",
  cgpa: "3.7",
  status: "Final-year Student",
  coursework: [
    "Software Architecture",
    "Database Systems",
    "Data Structures & Algorithms",
    "AI & Machine Learning",
    "Requirement Engineering",
    "Software Quality Assurance",
  ],
};

export const certifications = [
  {
    title: "Cursor Hackathon Certificate",
    issuer: "Cursor",
    year: "2025",
    image: "/certificates/cursor-hackathon.png",
  },
  {
    title: "Mobile & Computer Maintenance Training",
    issuer: "Mekelle University",
    year: "2023",
    image: "/certificates/maintenance-training.svg",
  },
  {
    title: "Ethiopian AI & Cybersecurity Conference",
    issuer: "EAC",
    year: "2024",
    image: "/certificates/ai-cybersecurity.svg",
  },
];

export const volunteer = [
  {
    organization: "Action for the Needy in Ethiopia (UNHCR)",
    role: "Social Worker & Volunteer",
    period: "2022 - 2023",
    responsibilities: [
      "IDP camp coordination and support",
      "Structured reporting on community needs",
      "Humanitarian coordination",
      "Vulnerable community support",
    ],
  },
  {
    organization: "Mekelle University",
    role: "Final-year Project Lead",
    period: "2024",
    responsibilities: [
      "Leading the backend team for capstone project",
      "Coordinating sprints and technical reviews",
    ],
  },
];
