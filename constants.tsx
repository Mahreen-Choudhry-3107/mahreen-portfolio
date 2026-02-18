
import React from 'react';
import { Project, SkillCategory, ExperienceItem } from './types';
import project1 from "./assets/project1.jpeg";
import project2 from "./assets/project2.jpeg";
import project3 from "./assets/project3.jpeg";


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Blood Donation System",
    description: "A digital platform that streamlines blood donor registration, requests, and availability tracking to support life-saving connections.",
    image: project1,
    technologies: ["React", "TypeScript", "D3.js", "Tailwind"],
    link: "https://www.linkedin.com/in/mahreen-choudhry-71aab237a/?skipRedirect=true"
  },
  {
    id: 2,
    title: "Diet Plan Generator",
    description: "A smart application that creates customized diet plans based on user goals, preferences, and nutritional needs.",
    image: project2,
    technologies: ["React.js", "Node.js", "MongoDb", "Framer Motion"],
    link: "https://www.linkedin.com/in/mahreen-choudhry-71aab237a/?skipRedirect=true"
  },
  {
    id: 3,
    title: "Hospital Management",
    description: "A centralized system for managing patients, appointments, and medical records to improve hospital workflow",
    image: project3,
    technologies: ["Reactjs", "Node.js", "Express"],
    link: "https://www.linkedin.com/in/mahreen-choudhry-71aab237a/?skipRedirect=true"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "React / Next.js", level: 85 }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python / Django", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 75 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "AWS Cloud", level: 70 }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "U Devs",
    role: "Full Stack Developer",
    period: "2025 - Present",
    description: [
      "Developed and maintained full-stack web applications using React, Node.js, and databases, focusing on scalable and maintainable architecture.",
      "Collaborated with designers and backend developers to implement end-to-end features, ensuring functionality, performance, and usability.",
      "Improved frontend performance and responsiveness through code optimization and best practices, enhancing overall user experience."
    ]
  },
  {
    company: "Code Alpha",
    role: "MERN Stack Developer",
    period: "2025-2026",
    description: [
      "Built and maintained scalable MERN stack applications, integrating MongoDB, Express.js, React, and Node.js for efficient end-to-end solutions.",
      "Developed dynamic, high-performance user interfaces using React, ensuring seamless interaction and optimal user experience.",
      "Implemented responsive and secure backend architectures, RESTful APIs, and database integrations following modern JavaScript best practices."
    ]
  },
  // {
  //   company: "Innovate Labs",
  //   role: "Software Developer",
  //   period: "2016 - 2018",
  //   description: [
  //     "Built robust backend APIs and integrated third-party services.",
  //     "Managed database migrations and ensured data integrity across high-traffic platforms.",
  //     "Collaborated with product managers to define technical roadmaps."
  //   ]
  // }
];
