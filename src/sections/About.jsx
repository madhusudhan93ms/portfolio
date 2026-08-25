import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUpRight, HiOutlineBriefcase, HiOutlineCheckCircle, HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'
import { personal } from '../data/personal'

const expandedResponsibilities = [
  'Architected reusable React functional components and custom hooks for enterprise customer portals.',
  'Integrated secure REST API endpoints with Axios, implementing optimistic UI updates and robust error handling.',
  'Collaborated directly with senior developers and QA teams to debug cross-browser layout inconsistencies.',
  'Streamlined bundle sizes using Vite code-splitting and dynamic imports to improve load times.',
]

export default function About() {
  const [showMoreExp, setShowMoreExp] = useState(false)

  return (
    <SectionWrapper id="about" className="section-padding bg-[#f8f9fb] text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <span className="inline-block text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Profile &amp; Background
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#0a0f1e] leading-[1.05] uppercase tracking-tight mb-3">
            MORE THAN<br />
            <span className="text-blue-600">WRITING CODE.</span>
          </h2>
        </div>

        {/* 2-Column Grid: Image + Bio & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12">
          
          {/* Portrait Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] max-w-sm rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <img
                src={personal.profileImage}
                alt="Madhusudhan N — Professional Portrait"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bio + Experience Card (7 cols) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
            
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                I’m <strong className="text-[#0a0f1e]">Madhusudhan N</strong>, a Computer Science and Engineering graduate working across full-stack development, Business Analysis, deployment and application operations.
              </p>
              <p>
                My experience has taught me to look beyond individual screens or APIs and understand how an entire product works — from the user's requirement to deployment and ongoing production maintenance.
              </p>

              <div>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-900/20 group"
                >
                  <span>LinkedIn</span>
                  <HiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Clean Experience Timeline Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs text-left">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-bold">
                  <HiOutlineBriefcase className="w-4 h-4" />
                  <span>Work Experience</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold">
                  6 Month Internship
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0a0f1e] mb-0.5">
                React Frontend Developer
              </h3>
              <div className="text-gray-500 text-xs font-semibold mb-3">
                BDreams Global Solutions Pvt. Ltd.
              </div>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                Built responsive React interfaces, integrated APIs and worked with component architecture, state management, debugging and performance optimisation.
              </p>

              {/* Expandable Details Toggle */}
              <button
                onClick={() => setShowMoreExp(!showMoreExp)}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
              >
                <span>{showMoreExp ? 'Hide Details' : 'View Experience +'}</span>
              </button>

              <AnimatePresence>
                {showMoreExp && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600 overflow-hidden"
                  >
                    {expandedResponsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </SectionWrapper>
  )
}
