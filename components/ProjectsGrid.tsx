
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="w-full">
      {/* Editorial Filter */}
      <div className="flex flex-wrap items-center gap-8 mb-24 border-b border-white/5 pb-8 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative py-2 ${
              filter === cat ? 'text-white' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {cat}
            {filter === cat && (
              <motion.div 
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500"
              />
            )}
          </button>
        ))}
      </div>
      
      <div className="flex flex-col gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsGrid;
