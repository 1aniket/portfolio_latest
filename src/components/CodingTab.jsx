import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { FaGoogle , FaApple  ,FaRibbon } from 'react-icons/fa';
import { SiBytedance } from "react-icons/si";


export default function CodingTab() {
  const stats = [
    { label: "Weekly Ranking", value: "Top 11%", sub: "Global Performance" },
    { label: "Global Rating", value: "1554", sub: "LeetCode Maximum" },
    { label: "Total Solved", value: "600+", sub: "Verified Problems" },
    { label: "Active Streak", value: "191d", sub: "Daily Commits" },
  ];

  const mentors = [
    { name: "Google London" , logo:<FaGoogle /> },
    { name: "Apple",logo:<FaApple /> },
    { name: "Bytedance Singapore", logo :<SiBytedance />  },
    { name: "Alphagrep", logo:<FaRibbon style={{transform: 'rotate(270deg)'}}/> }
  ];

  const platforms = [
    { name: "LeetCode", id: "aniketbhogawar", link: "https://leetcode.com/aniketbhogawar" },
    { name: "CodeChef", id: "aniketbhogawar", link: "https://www.codechef.com/users/aniketbhogawar" },
    { name: "Codeforces", id: "aniketbhogawar", link: "https://codeforces.com/profile/aniketbhogawar" }
  ];

  return (
    <div className="space-y-24">
      {/* Stats Board */}
      <section className="relative">
        <div className="flex items-center gap-4 mb-12 relative z-10">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-brand-text/50 shrink-0">Performance Metrics</h2>
          <div className="h-[1px] flex-grow bg-brand-text/20" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-brand-text">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 border-r-2 border-b-2 last:border-r-0 border-brand-text bg-white hover:bg-brand-text hover:text-white transition-all group"
            >
              <div className="text-5xl md:text-7xl font-poster font-black mb-4 leading-none transition-transform origin-left group-hover:scale-105">
                {stat.value}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest border-t border-current pt-2 inline-block mb-1">{stat.label}</div>
              <div className="text-[8px] uppercase tracking-[0.4em] opacity-40 block">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Profile Banners */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-brand-text/50 shrink-0">External Presence</h2>
          <div className="h-[1px] flex-grow bg-brand-text/20" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-brand-text">
          {platforms.map((platform, idx) => (
            <a
              key={idx}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 flex flex-col items-center justify-center text-center group transition-all relative border-r-2 last:border-r-0 border-brand-text hover:bg-brand-text hover:text-white"
            >
              <h3 className="font-poster text-4xl md:text-5xl font-bold mb-2 leading-none">{platform.name}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">AuthID: {platform.id}</p>
              <ExternalLink size={16} className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </section>

      {/* Experience Highlight Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-brand-text text-brand-paper p-10 md:p-14 border-[10px] border-double border-brand-paper/20 relative"
      >
        <div className="flex flex-col gap-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-brand-paper/20 pb-12">
            <div className="max-w-3xl">
              <h3 className="text-5xl md:text-8xl font-poster font-black tracking-tighter uppercase leading-[0.8] mb-8">
                Software Engineering<br />Extern @AlgoUniversity
              </h3>
              <p className="text-brand-paper/90 text-2xl font-hand leading-tight mb-4">
                "Building B.Engine — A high-performance online coding platform with real-time execution and AI-assisted debugging."
              </p>
              <p className="text-[10px] font-sans font-black uppercase tracking-[0.4em] opacity-40">Nov 2025 – May 2026 • Remote Expertise</p>
            </div>
            <div className="flex flex-col items-center lg:items-end shrink-0">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Mentorship From</span>
               <div className="lg:text-right space-y-1">
                 {mentors.map(m => (
                   <div key={m.name} className="flex items-center lg:justify-end gap-2 text-lg font-poster tracking-tighter uppercase">
                 
                     {m?.logo}{m.name}
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-40">System Architecture</h4>
              <p className="text-sm font-hand leading-relaxed opacity-90">
                Designed a distributed system using Vercel, Render, and AWS EC2 with Nginx reverse proxy.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-40">Core Engineering</h4>
              <p className="text-sm font-hand leading-relaxed opacity-90">
                Built secure execution pipelines with hidden testcase evaluation for submission integrity.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-40">Impact & Scale</h4>
              <p className="text-sm font-hand leading-relaxed opacity-90 text-pretty text-brand-paper/80">
                Engineered scalable REST APIs using Node.js and MongoDB for complex code execution.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
