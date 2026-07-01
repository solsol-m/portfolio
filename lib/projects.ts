export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  AppUrl: string;
  hrefLabel?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Prosperity Project",
    description:
      "A smart personal finance platform for tracking expenses, setting savings goals, and building wealth — built in Arabic with a modern RTL-first UI.",
    image: "/projects/Prosperity.png",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    AppUrl: "https://prosperity-opal.vercel.app/",
    githubUrl: "https://github.com/solsol-m/Prosperity-project",
    featured: true
  },
  {
    title: "Amana Transportation",
    description:
      "A web dashboard for managing bus routes and viewing route status. Includes an interactive map and a clean admin-style UI.",
    image: "/projects/amana-trans.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    AppUrl: "https://amana-transportation-six.vercel.app/",
    githubUrl: "https://github.com/solsol-m/amana-transportation"
  },
  {
    title: "ElectroMall E-commerce",
    description:
      "An E-commerce platform for selling electronic devices. Features an admin dashboard for order and product management.",
    image: "/projects/ElectroMall.png",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    AppUrl: "",
    githubUrl: "https://github.com/solsol-m/ElectroMall"
  },
  {
    title: "Academic Advising System",
    description:
      "A comprehensive system to manage and streamline academic advising operations, bridging communication between students and advisors.",
    image: "/projects/advising.jpg",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    AppUrl: "",
    githubUrl: "https://github.com/solsol-m/academic_advising"
  },
  {
    title: "Modern Login Template",
    description:
      "A beautiful, responsive and modern login UI template with smooth transitions, glassmorphism effects, and a clean aesthetic.",
    image: "/projects/login.png",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    AppUrl: "",
    githubUrl: "https://github.com/solsol-m/Modern-Login-Template"
  },
  {
    title: "Log Guard",
    description:
      "A simple tool that helps analyze server logs and spot suspicious login attempts using a lightweight workflow.",
    image: "/projects/log guard.png",
    tags: ["HTML", "CSS", "Batch File"],
    AppUrl: "https://log-guard-amber.vercel.app/",
    githubUrl: "https://github.com/solsol-m/log-guard"
  },
  {
    title: "PharmaCare",
    description:
      "A static website for a local pharmacy to present services and key information with a responsive layout.",
    image: "/projects/faramacy.png",
    tags: ["HTML", "CSS", "UI/UX"],
    AppUrl: "https://solsol-m.github.io/pharmacare-project/",
    githubUrl: "https://github.com/solsol-m/pharmacare-project"
  },
  {
    title: "Neutralinojs Full-Stack Template",
    description:
      "A starter template for building lightweight desktop apps with web technologies using Neutralinojs.",
    image: "/projects/myapp.png",
    tags: ["React", "TypeScript", "Neutralinojs"],
    AppUrl: "",
    githubUrl: "https://github.com/solsol-m/Neutralinojs-Full-Stack-Starter-Template"
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS to showcase projects, skills, and contact links.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    AppUrl: "https://portfolio-website-three.vercel.app/",
    githubUrl: "https://github.com/solsol-m/portfolio-website"
  }
];
