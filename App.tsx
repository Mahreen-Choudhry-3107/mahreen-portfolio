
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f8fafc] selection:bg-white/20 selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      
      {/* Background Decorative Blurs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[50vw] h-[50vw] bg-purple-600/5 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default App;
