import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  GitBranch,
  PenTool,
  Server,
  Type,
  LayoutPanelTop,
} from "lucide-react";

export type Skill = {
  name: string;
  description?: string;
  icon: LucideIcon;
};

export const skills: Skill[] = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Server },
  { name: "TypeScript", icon: Type },
  { name: "Node.js", icon: GitBranch },
  { name: "MongoDB", icon: Database },
  { name: "Figma", icon: PenTool },
  { name: "Git", icon: GitBranch },
  { name: "UI Systems", icon: LayoutPanelTop },
];

