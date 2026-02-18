
import React from 'react';
import { SKILLS } from '../constants';
import Reveal from './Reveal';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-white/[0.01]">
      <div className="container mx-auto">
        <Reveal className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-white"></div>
        </Reveal>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {SKILLS.map((category, idx) => (
            <Reveal key={idx} delay={idx * 150} className="w-full">
              <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.05] transition-all duration-500 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-8 md:mb-10 text-white tracking-tight">
                  {category.title}
                </h3>
                
                <div className="space-y-6 md:space-y-8 flex-grow">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-white/70 group-hover:text-white transition-colors">{skill.name}</span>
                        <span className="text-white/30">{skill.level}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white/40 group-hover:bg-white transition-all duration-1000 ease-in-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
