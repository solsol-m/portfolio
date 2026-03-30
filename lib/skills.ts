export type Skill = {
  name: string;
  rating: number; // 1-5 stars
  description: string;
  projects: string[];
  category: 'frontend' | 'backend' | 'design';
};

export const skills: Skill[] = [
  // Frontend Technologies
  {
    name: "React",
    rating: 5,
    description: "Production apps. Used in 8+ projects. Building component systems at scale.",
    projects: ["Amana", "Log Guard", "Portfolio"],
    category: "frontend"
  },
  {
    name: "Next.js",
    rating: 5,
    description: "App Router specialist. Used in Amana, Log Guard, this portfolio.",
    projects: ["Amana", "Portfolio", "PharmaCare"],
    category: "frontend"
  },
  {
    name: "TypeScript",
    rating: 5,
    description: "Type-safe. Reduces bugs ~40%. Every new project = TypeScript.",
    projects: ["Amana", "Portfolio", "Neutralino Template"],
    category: "frontend"
  },
  {
    name: "Framer Motion",
    rating: 4,
    description: "Motion expert. Micro-interactions, scroll-triggered animations.",
    projects: ["Portfolio", "Amana"],
    category: "frontend"
  },

  // Backend & Databases
  {
    name: "Node.js",
    rating: 4,
    description: "REST APIs, middleware. Amana backend.",
    projects: ["Amana", "Neutralino Template"],
    category: "backend"
  },
  {
    name: "MongoDB",
    rating: 4,
    description: "Schema design, optimization. Real-time data handling.",
    projects: ["Amana"],
    category: "backend"
  },

  // Design & Tools
  {
    name: "Figma",
    rating: 4,
    description: "Design systems, prototyping. UI/UX planning.",
    projects: ["Amana", "PharmaCare", "Portfolio"],
    category: "design"
  },
  {
    name: "UI/UX",
    rating: 5,
    description: "Glassmorphism, motion design, accessibility. User-first approach.",
    projects: ["All Projects"],
    category: "design"
  }
];

export const skillCategories = {
  frontend: {
    name: "FRONTEND TECHNOLOGIES",
    color: "blue",
    borderColor: "border-blue-500/50"
  },
  backend: {
    name: "BACKEND & DATABASES", 
    color: "green",
    borderColor: "border-green-500/50"
  },
  design: {
    name: "DESIGN & TOOLS",
    color: "purple", 
    borderColor: "border-purple-500/50"
  }
} as const;

