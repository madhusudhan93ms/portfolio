import { useState, useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2'
import { personal } from '../data/personal'
import HeroHoloShowcase from '../components/HeroHoloShowcase'

// Lazy-load Three.js canvas to avoid SSR issues and keep hero fast
const ThreeHeroCanvas = lazy(() => import('../components/ThreeHeroCanvas'))

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const lifecycleSteps = ['UNDERSTAND', 'BUILD', 'DEPLOY', 'MAINTAIN', 'PROTECT']

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % lifecycleSteps.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-[95vh] bg-[#0a0f1e] flex flex-col justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 text-white text-left"
    >
      {/* ── Three.js StructureFlow Particle Field ── */}
      <Suspense fallback={null}>
        <ThreeHeroCanvas />
      </Suspense>

      {/* ── Subtle dot grid overlaid above canvas ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-[1]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* ── Ambient radial vignettes ── */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[160px] pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[140px] pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* ── Main 2-Column Hero Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">

          {/* Left Column: Clean Typography (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                MERN Developer · Business Analyst · DevOps
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] mb-4 text-white uppercase"
            >
              FROM REQUIREMENT<br />
              <span className="gradient-text">TO PRODUCTION.</span>
            </motion.h1>

            {/* Supporting Line */}
            <motion.p
              variants={itemVariants}
              className="text-white/90 font-medium text-base sm:text-lg mb-3"
            >
              I design, build, deploy and maintain real-world web applications.
            </motion.p>

            {/* Short Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-white/55 text-xs sm:text-sm leading-relaxed max-w-xl mb-7"
            >
              MERN Stack Developer working across product requirements, full-stack development, CI/CD, VPS deployment and production data maintenance.
            </motion.p>

            {/* Action Buttons & Interactive Terminal Pill */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <button
                onClick={() => handleScroll('#work')}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-blue-900/50 hover:shadow-blue-500/60 hover:-translate-y-0.5 cursor-pointer group"
                id="hero-explore-work"
              >
                <span>Explore My Work</span>
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScroll('#contact')}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-blue-400/60 bg-white/[0.04] hover:bg-blue-500/10 text-white font-bold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-sm"
                id="hero-lets-talk"
              >
                Let's Talk
              </button>

              {/* Interactive Quick Connect / Terminal Badge */}
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 border border-white/10 font-mono text-[11px] text-white/70 shadow-inner">
                <span className="text-emerald-400">➜</span>
                <span className="text-white/40">node</span>
                <span className="text-cyan-300">madhusudhan.js</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 mb-7 text-xs">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors group font-medium"
              >
                <span>GitHub</span>
                <HiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/60 hover:text-blue-400 transition-colors group font-medium"
              >
                <span>LinkedIn</span>
                <HiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Core Tech Tags */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-white/60">
              <span className="text-white/30 text-[11px] uppercase tracking-wider font-sans font-semibold mr-1">Core:</span>
              <span>React · Node.js · MongoDB · Docker</span>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Animated Holographic Portrait Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <HeroHoloShowcase />
          </motion.div>

        </div>

        {/* ── Lifecycle Steps — Cycling Active Glow ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-white/[0.08] text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-3 font-mono text-xs sm:text-sm font-bold tracking-wider">
            {lifecycleSteps.map((step, i) => {
              const isCurrent = activeStep === i
              return (
                <div key={step} className="flex items-center gap-2 sm:gap-4">
                  <span
                    className={`px-3.5 py-1.5 rounded-lg border transition-all duration-300 ${
                      isCurrent
                        ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-500/40 scale-105'
                        : 'bg-white/[0.04] border-white/[0.08] text-white/60 hover:text-white'
                    }`}
                  >
                    {step}
                  </span>
                  {i < lifecycleSteps.length - 1 && (
                    <span className="text-white/25">&darr;</span>
                  )}
                </div>
              )
            })}
          </div>
          <p className="text-white/40 text-xs sm:text-sm font-medium tracking-wide">
            One product lifecycle. One connected approach.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
