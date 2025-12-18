
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  name: string;
  major: string;
}

const Hero: React.FC<HeroProps> = ({ name, major }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-28 pb-12 lg:pt-24 lg:pb-12">
      {/* Background Decorative Text */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0"
      >
        <h2 className="text-[25vw] font-black text-outline text-center uppercase leading-none opacity-5 lg:opacity-10">
          JOURNALISM
        </h2>
      </motion.div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10 items-center">
        <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-indigo-400 font-black tracking-[0.4em] lg:tracking-[0.6em] text-[9px] lg:text-xs mb-6 lg:mb-8 flex items-center gap-3 lg:gap-4">
              <span className="w-8 lg:w-12 h-px bg-indigo-500/50"></span>
              The Visual Storyteller
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-[9rem] font-serif font-black italic text-white leading-[0.8] mb-8 lg:mb-10 tracking-tighter">
              Shahadat <br />
              <span className="text-indigo-500 not-italic">Sayal.</span>
            </h1>
            <div className="max-w-xl">
              <p className="text-base sm:text-lg lg:text-2xl text-slate-300 font-light leading-relaxed mb-10 lg:mb-12">
                Merging academic research with immersive digital media. Dedicated to Communication for Development and uncovering the human impact of societal change.
              </p>
              <div className="flex flex-wrap gap-4 lg:gap-6">
                <a 
                  href="#projects" 
                  className="px-8 lg:px-10 py-4 lg:py-5 bg-white text-black font-black text-[10px] lg:text-xs uppercase tracking-widest rounded-full hover:bg-indigo-500 hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95"
                >
                  Explore Archive
                </a>
                <a 
                  href="#about" 
                  className="px-8 lg:px-10 py-4 lg:py-5 border border-white/20 text-white font-black text-[10px] lg:text-xs uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
                >
                  My Story
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
          <motion.div 
            style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y1 : 0 }}
            className="relative w-full max-w-[280px] sm:max-w-md aspect-[4/5] group"
          >
            {/* Elegant Frame Shadow */}
            <div className="absolute inset-4 bg-indigo-600/20 blur-3xl rounded-3xl -z-10 group-hover:bg-indigo-500/30 transition-all duration-1000"></div>
            
            <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#111] border border-white/10">
              <motion.img
                initial={{ scale: 1.2, filter: 'grayscale(100%)' }}
                animate={{ scale: 1, filter: 'grayscale(0%)' }}
                transition={{ duration: 2, ease: 'easeOut' }}
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop" 
                alt={name}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
            </div>

            {/* Float Element (Researcher Badge) - Adjusted for Mobile */}
            <motion.div 
              style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y2 : 0 }}
              className="absolute -top-6 -right-4 lg:-top-10 lg:-right-8 glass p-4 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/10 shadow-2xl"
            >
              <div className="text-right">
                <p className="text-white font-serif italic text-base lg:text-2xl mb-0 lg:mb-1 leading-tight">Journalist</p>
                <p className="text-indigo-400 text-[8px] lg:text-[10px] font-black uppercase tracking-widest leading-none">Research Analyst</p>
                <div className="mt-2 lg:mt-4 flex justify-end gap-1">
                  {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-0.5 h-0.5 lg:w-1 lg:h-1 bg-white/40 rounded-full"></div>)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 lg:bottom-12 flex flex-col items-center gap-3 lg:gap-4 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView()}
      >
        <span className="text-[8px] lg:text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-10 lg:h-16 bg-gradient-to-b from-indigo-500 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
