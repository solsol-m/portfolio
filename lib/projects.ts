export type Project = {
  title: string;
  description: string;
  tags: string[];
  AppUrl: string;
  hrefLabel?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Neutralinojs-Full-Stack-Starter-Template",
    description:
      "This project is designed to help developers quickly start building lightweight desktop applications using web technologies with a clear structure and best practices.",
    tags: ["React", "Next.js", "Tailwind", "Typescript","Node.js","Neutralinojs","Desktop App"],
    AppUrl: "",
    githubUrl: "https://github.com/solsol-m/Neutralinojs-Full-Stack-Starter-Template",
  },
  {
    title: "Amana Transportation",
    description:
      "This is a simple prototype that leverages artificial intelligence to transform it into a fully functional application. It is a web application that allows users to track their shipments and get real-time updates on the status of their shipments.",
    tags: ["React", "Next.js", "Tailwind", "Typescript","UI/UX","JavaScript","Css"],
    AppUrl: "https://amana-transportation-six.vercel.app/",
    githubUrl: "https://github.com/solsol-m/amana-transportation",
  },
  {
    title: "pharmacareproject",
    description:
      "This project is a static front-end website designed for a local pharmacy called Al-Rasheed Pharmacy",
    tags: ["HTML", "CSS", "UI/UX"],
    AppUrl: "https://solsol-m.github.io/pharmacare-project/",
    githubUrl: "https://github.com/solsol-m/pharmacare-project",
  },
  
  {
    title: " Log Guard - Server Log Analysis Tool",
    description:
      "A simple web application for analyzing server logs and detecting suspicious login attempts.",
    tags: ["Html", "Css", "Batch File"],
    AppUrl: "https://log-guard-amber.vercel.app/",
    githubUrl: "https://github.com/solsol-m/log-guard",
  },
  {
    title: "Portfolio Website",
    description:
      "A simple portfolio website for showcasing my projects and skills.",
    tags: ["React", "Next.js", "Tailwind", "Typescript","UI/UX"],
    AppUrl: "https://portfolio-website-three.vercel.app/",
    githubUrl: "https://github.com/solsol-m/portfolio-website",
  },
  
];

