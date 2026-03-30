export type Project = {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: {
    metric: string;
    value: string;
  }[];
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
    impact: [
      { metric: "Active Users", value: "500+" },
      { metric: "Support Tickets Reduced", value: "40%" },
      { metric: "Load Time", value: "2.3s (97 PageSpeed)" },
      { metric: "Uptime", value: "99.9%" }
    ],
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
    impact: [
      { metric: "Logs Analyzed", value: "50K+" },
      { metric: "Threat Detection", value: "95%" },
      { metric: "Time Saved Daily", value: "2 hours/admin" }
    ],
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
    impact: [
      { metric: "Page Speed", value: "98+" },
      { metric: "Mobile Score", value: "100" },
      { metric: "SEO Ranking", value: "Page 1" }
    ],
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
    impact: [
      { metric: "Setup Time", value: "5 minutes" },
      { metric: "Bundle Size", value: "<50MB" },
      { metric: "Cross Platform", value: "Windows/Mac/Linux" }
    ],
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
    impact: [
      { metric: "Page Speed", value: "95+" },
      { metric: "Lighthouse Score", value: "98" },
      { metric: "Mobile Responsive", value: "100%" }
    ],
    image: "/projects/portfolio.png",
    tags: ["React", "Next.js", "Tailwind", "Typescript", "UI/UX", "Framer Motion"],
    AppUrl: "https://portfolio-website-three.vercel.app/",
    githubUrl: "https://github.com/solsol-m/portfolio-website"
  }
];

