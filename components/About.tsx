
import React from 'react';
import Reveal from './Reveal';
import image from "../assets/about.jpeg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Reveal className="relative group">
            <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden glass-card p-3 transform rotate-1 group-hover:rotate-0 transition-transform duration-1000">
              <img
                src={image}
                alt="Mahreen Choudhry Professional Portrait"
                className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 glass-card rounded-2xl -z-10 opacity-50"></div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={200}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About Me <br /><span className="text-white/40"></span></h2>
            </Reveal>

            <Reveal delay={400} className="space-y-6">
              <p className="text-white/60 text-lg leading-relaxed font-light">
                I am Mahreen Choudhry, a BS Computer Science student at Virtual University of Pakistan with a keen interest in software and web development. I enjoy creating efficient, user-friendly applications and continuously improving my technical skills.
              </p>

              <p className="text-white/60 text-lg leading-relaxed font-light">
                I have experience working with C++, C#, Python, HTML, CSS, JavaScript, React, Node.js, and .NET, and I am currently learning Artificial Intelligence to broaden my expertise and build smarter, modern solutions.
              </p>
               <p className="text-white/60 text-lg leading-relaxed font-light">
               My goal is to grow as a skilled developer by working on impactful projects and contributing to meaningful software solutions.
              </p>

            </Reveal>

            <Reveal delay={600}>
              <div className="grid grid-cols-2 gap-10 pt-6">
                <div className="border-l-2 border-white/10 pl-6">
                  <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-2">Background</h4>
                  <p className="text-lg font-medium">BS Computer Science</p>
                </div>
                <div className="border-l-2 border-white/10 pl-6">
                  <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-2">Core Ethos</h4>
                  <p className="text-lg font-medium">Precision & Scalability</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
