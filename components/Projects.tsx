
import React from 'react';
import { PROJECTS } from '../constants';
import Reveal from './Reveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="container mx-auto">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-white"></div>
          </div>
          <p className="text-white/40 max-w-sm text-lg font-light">
            A showcase of practical, user-focused web projects
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 200} className="w-full">
              <div className="group relative glass-card rounded-3xl overflow-hidden aspect-video border border-white/5 bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
                    
                    <p className="text-xs md:text-sm text-white/50 mb-4 leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[9px] uppercase font-bold tracking-widest px-2 py-1 bg-white/10 rounded-full border border-white/5 backdrop-blur-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    

                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-xs font-bold border-b border-white hover:border-transparent transition-all pb-1 group/btn"
                    >
                      Case Study
                      <svg className="w-3 h-3 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
