
import React from 'react';
import { motion } from 'framer-motion';
import { StudentDetails } from '../types';

interface AboutProps {
  details: StudentDetails;
}

const About: React.FC<AboutProps> = ({ details }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column: Identity & Vision */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="h-[2px] w-6 lg:w-8 bg-indigo-500"></div>
              <h2 className="text-indigo-400 font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[9px] lg:text-xs">
                The Identity
              </h2>
            </div>
            
            <h3 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black italic text-white leading-[0.85] tracking-tighter mb-8 lg:mb-10">
              Media as a <br /> 
              <span className="text-indigo-500 not-italic">Catalyst.</span>
            </h3>
            
            <div className="space-y-4 lg:space-y-6 max-w-lg">
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 font-medium leading-relaxed">
                Shahadat Sayal is a journalistic visionary blending academic precision with creative activism.
              </p>
              <p className="text-base lg:text-lg text-slate-400 leading-relaxed font-light">
                His work bridges the gap between complex social theories and human impact. By focusing on Communication for Development, he utilizes multimedia production to amplify marginalized voices and challenge systemic dogmatism.
              </p>
            </div>
          </motion.div>
          
          <div className="mt-12 lg:mt-16 p-6 lg:p-10 glass rounded-2xl lg:rounded-[2rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 lg:p-6 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
               <svg className="w-16 h-16 lg:w-24 lg:h-24 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171V14.5C19.0171 11.4624 16.5547 9 13.5171 9H12.0171V7H13.5171C17.6592 7 21.0171 10.3579 21.0171 14.5V21H14.017Z" /></svg>
            </div>
            <p className="text-white text-lg lg:text-xl font-serif italic mb-2 lg:mb-4 relative z-10">"The architect of social change through evidence."</p>
            <p className="text-slate-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest relative z-10">Focus: Investigative Research</p>
          </div>
        </div>

        {/* Right Column: Academic & Objectives */}
        <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-16">
          <section>
            <div className="p-8 lg:p-12 border border-white/10 rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 lg:w-64 h-48 lg:h-64 bg-indigo-500/10 rounded-full blur-[60px] lg:blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-1000"></div>
              
              <span className="text-[9px] lg:text-[10px] text-slate-500 uppercase tracking-[0.2em] lg:tracking-[0.3em] block mb-4">Academic Foundation</span>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-2 tracking-tight">{details.department}</p>
              <p className="text-indigo-400 font-black uppercase tracking-[0.15em] lg:tracking-[0.2em] text-[10px] lg:text-xs mb-8 lg:mb-10">ULAB • University of Liberal Arts Bangladesh</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 pt-8 lg:pt-10 border-t border-white/10">
                <div className="space-y-1 lg:space-y-2">
                  <span className="text-[9px] lg:text-[10px] text-slate-500 uppercase tracking-widest block">Major Concentration</span>
                  <span className="text-white text-base lg:text-lg font-semibold tracking-tight">{details.major}</span>
                </div>
                <div className="space-y-1 lg:space-y-2">
                  <span className="text-[9px] lg:text-[10px] text-slate-500 uppercase tracking-widest block">Minor Discipline</span>
                  <span className="text-white text-base lg:text-lg font-semibold tracking-tight">{details.minor}</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-white font-black text-[10px] lg:text-xs uppercase tracking-[0.3em] lg:tracking-[0.4em] mb-8 lg:mb-12 flex items-center gap-4 lg:gap-6">
              Strategic Objectives
              <div className="flex-grow h-[1px] bg-white/10"></div>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 lg:gap-y-10">
              {details.objectives.slice(0, 6).map((obj, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-start gap-4 lg:gap-6"
                >
                  <span className="text-indigo-500 font-black text-xl lg:text-2xl opacity-30 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    0{i+1}
                  </span>
                  <p className="text-slate-300 text-xs lg:text-[15px] leading-relaxed group-hover:text-white transition-colors duration-300 pt-1">
                    {obj}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
