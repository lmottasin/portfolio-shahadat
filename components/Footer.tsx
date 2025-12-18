
import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="bg-[#0a0c10] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <span className="text-2xl font-serif font-bold text-white tracking-tight">
              {name.split(' ')[0]} <span className="text-indigo-400">{name.split(' ')[1]}</span>
            </span>
            <p className="mt-6 text-slate-400 max-w-sm leading-relaxed">
              Specializing in Communication for Development and modern journalistic storytelling. Based in Bangladesh.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Overview</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">Profile</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Facebook</a></li>
              <li><a href="mailto:contact@sayal.com" className="hover:text-indigo-400 transition-colors">Email Me</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 text-xs font-medium uppercase tracking-[0.2em]">
            © 2025 {name} — Portfolio v2.0
          </p>
          <div className="flex gap-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Available for Collaborations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
