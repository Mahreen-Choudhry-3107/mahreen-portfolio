
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold">Mahreen<span className="text-white/40">.</span></div>
        
        <div className="text-white/40 text-xs tracking-widest font-medium">
          © {new Date().getFullYear()} MAHREEN CHOUDHRY.
        </div>
        
        <div className="flex gap-8 text-xs font-semibold tracking-widest text-white/40">
          <a href="#home" className="hover:text-white transition-colors">HOME</a>
          <a href="#projects" className="hover:text-white transition-colors">WORK</a>
          <a href="#contact" className="hover:text-white transition-colors">HIRE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
