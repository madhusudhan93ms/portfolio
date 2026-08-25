import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineXMark,
  HiArrowUpRight,
  HiOutlineChevronDown,
  HiOutlineCheckCircle,
} from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'
import { selectedProjects } from '../data/projects'

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null)
  const [openAccordion, setOpenAccordion] = useState('overview')

  const openProjectModal = (proj) => {
    setActiveModalProject(proj)
    setOpenAccordion('overview')
  }

  const closeModal = () => {
    setActiveModalProject(null)
  }

  return (
    <SectionWrapper id="work" className="section-padding bg-white text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-20"
        >
          <span className="inline-block text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#0a0f1e] leading-[1.05] uppercase tracking-tight mb-3">
            SELECTED<br />
            <span className="text-blue-600">WORK.</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl font-medium">
            Products I’ve helped design, develop, deploy and maintain.
          </p>
        </motion.div>

        {/* Cinematic Project Panels with Scroll-Triggered Parallax Entrance */}
        <div className="space-y-16 sm:space-y-24">
          {selectedProjects.map((project, index) => {
            const isEven = index % 2 === 1

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#f8f9fb] rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
              >
                {/* Text Content (6 cols) */}
                <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Number + Tags */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-blue-600 font-mono">
                      {project.num}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-semibold shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0a0f1e] mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* HBMS Simplified Flow Visual */}
                  {project.flow && (
                    <div className="mb-6 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                      <div className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Operational Flow
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-blue-700 mb-2">
                        {project.flow.map((step, idx) => (
                          <span key={step} className="flex items-center gap-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-100">{step}</span>
                            {idx < project.flow.length - 1 && <span className="text-gray-300">&rarr;</span>}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {project.subtext}
                      </p>
                    </div>
                  )}

                  {/* Single CTA Button */}
                  <div>
                    <button
                      onClick={() => openProjectModal(project)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a0f1e] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-md group/btn cursor-pointer hover:-translate-y-0.5"
                    >
                      <span>{project.cta}</span>
                      <HiArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Visual (6 cols) */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div
                    onClick={() => openProjectModal(project)}
                    className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-[#f0f4f8] cursor-pointer group/img flex items-center justify-center min-h-[260px]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain group-hover/img:scale-[1.02] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0a0f1e]/10 group-hover/img:bg-transparent transition-colors pointer-events-none" />
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Interactive Case Study / Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-[#0a0f1e]/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto text-left"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#f8f9fb]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    Case Study · {activeModalProject.num}
                  </span>
                  <h3 className="font-bold text-[#0a0f1e] text-sm sm:text-base line-clamp-1">
                    {activeModalProject.title}
                  </h3>
                </div>

                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <HiOutlineXMark className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scroll Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Visual Header Image */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-[#f0f4f8] flex items-center justify-center">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* HBMS Detailed Accordion */}
                {activeModalProject.caseStudy ? (
                  <div className="space-y-3">
                    {[
                      {
                        key: 'overview',
                        title: '1. Overview & Problem Statement',
                        content: (
                          <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                            <p><strong>Overview:</strong> {activeModalProject.caseStudy.overview}</p>
                            <p><strong>Problem:</strong> {activeModalProject.caseStudy.problem}</p>
                          </div>
                        ),
                      },
                      {
                        key: 'myRole',
                        title: '2. My Responsibilities & Role',
                        content: (
                          <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                            {(activeModalProject.caseStudy.myRole || []).map((role, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <HiOutlineCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>{role}</span>
                              </li>
                            ))}
                          </ul>
                        ),
                      },
                      {
                        key: 'workflow',
                        title: '3. Clinical & Financial Workflow',
                        content: (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {(activeModalProject.caseStudy.workflow || []).map((w) => (
                              <div key={w.step} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                                <div className="font-bold text-xs text-[#0a0f1e] mb-1">{w.step}</div>
                                <div className="text-gray-500 text-[11px] leading-relaxed">{w.desc}</div>
                              </div>
                            ))}
                          </div>
                        ),
                      },
                      {
                        key: 'modules',
                        title: '4. Key SaaS Modules Built',
                        content: (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {(activeModalProject.caseStudy.keyModules || []).map((mod) => (
                              <span key={mod} className="p-2 rounded-lg bg-blue-50/60 border border-blue-100 text-blue-900 text-xs font-semibold text-center">
                                {mod}
                              </span>
                            ))}
                          </div>
                        ),
                      },
                      {
                        key: 'tech',
                        title: '5. Development, Deployment & Data Maintenance',
                        content: (
                          <div className="space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                            <p><strong>Development:</strong> {activeModalProject.caseStudy.development}</p>
                            <p><strong>Deployment:</strong> {activeModalProject.caseStudy.deployment}</p>
                            <p><strong>Data Maintenance:</strong> {activeModalProject.caseStudy.dataMaintenance}</p>
                          </div>
                        ),
                      },
                      {
                        key: 'challenges',
                        title: '6. Challenges & Solutions',
                        content: (
                          <div className="space-y-3">
                            {(activeModalProject.caseStudy.challengesSolutions || []).map((cs, idx) => (
                              <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 space-y-1">
                                <div className="text-xs font-bold text-red-600">Challenge: {cs.challenge}</div>
                                <div className="text-xs text-gray-700"><strong>Solution:</strong> {cs.solution}</div>
                              </div>
                            ))}
                          </div>
                        ),
                      },
                    ].map((section) => {
                      const isOpen = openAccordion === section.key
                      return (
                        <div key={section.key} className="rounded-2xl border border-gray-200 overflow-hidden">
                          <button
                            onClick={() => setOpenAccordion(isOpen ? null : section.key)}
                            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-xs sm:text-sm text-[#0a0f1e] transition-colors cursor-pointer"
                          >
                            <span>{section.title}</span>
                            <HiOutlineChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
                          </button>
                          {isOpen && (
                            <div className="p-4 sm:p-5 bg-white border-t border-gray-100">
                              {section.content}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  /* Standard Project Details */
                  <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    <p className="font-medium text-gray-800">{activeModalProject.details?.overview}</p>
                    <div className="space-y-2">
                      <div className="font-bold text-[#0a0f1e] text-xs uppercase tracking-wider">Key Highlights:</div>
                      <ul className="space-y-1.5">
                        {(activeModalProject.details?.highlights || []).map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <HiOutlineCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
