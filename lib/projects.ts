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
    title: "Amana Transportation",
    description:
      "A web dashboard for managing bus routes and viewing route status. Includes an interactive map and a clean admin-style UI.",
    image: "/projects/amana-trans.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    AppUrl: "https://amana-transportation-six.vercel.app/",
    githubUrl: "https://github.com/solsol-m/amana-transportation",
    featured: true
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
      "A personal portfolio website built with Next.js and Tailwind CSS to showcase projects and contact links.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    AppUrl: "https://portfolio-website-three.vercel.app/",
    githubUrl: "https://github.com/solsol-m/portfolio-website"
  }
];

