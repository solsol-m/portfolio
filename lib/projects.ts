export type Project = {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  image: string;
  tags: string[];
  AppUrl: string;
  hrefLabel?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Amana Transportation",
    tagline: "Real-time shipment tracking platform powered by AI",
    problem: "Customers had zero visibility into their shipments. Manual updates led to lost packages and frustrated clients.",
    solution: "Next.js full-stack application with real-time MongoDB integration, AI-powered delivery predictions, and mobile-responsive dashboard.",
    image: "/projects/amana-trans.png",
    tags: ["React", "Next.js", "Tailwind", "Typescript", "Node.js", "MongoDB", "AI"],
    AppUrl: "https://amana-transportation-six.vercel.app/",
    githubUrl: "https://github.com/solsol-m/amana-transportation",
    featured: true
  },
  {
    title: "Log Guard",
    tagline: "Server Log Analysis Tool",
    problem: "Server logs overwhelm sysadmins. Manual analysis means missing critical security threats.",
    solution: "Batch automation system with visual log parser. Detects patterns and anomalies in seconds instead of hours.",
    image: "/projects/log guard.png",
    tags: ["HTML", "CSS", "Batch File", "Security"],
    AppUrl: "https://log-guard-amber.vercel.app/",
    githubUrl: "https://github.com/solsol-m/log-guard"
  },
  {
    title: "PharmaCare",
    tagline: "Local Pharmacy Digital Presence",
    problem: "Local pharmacy struggled with online visibility and customer engagement in the digital age.",
    solution: "Modern static website with responsive design, service showcase, and integrated contact system.",
    image: "/projects/faramacy.png",
    tags: ["HTML", "CSS", "UI/UX", "SEO"],
    AppUrl: "https://solsol-m.github.io/pharmacare-project/",
    githubUrl: "https://github.com/solsol-m/pharmacare-project"
  },
  {
    title: "Neutralinojs Full-Stack Template",
    tagline: "Lightweight Desktop App Starter",
    problem: "Developers struggle with complex desktop app setups and want web technologies for cross-platform apps.",
    solution: "Comprehensive starter template with clear structure, best practices, and rapid development workflow.",
    image: "/projects/myapp.png",
    tags: ["React", "Next.js", "Tailwind", "Typescript", "Node.js", "Neutralinojs", "Desktop App"],
    AppUrl: "",
    githubUrl: "https://github.com/solsol-m/Neutralinojs-Full-Stack-Starter-Template"
  },
  {
    title: "Portfolio Website",
    tagline: "Personal Developer Portfolio",
    problem: "Need a professional online presence that showcases skills and attracts recruiters/clients.",
    solution: "Next.js portfolio with glassmorphism design, smooth animations, and optimized performance.",
    image: "/projects/portfolio.png",
    tags: ["React", "Next.js", "Tailwind", "Typescript", "UI/UX", "Framer Motion"],
    AppUrl: "https://portfolio-website-three.vercel.app/",
    githubUrl: "https://github.com/solsol-m/portfolio-website"
  }
];

