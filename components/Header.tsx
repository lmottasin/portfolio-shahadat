
import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Works' }
  ];

  return (
    <header className="fixed top-4 lg:top-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] lg:w-[90%] max-w-4xl">
      <nav className="glass flex items-center justify-between px-4 lg:px-8 h-14 lg:h-16 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl">
        <div className="flex-shrink-0">
          <span className="text-base lg:text-lg font-serif font-black tracking-tighter text-white">
            S.<span className="text-indigo-500 italic">SAYAL</span>
          </span>
        </div>
        
        <div className="flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 lg:px-5 py-1.5 lg:py-2 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] transition-all rounded-full relative group ${
                activeSection === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <a 
            href="mailto:shahadat.sayal.msj@ulab.edu.bd" 
            className="px-4 lg:px-6 py-1.5 lg:py-2 bg-indigo-600 text-white text-[9px] lg:text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all shadow-lg shadow-indigo-600/20"
          >
            Connect
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
