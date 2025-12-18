
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const formattedIndex = (index + 1).toString().padStart(2, '0');
  
  const getThematicImage = (id: string) => {
    const images: Record<string, string> = {
      "14": "https://images.unsplash.com/photo-1547550124-792161ad63b2?q=80&w=1600&auto=format&fit=crop",
      "15": "https://images.unsplash.com/photo-1585829365234-781fcddec338?q=80&w=1600&auto=format&fit=crop",
      "16": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      "8": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      "4": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
      "11": "https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?q=80&w=1600&auto=format&fit=crop",
      "12": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1600&auto=format&fit=crop",
      "2": "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1600&auto=format&fit=crop"
    };
    return images[id] || `https://images.unsplash.com/photo-1495020689067-2e223f005ac2?q=80&w=1600&auto=format&fit=crop`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative min-h-[550px] lg:h-[750px] w-full overflow-hidden flex flex-col bg-[#080808]"
    >
      {/* Background with Parallax effect simulation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          src={getThematicImage(project.id)}
          className="w-full h-full object-cover opacity-25 lg:opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-[1500ms]"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 lg:via-[#050505]/70 to-transparent"></div>
      </div>

      {/* Index scaling for mobile */}
      <div className="absolute top-6 lg:top-12 left-6 lg:left-12 z-10 pointer-events-none">
        <span className="text-7xl sm:text-9xl lg:text-[12rem] font-black text-outline opacity-[0.05] lg:opacity-[0.03] select-none group-hover:opacity-[0.08] transition-opacity duration-1000">
          {formattedIndex}
        </span>
      </div>

      <div className="mt-auto p-8 sm:p-12 lg:p-24 relative z-20 flex flex-col items-start max-w-5xl">
        <motion.div 
          className="mb-6 lg:mb-8 h-[2px] w-8 lg:w-12 bg-indigo-500 group-hover:w-20 lg:group-hover:w-24 transition-all duration-700 ease-in-out"
        ></motion.div>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 lg:mb-8">
          <span className="px-3 lg:px-4 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[9px] lg:text-[10px] font-black uppercase tracking-widest">
            {project.category}
          </span>
          <span className="text-white/20 text-[10px] font-bold hidden sm:inline">•</span>
          <span className="text-white/40 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest hidden sm:inline">{project.type}</span>
        </div>

        <h3 className="text-3xl sm:text-5xl lg:text-8xl font-serif font-black italic text-white mb-6 lg:mb-10 leading-[1.1] lg:leading-[0.9] group-hover:text-indigo-200 transition-colors duration-500 tracking-tighter">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 opacity-100 lg:opacity-0 group-hover:opacity-100 transform lg:translate-y-6 group-hover:translate-y-0 transition-all duration-[800ms] delay-100 font-light max-w-3xl">
          {project.description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10 mt-4 w-full">
          <div className="flex gap-3 w-full sm:w-auto">
            {project.links?.map((link, i) => (
              <a 
                key={i}
                href={link.url === '#' ? undefined : link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex-1 sm:flex-none text-center px-6 lg:px-10 py-3 lg:py-4 bg-white text-black text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-2 lg:gap-3 ${link.url === '#' ? 'cursor-not-allowed opacity-40 grayscale' : 'cursor-pointer group/btn'}`}
              >
                {link.label}
                <svg className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform ${link.url !== '#' && 'group-hover/btn:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            ))}
          </div>
          
          <div className="flex gap-2 lg:gap-3 items-center flex-wrap">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[8px] lg:text-[9px] text-white/50 font-black px-3 lg:px-4 py-1 lg:py-1.5 bg-white/5 rounded-full border border-white/5 uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
