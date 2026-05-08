/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Terminal, Github, Mail, Linkedin, Trophy, Target, Layout, Cpu, Layers, Database, Server, Wind, Quote } from 'lucide-react';
import DevTab from './components/DevTab';
import CodingTab from './components/CodingTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('dev');

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans p-4 md:p-8 flex items-center justify-center selection:bg-brand-accent selection:text-white">
      {/* The Wanted Poster Container */}
      <div className="w-full max-w-[1400px] poster-paper p-8 md:p-16 flex flex-col border-[2px] border-brand-text/20 shadow-2xl relative overflow-hidden">
        
        {/* Header Section */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b-4 border-brand-text/30 pb-12">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 text-brand-accent">
              <span className="h-[2px] w-12 bg-brand-accent" />
              <span className="text-xs font-black uppercase tracking-[0.4em]">Portfolio Index 2024</span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-[8rem] font-poster leading-[0.8] tracking-tighter uppercase"
            >
              Aniket Bhogawar
            </motion.h1>
            <div className="flex flex-wrap items-center gap-8 text-sm font-black uppercase tracking-widest opacity-60">
              <span className="flex items-center gap-2 underline decoration-brand-accent decoration-2 underline-offset-4">BTech Graduate • 2024</span>
              <span className="w-1 h-1 bg-brand-text rounded-full" />
              <span>Full Stack Development</span>
              <span className="w-1 h-1 bg-brand-text rounded-full" />
              <span className="font-hand italic lowercase">Marine Intelligence</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-8 h-full justify-between">
            <div className="flex gap-4">
              <SocialLink icon={<Github size={18} />} href="https://github.com/1aniket" />
              <SocialLink icon={<Linkedin size={18} />} href="https://linkedin.com/in/aniketbhogawar" />
              <SocialLink icon={<Mail size={18} />} href="mailto:aniketbhogawar@icloud.com" />
            </div>
            
            <div className="lg:text-right space-y-4">
              <div className="bg-brand-text text-white px-6 py-3 font-poster text-4xl">
                "Orchestrating Complex Systems"
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                Based in West Blue Origins • Available for Global Missions
              </p>
            </div>
          </div>
        </header>

        {/* Main Content Dashboard */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 min-h-0">
          
          {/* Sidebar Navigation & Intel */}
          <aside className="lg:col-span-3 flex flex-col gap-12">
            <div className="space-y-12 h-fit lg:sticky lg:top-12">
              <nav className="flex flex-col gap-2">
                <TabButton 
                  active={activeTab === 'dev'} 
                  onClick={() => setActiveTab('dev')}
                  label="Engineering Log"
                  icon={<Terminal size={14} />}
                />
                <TabButton 
                  active={activeTab === 'coding'} 
                  onClick={() => setActiveTab('coding')}
                  label="Competitive Combat"
                  icon={<Trophy size={14} />}
                />
                <TabButton 
                  active={activeTab === 'intel'} 
                  onClick={() => setActiveTab('intel')}
                  label="Specialist Intel"
                  icon={<Target size={14} />}
                />
              </nav>

              <div className="p-8 border-4 border-brand-text bg-white/50 backdrop-blur-sm">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 border-b-2 border-brand-text pb-4">Core Arsenals</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MongoDB", "Express", "React", "Node.js", 
                    "Next.js", "TypeScript", "Docker", "AWS", "Nginx"
                  ].map(skill => (
                    <span key={skill} className="text-[9px] font-bold uppercase tracking-widest p-1.5 border border-brand-text/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="opacity-40 font-hand text-xl border-l-4 border-brand-text pl-6 py-2">
                <Quote size={18} className="mb-4 text-brand-accent" />
                "When the world shoves you around, you just gotta stand up and shove back."
                <p className="text-[10px] font-sans font-black uppercase tracking-widest mt-4">Roronoa Zoro</p>
              </div>
            </div>
          </aside>

          {/* Tab Content Area */}
          <main className="lg:col-span-9 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="custom-scrollbar overflow-y-auto pr-4 max-h-[800px]"
              >
                {activeTab === 'dev' && <DevTab />}
                {activeTab === 'coding' && <CodingTab />}
                {activeTab === 'intel' && <IntelTab />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        {/* Footer Accent */}
        <footer className="mt-auto pt-12 border-t-4 border-brand-text/20 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
          <span>Marine Intelligence Authority • 2024</span>
          <div className="flex items-center gap-6">
            <span className="font-poster text-4xl">MARINE</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function SocialLink({ icon, href }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border-2 border-brand-text hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}

function TabButton({ active, onClick, label, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 py-4 px-6 text-sm font-poster uppercase tracking-[0.2em] border-2 transition-all relative ${
        active 
          ? 'bg-brand-text text-white border-brand-text translate-x-2' 
          : 'border-transparent text-brand-text/50 hover:text-brand-text hover:bg-brand-text/5'
      }`}
    >
      <span className={active ? 'text-brand-accent' : 'opacity-40'}>{icon}</span>
      {label}
      {active && <motion.div layoutId="nav-pill" className="absolute left-0 w-1.5 h-1.5 bg-brand-accent rounded-full -ml-3" />}
    </button>
  );
}

function IntelTab() {
  return (
    <div className="space-y-24">
      <section>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-brand-text/50 shrink-0">Technological Specialization</h2>
          <div className="h-[1px] flex-grow bg-brand-text/20" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { area: "Architecture", skills: "Microservices, Docker Orchestration, AWS EC2, Nginx Reverse Proxying", icon: <Cpu /> },
            { area: "Backend", skills: "Node.js, Express, MongoDB Aggregations, JWT Security, Socket.io Real-time", icon: <Server /> },
            { area: "Frontend", skills: "React/Next.js dynamic routing, Tailwind precision, Framer Motion animations", icon: <Layout /> }
          ].map((item, idx) => (
            <div key={idx} className="p-8 border-2 border-brand-text group hover:bg-brand-text hover:text-white transition-all">
              <div className="text-brand-accent group-hover:text-white transition-colors mb-6">{item.icon}</div>
              <h3 className="font-poster text-4xl font-black uppercase mb-4 tracking-tight">{item.area}</h3>
              <p className="text-xs font-hand uppercase tracking-widest leading-loose opacity-60 group-hover:opacity-100">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-text text-white p-12 md:p-20 relative overflow-hidden group">
        <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-5 transition-opacity" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] opacity-40">Development Philosophy</h2>
            <p className="text-4xl md:text-7xl font-poster uppercase leading-tight tracking-tighter">
              "Building systems that don't just solve problems, but define standards."
            </p>
          </div>
          <div className="flex flex-col justify-end lg:items-end gap-4 opacity-40 text-[10px] font-black uppercase tracking-[0.5em]">
            <span>Code is Poetry</span>
            <span>Logic is Justice</span>
            <span>Performance is King</span>
          </div>
        </div>
      </section>
    </div>
  );
}
