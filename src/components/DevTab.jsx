import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: "BENGINE.SPACE",
    description: "Architected a high-performance, distributed coding ecosystem. Engineered a Dockerized compiler infrastructure on AWS EC2 with Nginx reverse proxy and SSL, serving isolated execution pipelines. Implemented a secure hidden testcase evaluation system that maintains submission integrity while supporting real-time AI-assisted debugging for users.",
    tech: ["Docker", "AWS EC2", "Node.js", "Express", "MongoDB", "Nginx"],
    link: "https://www.bengine.space/",
    github: "https://github.com/1aniket/B.Engine",
    category: "Professional System"
  }
];

export default function DevTab() {
  return (
    <div className="space-y-24">
      {/* Featured Projects Highlight */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-brand-text/50 shrink-0">Primary Works</h2>
          <div className="h-[1px] flex-grow bg-brand-text/20" />
        </div>
        
        <div className="flex flex-col gap-20">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 border-b-2 border-brand-text pb-4 gap-4">
                <h3 className="text-5xl md:text-[6rem] font-poster text-brand-text group-hover:text-neutral-500 transition-colors leading-none tracking-tighter">
                  {project.title}
                </h3>
                <div className="flex flex-col md:items-end gap-2">
                  <span className="text-[10px] font-poster uppercase tracking-[0.4em] opacity-40">{project.category}</span>
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-brand-text text-brand-bg px-4 py-2 hover:bg-brand-accent hover:text-white transition-all shadow-md"
                  >
                    Launch <ExternalLink size={12} />
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-brand-text text-brand-bg px-4 py-2 hover:bg-brand-accent hover:text-white transition-all shadow-md"
                  >
                    View Code <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              
              <p className="text-2xl md:text-3xl font-hand leading-[1.1] text-brand-text mb-8 max-w-4xl opacity-90">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-brand-text/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Registry Peek */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t-2 border-brand-text pt-10 gap-6 opacity-60">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-center md:text-left">Profile Index: aniketbhogawar</span>
          <span className="text-[10px] font-serif italic text-center md:text-left">"Simplicity is the ultimate sophistication."</span>
        </div>
        <div className="flex gap-10">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
            Leetcode [Ranked: Top 11%]
          </div>
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
            Codechef [2 Star]
          </div>
        </div>
      </div>
    </div>
  );
}
