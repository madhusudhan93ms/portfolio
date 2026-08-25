import { motion } from 'framer-motion'
import { HiOutlineBriefcase, HiOutlineCheckCircle, HiOutlineCodeBracket } from 'react-icons/hi2'
import SectionWrapper, { stagger, fadeUpItem } from '../components/SectionWrapper'
import { experience } from '../data/experience'
import { personal } from '../data/personal'

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left mb-12 sm:mb-16"
        >
          <span className="inline-block text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0a0f1e] leading-tight mb-3">
            Professional History
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl">
            Hands-on software development, component engineering, and API integration in agile team settings.
          </p>
        </motion.div>

        {/* Two-Column: Developer in Action + Work Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Developer in Action Graphic with image2.png (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-900 group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={personal.developerImage}
                  alt="Madhusudhan N — Coding & Development"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Bottom Badge Bar */}
              <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-left">
                <div>
                  <div className="text-[#0a0f1e] font-bold text-xs">Developer in Action</div>
                  <div className="text-gray-500 text-[11px]">Frontend Engineering &amp; Debugging</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold">
                  6+ Months Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Detailed Experience Card (7 cols) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {experience.map((job) => (
              <motion.div
                key={job.role}
                variants={fadeUpItem}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5 pb-5 border-b border-gray-100">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <HiOutlineBriefcase className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-[#0a0f1e] font-black text-xl mb-1">{job.role}</h3>
                    <p className="text-gray-600 font-semibold text-sm sm:text-base">{job.company}</p>
                  </div>
                  <span className="self-start px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold">
                    {job.duration}
                  </span>
                </div>

                {/* Responsibilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {job.responsibilities.map((r) => (
                    <div key={r} className="flex items-start gap-2 text-gray-700 text-xs sm:text-sm">
                      <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Pills */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-bold text-gray-400 mr-2">Key Focus:</span>
                  {['React.js', 'State Management', 'REST APIs', 'Component Architecture', 'Performance'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-gray-600 text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}
