export interface EngineeringItem {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  video?: string;
  github?: string;
  githubLabel?: string;
  docs?: string;
  live?: string;
  screenshots?: string[];
  caseStudy?: string;
  caseStudyLabel?: string;
  problem: string;
  approach: string;
  engineering: EngineeringItem[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "nubu-store",
    number: "01",
    title: "Nubu-Store",
    subtitle: "Modular E-Commerce Ecosystem",
    category: "E-COMMERCE",
    image: "/images/photo_3_2026-08-26_19-56-17.jpg",
    github: "https://github.com/matthewtsegay/E-commerce",
    live: "https://nebu-store.vercel.app/",
    screenshots: [
      "/images/photo_3_2026-08-26_19-56-17.jpg",
      "/images/photo_4_2026-08-26_19-56-17.jpg",
      "/images/photo_2_2026-08-26_19-56-17.jpg",
      "/images/photo_1_2026-08-26_19-56-17.jpg",
      "/images/photo_5_2026-08-26_19-56-17.jpg",
      "/images/photo_6_2026-08-26_19-56-17.jpg",
    ],
    problem:
      "Modern e-commerce systems can suffer from monolithic bloat, where changing one feature introduces risk across the system. This leads to slower deployments, difficult maintenance, and inefficient background processing.",
    approach:
      "Designed as a future-proof retail platform using a modular monolithic architecture with clear domain separation. The system separates authentication, orders, and payments while using Redis and Celery for asynchronous background processing.",
    engineering: [
      { label: "Backend", value: "Django REST Framework" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Background", value: "Redis + Celery" },
      { label: "Email", value: "SMTP" },
      { label: "Frontend", value: "Next.js + Tailwind CSS" },
      { label: "Deployment", value: "Vercel + Render" },
      { label: "Testing", value: "Pytest / Locust" },
    ],
    highlights: [
      "Modular domain architecture with separated business domains",
      "Redis/Celery asynchronous background processing",
      "Automated testing with Pytest and Locust performance benchmarking",
      "RESTful API with production frontend deployment",
    ],
  },
  {
    slug: "school-management",
    number: "02",
    title: "School Management System",
    subtitle: "Digital School Management & Predictive Education Platform",
    category: "EDTECH / ENTERPRISE SYSTEM",
    image: "/images/school-management.png",
    github: "https://github.com/education-platform-tech/school-management-system",
    githubLabel: "GitHub Repository",
    problem:
      "Many schools still depend on manual and error-prone administrative workflows, resulting in inaccurate attendance records, delayed financial reporting, and limited visibility into student academic performance.",
    approach:
      "Designed as a digital transformation platform connecting administrators, parents, and students. The system combines school management workflows with QR-based attendance, financial management, and AI-driven performance analysis.",
    engineering: [
      { label: "Frontend", value: "React + TypeScript + Vite" },
      { label: "Backend", value: "Django REST Framework" },
      { label: "Payments", value: "Chapa" },
    ],
    highlights: [
      "QR-based attendance tracking system",
      "Role-based access across administrators, parents, and students",
      "AI-driven early performance prediction",
      "Automated financial invoicing with Chapa payment integration",
    ],
  },
  {
    slug: "ai-smart-learning",
    number: "03",
    title: "AI-Supported Smart Teaching",
    subtitle: "Adaptive Learning & Personalized Education Platform",
    category: "AI / EDTECH",
    image: "/images/smart-learning.png",
    github: "https://github.com/AI-supported-smart-way-of-teaching-kids/Backend",
    caseStudy: "https://drive.google.com/file/d/1beMj8sZrjqbTT7uaK7Mg58XIe4P14ag0/view?usp=drive_link",
    caseStudyLabel: "View Documentation",
    problem:
      "Early education is often delivered using one-size-fits-all materials, even though children learn at different speeds and have different learning needs.",
    approach:
      "Designed a role-based educational ecosystem where the system acts as a digital learning assistant. By analyzing child-specific performance data, the platform recommends appropriate learning materials, videos, and assessments.",
    engineering: [
      { label: "Backend", value: "Django REST Framework" },
      { label: "Mobile", value: "Flutter" },
      { label: "Core", value: "Role-Based Access Control" },
      { label: "AI", value: "Recommendation Engine" },
    ],
    highlights: [
      "Fine-grained RBAC with teacher, parent, and child roles",
      "Personalized learning recommendations based on performance data",
      "Performance-based content selection engine",
      "Cross-platform Flutter mobile application",
    ],
  },
  {
    slug: "nourish-ethiopia",
    number: "04",
    title: "AI Nutrition Recommender",
    subtitle: "Computer Vision + RAG for Personalized Nutrition",
    category: "AI / COMPUTER VISION",
    image: "/images/nourish-ethiopia.png",
    github: "https://github.com/matthewtsegay/ai-nutrition-recommendation-for-kids",
    githubLabel: "GitHub Repository",
    caseStudy: "https://drive.google.com/file/d/1K0a-NwreucSyWNqLNZWsR2YH--KVrRP-/view?usp=drive_link",
    caseStudyLabel: "View Documentation",
    problem:
      "Parents can struggle to determine the nutritional value of meals and understand whether a child's diet aligns with their growth and nutritional needs.",
    approach:
      "Designed an AI-powered nutrition platform combining computer vision and Retrieval-Augmented Generation. The system analyzes meal images, extracts nutritional information, and combines it with child-specific growth data to provide personalized guidance.",
    engineering: [
      { label: "Language", value: "Python" },
      { label: "Backend", value: "FastAPI" },
      { label: "AI", value: "Computer Vision" },
      { label: "Knowledge", value: "RAG" },
    ],
    highlights: [
      "Meal image analysis using computer vision",
      "Automated nutritional information extraction",
      "Personalized nutrition recommendations per child",
      "RAG-based educational assistant for parent guidance",
    ],
  },
];
