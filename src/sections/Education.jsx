import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUpRight, HiOutlineAcademicCap, HiOutlineTrophy } from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'
import { personal } from '../data/personal'

const certifications = [
  'React Web Development — Besant Technologies',
  'Human Computer Interaction — NPTEL, Elite + Gold',
  'Privacy and Security in Social Media — NPTEL',
  'UI/UX Design — Make Labs',
]

const achievements = [
  {
    title: 'Smart India Hackathon',
    subtitle: 'National-level selection — 2023 & 2024',
  },
  {
    title: 'Research Publication',
    subtitle: 'Empty Return Truck Booking System — Published in IJSERM',
  },
  {
    title: 'LeetCode Problem Solving',
    subtitle: 'Maximum Rating 1869 · 30+ algorithmic problems solved',
  },
]

export default function Education() {
  const [showCerts, setShowCerts] = useState(false)

  return (
    <SectionWrapper id="education" className="section-padding bg-white text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Clean Typography Layout: Education & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-gray-100">
          
          {/* Left Column: Education (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase">
              Academic Background
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0a0f1e] uppercase tracking-tight">
              EDUCATION
            </h2>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono font-bold text-blue-600">2022 — 2026</div>
              <h3 className="text-xl font-bold text-[#0a0f1e]">
                B.E. Computer Science &amp; Engineering
              </h3>
              <p className="text-gray-600 text-sm font-medium">
                Adhiyamaan College of Engineering
              </p>
              <p className="text-xs font-mono font-semibold text-gray-400">
                CGPA 7.1 — up to 7th semester
              </p>

              {/* Smaller Typography for Schooling */}
              <div className="pt-3 text-xs text-gray-400 font-mono">
                HSC — 82.3% &nbsp;·&nbsp; SSLC — 80.1%
              </div>
            </div>

            {/* Expandable Certifications Row */}
            <div className="pt-4">
              <button
                onClick={() => setShowCerts(!showCerts)}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
              >
                <span>{showCerts ? 'Hide Certifications -' : 'Certifications +'}</span>
              </button>

              <AnimatePresence>
                {showCerts && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 space-y-2 text-xs text-gray-600 pl-2 border-l-2 border-blue-500 overflow-hidden"
                  >
                    {certifications.map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Achievements (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase">
              Recognition
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0a0f1e] uppercase tracking-tight">
              ACHIEVEMENTS
            </h2>

            <div className="space-y-6 pt-2">
              {achievements.map((item) => (
                <div key={item.title} className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0a0f1e]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Social Proof / Profile Links Section */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider block mb-1">
              Social Proof
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0a0f1e]">
              Find me online
            </h3>
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-[#0a0f1e] hover:text-blue-600 transition-colors group"
            >
              <span>GitHub</span>
              <HiArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-[#0a0f1e] hover:text-blue-600 transition-colors group"
            >
              <span>LinkedIn</span>
              <HiArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
