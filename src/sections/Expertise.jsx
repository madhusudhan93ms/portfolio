import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineSquares2X2,
  HiOutlineComputerDesktop,
  HiOutlineBriefcase,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineChevronDown,
} from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'
import { expertise } from '../data/expertise'

const iconMap = {
  layers: HiOutlineSquares2X2,
  monitor: HiOutlineComputerDesktop,
  briefcase: HiOutlineBriefcase,
  server: HiOutlineServerStack,
  database: HiOutlineCircleStack,
  cloud: HiOutlineCloud,
}

// Capability metrics per expertise
const metricsMap = {
  '01': { proficiency: 94, label: 'Full Stack Execution', highlight: 'REST API & Role Auth' },
  '02': { proficiency: 96, label: 'UI Architecture', highlight: 'Tailwind & React 19' },
  '03': { proficiency: 92, label: 'Workflow Modeling', highlight: 'BRD & Role Access' },
  '04': { proficiency: 90, label: 'Infrastructure Automation', highlight: 'Docker & CI/CD' },
  '05': { proficiency: 91, label: 'Data Resilience', highlight: 'Backups & rclone' },
  '06': { proficiency: 92, label: 'Infrastructure', highlight: 'Ubuntu VPS & Nginx' },
}

function ExpertiseCard({ item, index }) {
  const [showDetails, setShowDetails] = useState(false)
  const Icon = iconMap[item.icon] || HiOutlineSquares2X2
  const meta = metricsMap[item.number] || { proficiency: 90, label: 'Proficiency', highlight: 'Production' }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between text-left group">
      <div>
        {/* Top Bar: Icon + Number */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black text-gray-200 group-hover:text-blue-200 transition-colors font-mono">
            {item.number}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-[#0a0f1e] font-black text-lg sm:text-xl mb-2 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5">
          {item.description}
        </p>

        {/* Visual Loading / Mastery Progress Bar */}
        <div className="mb-5 bg-gray-50 p-3 rounded-xl border border-gray-100">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className="text-[#0a0f1e]">{meta.label}</span>
            <span className="text-blue-600 font-mono font-bold">{meta.proficiency}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 transition-all duration-500"
              style={{ width: `${meta.proficiency}%` }}
            />
          </div>
        </div>

        {/* Key Skills Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.skills.slice(0, showDetails ? item.skills.length : 4).map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-gray-700 text-xs font-medium group-hover:border-blue-100 transition-colors"
            >
              {skill}
            </span>
          ))}
          {!showDetails && item.skills.length > 4 && (
            <span className="px-2 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold">
              +{item.skills.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Action / Expansion Toggle */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
          <HiOutlineCheckCircle className="w-3.5 h-3.5" />
          {meta.highlight}
        </span>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          <span>{showDetails ? 'Show less' : 'View all'}</span>
          <HiOutlineChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  )
}

export default function Expertise() {
  return (
    <SectionWrapper id="expertise" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Core Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0a0f1e] leading-tight mb-3">
            What I bring to the table
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Production-ready capabilities with competency metrics, role architectures, and full lifecycle execution.
          </p>
        </div>

        {/* 6 Responsive Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <ExpertiseCard key={item.number} item={item} index={i} />
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}
