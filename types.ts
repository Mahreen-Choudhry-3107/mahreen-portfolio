
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}
