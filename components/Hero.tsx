
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const words = ["Computer Scientist", "Web Developer", "Graphic Designer", "Passionate to Learn"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, typingSpeed]);

  return (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 md:pt-0 relative overflow-hidden">
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">
          Mahreen Choudhry
        </h1>

        <div className="h-12 flex items-center justify-center mb-8">
          <span className="text-xl md:text-3xl font-light text-white/60 tracking-wide">
            {displayText}
            <span className="border-r-2 border-white ml-1 animate-pulse"></span>
          </span>
        </div>

        <p className="max-w-xl mx-auto text-white/40 text-sm md:text-base leading-relaxed mb-10">
          I am Mahreen Choudhry, a BS Computer Science student at Virtual University of Pakistan, 
          with hands-on experience in modern web and software development technologies. Skilled in
          C++, C#, Python, HTML5, CSS3, JavaScript, React, Node.js, and .NET, I focus on writing clean code,
          solving complex problems, and developing impactful applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all transform hover:scale-105">
            My Projects
          </a>
          <a href="#contact" className="px-10 py-4 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all transform hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
