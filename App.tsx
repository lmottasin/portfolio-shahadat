
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';
import { PROJECTS, STUDENT_INFO } from './constants';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-[110] origin-left" style={{ scaleX }} />
      
      <Header activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero name={STUDENT_INFO.name} major={STUDENT_INFO.major} />
        </section>
        
        <section id="about" className="py-24 lg:py-48 relative border-y border-white/5">
          <About details={STUDENT_INFO} />
        </section>

        <section id="projects" className="py-24 lg:py-48 bg-[#050505] relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16 lg:mb-24 flex flex-col items-center text-center">
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[10px] lg:text-xs mb-4">Evidence & Impact</span>
              <h2 className="text-5xl md:text-8xl font-serif font-black italic text-white leading-none">
                Curated Works.
              </h2>
            </div>
            <ProjectsGrid projects={PROJECTS} />
          </div>
        </section>
      </main>

      <Footer name={STUDENT_INFO.name} />
    </div>
  );
};

export default App;
