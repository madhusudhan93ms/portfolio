import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineUserGroup,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
} from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'

const stages = [
  {
    num: '01',
    title: 'UNDERSTAND',
    subtitle: 'Requirements & Workflows',
    icon: HiOutlineUserGroup,
    points: [
      'Direct user requirement gathering',
      'Operational workflow & dependency analysis',
      'Multi-role access modeling',
      'System behavior & state transitions',
    ],
  },
  {
    num: '02',
    title: 'BUILD',
    subtitle: 'Full-Stack Architecture',
    icon: HiOutlineCodeBracket,
    points: [
      'React component architecture',
      'Node.js & Express REST APIs',
      'MongoDB schema & indexing',
      'State management & authentication',
    ],
  },
  {
    num: '03',
    title: 'DEPLOY',
    subtitle: 'Containerized Delivery',
    icon: HiOutlineRocketLaunch,
    points: [
      'GitHub Actions automated CI/CD',
      'Docker & Compose multi-container builds',
      'Ubuntu VPS server management',
      'Nginx reverse proxy & SSL termination',
    ],
  },
  {
    num: '04',
    title: 'MAINTAIN',
    subtitle: 'Data & Production Operations',
    icon: HiOutlineShieldCheck,
    points: [
      'Application monitoring & server logs',
      'Automated database backups (rclone)',
      'Data recovery & snapshot testing',
      'Continuous user feedback & enhancements',
    ],
  },
]

export default function Process() {
  const [activeStage, setActiveStage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <SectionWrapper id="process" className="section-padding bg-[#0a0f1e] text-white text-left overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <span className="inline-block text-cyan-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Engineering Lifecycle
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white leading-[1.05] uppercase tracking-tight mb-3">
            HOW I TAKE<br />
            <span className="text-cyan-400">SOFTWARE TO PRODUCTION.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl font-medium">
            One connected workflow from initial conversation to live production maintenance.
          </p>
        </div>

        {/* 4 Large Stages (Dark Navy Glass Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stages.map((stage, idx) => {
            const Icon = stage.icon
            const isSelected = activeStage === idx

            return (
              <div
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                  isSelected
                    ? 'bg-white/[0.08] border-cyan-400/80 shadow-2xl shadow-cyan-500/15 -translate-y-1.5'
                    : 'bg-white/[0.03] border-white/[0.08] hover:border-white/30 hover:bg-white/[0.05]'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isSelected && (
                  <div
                    className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
                    aria-hidden="true"
                  />
                )}

                <div>
                  {/* Top: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-cyan-400 text-[#0a0f1e] shadow-lg shadow-cyan-400/40'
                          : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-3xl font-black font-mono transition-colors ${
                        isSelected ? 'text-cyan-400' : 'text-white/20'
                      }`}
                    >
                      {stage.num}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-black text-white mb-1 tracking-wide">
                    {stage.title}
                  </h3>
                  <div className="text-cyan-400 text-xs font-mono font-semibold mb-6">
                    {stage.subtitle}
                  </div>

                  {/* Key Points */}
                  <ul className="space-y-2.5 text-xs text-white/70">
                    {stage.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span>Stage 0{idx + 1} / 04</span>
                  {idx < 3 ? <HiOutlineArrowRight className="w-3.5 h-3.5" /> : <span>✓ Live</span>}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Flow Line */}
        <div className="p-4 rounded-2xl glass-dark border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-white/60">Full Product Lifecycle:</span>
          <div className="flex flex-wrap items-center gap-2 font-mono font-bold text-white">
            {stages.map((s, idx) => (
              <span key={s.num} className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    activeStage === idx ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40' : 'text-white/50'
                  }`}
                >
                  {s.num} {s.title}
                </span>
                {idx < stages.length - 1 && <span className="text-white/30">&rarr;</span>}
              </span>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
