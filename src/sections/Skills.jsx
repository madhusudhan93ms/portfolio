import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineCodeBracket,
  HiOutlineComputerDesktop,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineCommandLine,
  HiOutlineShieldCheck,
  HiOutlineWrenchScrewdriver,
  HiOutlineCpuChip,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'
import { skillCategories } from '../data/skills'

const iconMap = {
  Programming: HiOutlineCodeBracket,
  Frontend: HiOutlineComputerDesktop,
  Backend: HiOutlineServerStack,
  Database: HiOutlineCircleStack,
  'DevOps & Deployment': HiOutlineCommandLine,
  'Cloud & Data Protection': HiOutlineShieldCheck,
  'Development Tools': HiOutlineWrenchScrewdriver,
  'Core Computer Science': HiOutlineCpuChip,
}

// 8 core proficiencies with visual mastery meters
const coreProficiencies = [
  { name: 'React.js & Component Architecture', percent: 94, category: 'Frontend', level: 'Advanced' },
  { name: 'Node.js & Express REST APIs', percent: 92, category: 'Backend', level: 'Advanced' },
  { name: 'MongoDB & Database Maintenance', percent: 90, category: 'Database', level: 'Proficient' },
  { name: 'Docker & Containerization', percent: 88, category: 'DevOps', level: 'Proficient' },
  { name: 'CI/CD & GitHub Actions', percent: 89, category: 'DevOps', level: 'Proficient' },
  { name: 'Ubuntu VPS & Nginx Hosting', percent: 91, category: 'Infrastructure', level: 'Proficient' },
  { name: 'Cloud Backup Storage & rclone', percent: 90, category: 'Data Protection', level: 'Proficient' },
  { name: 'Business Requirements & BRD', percent: 93, category: 'Analysis', level: 'Advanced' },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredCategories =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.label === activeCategory)

  return (
    <SectionWrapper id="skills" className="section-padding bg-white text-left overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 text-center max-w-2xl mx-auto">
          <span className="inline-block text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Technical Stack &amp; Skills
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#0a0f1e] leading-[1.05] uppercase tracking-tight mb-3">
            TECHNICAL<br />
            <span className="text-blue-600">CAPABILITIES.</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Production-tested competencies spanning web development, API engineering, Linux VPS infrastructure, and database maintenance.
          </p>
        </div>

        {/* Top: Core Mastery Loading Meters & System Architecture Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Interactive Animated Skill Meters (7 cols) */}
          <div className="lg:col-span-7 bg-[#f8f9fb] rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs text-left">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div>
                <h3 className="text-[#0a0f1e] font-bold text-base sm:text-lg flex items-center gap-2">
                  <HiOutlineSparkles className="w-5 h-5 text-blue-600" />
                  Core Production Competencies
                </h3>
                <p className="text-gray-500 text-xs">Verified execution benchmarks across real deployments</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-mono font-bold">
                8 Pillars
              </span>
            </div>

            <div className="space-y-4">
              {coreProficiencies.map((item, i) => (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0a0f1e] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item.name}
                    </span>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-gray-400 text-[10px] hidden sm:inline">{item.category}</span>
                      <span className="text-blue-600 font-bold">{item.percent}%</span>
                    </div>
                  </div>
                  
                  {/* Glowing Animated Loading Meter */}
                  <div className="w-full h-2 rounded-full bg-gray-200/80 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Circular Technology Orbit Visualizer (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#0a0f1e] rounded-3xl p-6 sm:p-8 border border-white/10 text-white shadow-xl relative overflow-hidden text-center">
            {/* Background Radial Glow */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle at center, #3b82f6 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="relative z-10 w-full">
              <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold block mb-1">
                System Topology
              </span>
              <h3 className="text-xl font-black text-white mb-2">Full-Stack Orbit</h3>
              <p className="text-white/50 text-xs mb-8">
                Tight synchronization between client, server, database, and VPS infrastructure.
              </p>

              {/* Central Orbit Diagram */}
              <div className="relative w-60 h-60 mx-auto flex items-center justify-center">
                {/* Outer Orbit Ring */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 border-dashed animate-spin [animation-duration:40s]" />
                {/* Inner Orbit Ring */}
                <div className="absolute inset-8 rounded-full border border-cyan-400/20" />

                {/* Central Hub */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-500/40 z-10">
                  <span>MERN</span>
                  <span className="text-[9px] text-blue-200 font-normal">Stack</span>
                </div>

                {/* Orbit Satellites */}
                <div className="absolute -top-1 px-3 py-1 rounded-full glass-dark text-[10px] font-mono text-blue-300 border border-blue-500/30">
                  React 19
                </div>
                <div className="absolute -bottom-1 px-3 py-1 rounded-full glass-dark text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                  Ubuntu VPS
                </div>
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full glass-dark text-[10px] font-mono text-emerald-300 border border-emerald-500/30">
                  MongoDB
                </div>
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full glass-dark text-[10px] font-mono text-indigo-300 border border-indigo-500/30">
                  Docker + CI
                </div>
              </div>

              {/* Bottom Flow Note */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] text-white/50 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Zero external cloud dependencies required
              </div>
            </div>
          </div>

        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'All'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All 8 Categories
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.label
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 8 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.label] || HiOutlineCodeBracket

            return (
              <div
                key={cat.label}
                className="bg-white rounded-3xl border border-gray-200/80 p-6 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                      {cat.skills.length} Skills
                    </span>
                  </div>

                  <h3 className="font-black text-base text-[#0a0f1e] mb-3 group-hover:text-blue-600 transition-colors">
                    {cat.label}
                  </h3>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-gray-700 text-xs font-medium group-hover:border-blue-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <HiOutlineCheckCircle className="w-3.5 h-3.5" />
                    Production Ready
                  </span>
                  <span className="font-mono">100%</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </SectionWrapper>
  )
}
