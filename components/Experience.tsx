
import React from 'react';
import { EXPERIENCE } from '../constants';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-white/[0.01]">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">History</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </Reveal>

        <div className="space-y-16">
          {EXPERIENCE.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150} className="w-full">
              <div className="grid md:grid-cols-[200px_1fr] gap-12 group">
                <div className="text-white/30 text-sm font-bold pt-2 md:text-right uppercase tracking-[0.2em]">
                  {item.period}
                </div>
                
                <div className="relative pb-10 border-l border-white/10 pl-10 md:pl-12 group-hover:border-white/30 transition-colors">
                  {/* Timeline Pulse Dot */}
                  <div className="absolute top-2.5 -left-[5px] w-2.5 h-2.5 rounded-full bg-white group-hover:scale-150 transition-transform"></div>
                  
                  <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-white transition-colors">{item.role}</h3>
                  <p className="text-white/60 mb-8 font-medium italic">{item.company}</p>
                  
                  <ul className="space-y-5">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-white/40 text-base leading-relaxed flex gap-4 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
