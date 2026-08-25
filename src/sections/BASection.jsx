import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineChatBubbleBottomCenterText, HiOutlineQueueList, HiOutlineCheckBadge } from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'
import { personal } from '../data/personal'

const baWorkflow = ['Listen', 'Analyse', 'Structure', 'Build', 'Validate', 'Improve']

const keyPoints = [
  {
    icon: HiOutlineChatBubbleBottomCenterText,
    title: 'Requirements',
    desc: 'Turning user conversations into clear functional needs.',
  },
  {
    icon: HiOutlineQueueList,
    title: 'Workflows',
    desc: 'Mapping how users, departments and data interact.',
  },
  {
    icon: HiOutlineCheckBadge,
    title: 'Validation',
    desc: 'Testing whether the finished product solves the original problem.',
  },
]

export default function BASection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % baWorkflow.length)
    }, 1800)
    return () => clearInterval(timer)
  }, [])

  return (
    <SectionWrapper id="ba" className="section-padding bg-[#f8f9fb] text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <span className="inline-block text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Business Analysis
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#0a0f1e] leading-[1.05] uppercase tracking-tight mb-3">
            FROM CONVERSATION<br />
            <span className="text-blue-600">TO SOFTWARE.</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
            I work with users to understand real operational problems and translate them into structured workflows developers can implement.
          </p>
        </div>

        {/* 2-Column Grid: Graphic Diagram & 3 Core Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          
          {/* Visual Diagram Image (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white group">
              <img
                src={personal.baImage}
                alt="Business Analysis and Process Modeling Workflow"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
            </div>
          </div>

          {/* 3 Core Points (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {keyPoints.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs flex items-start gap-4 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#0a0f1e] font-bold text-base sm:text-lg mb-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* Visual Workflow Sequence (Listen -> Analyse -> Structure -> Build -> Validate -> Improve) */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-xs">
          <div className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-3">
            Discovery to Delivery Cycle
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold text-[#0a0f1e]">
            {baWorkflow.map((step, idx) => {
              const isCurrent = activeStep === idx
              return (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <span
                    className={`px-3 py-1.5 rounded-lg font-mono transition-all duration-300 ${
                      isCurrent
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                        : 'bg-blue-50/80 border border-blue-100 text-blue-700'
                    }`}
                  >
                    {step}
                  </span>
                  {idx < baWorkflow.length - 1 && (
                    <span className="text-gray-300">&rarr;</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
