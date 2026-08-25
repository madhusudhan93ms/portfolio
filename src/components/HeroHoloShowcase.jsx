import { useState, useRef } from 'react'
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import {
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineSignal,
  HiOutlineShieldCheck
} from 'react-icons/hi2'
import { SiReact, SiDocker, SiNodedotjs, SiMongodb } from 'react-icons/si'

export default function HeroHoloShowcase() {
  const containerRef = useRef(null)
  const [activeBadge, setActiveBadge] = useState(null)

  // ─── 3D Physics Springs for Mouse Parallax ───────────────────────────────
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 24, stiffness: 190 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig)

  // Light angle reflection
  const lightX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, 80]), springConfig)
  const lightY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, 70]), springConfig)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setActiveBadge(null)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[440px] sm:max-w-[480px] mx-auto py-4 flex items-center justify-center select-none"
      style={{ perspective: 1400 }}
    >
      {/* ── 3D Master Transformation Container ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full flex items-center justify-center"
      >
        {/* ── 1. Holographic Cybernetic Background Rings & Halo ── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
          style={{ transform: 'translateZ(-50px)' }}
          aria-hidden="true"
        >
          {/* Glowing Ambient Core Nebula */}
          <div
            className="w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full opacity-45 blur-[85px]"
            style={{
              background: 'radial-gradient(circle, #3b82f6 0%, #06b6d4 35%, #6366f1 65%, transparent 80%)',
            }}
          />

          {/* Primary 3D Orbital Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full border border-cyan-400/25 border-dashed"
            style={{ transform: 'rotateX(62deg) rotateY(12deg)' }}
          />

          {/* Secondary 3D Counter-Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full border border-blue-500/20 border-dotted"
            style={{ transform: 'rotateY(58deg) rotateX(15deg)' }}
          />

          {/* 3D Geometric Hexagon Reticle */}
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[260px] sm:w-[300px] h-[260px] sm:h-[300px] rounded-full border border-indigo-400/15"
            style={{ transform: 'rotateX(75deg)' }}
          />
        </div>

        {/* ── 2. Cinematic 3D Floating Portrait & Hologram Projection ── */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [0.98, 1.025, 0.98],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transform: 'translateZ(25px)',
            transformStyle: 'preserve-3d',
          }}
          className="relative w-full flex flex-col items-center justify-end"
        >
          {/* Portrait Container */}
          <div className="relative w-full max-w-[320px] sm:max-w-[350px] flex flex-col items-center justify-end">
            
            {/* The Portrait Image with clean rounded card framing & smooth feathering */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-white/15 bg-[#070A10]/60 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
              <img
                src="/hero-image.png"
                alt="Madhusudhan N — Full Stack Developer & Business Analyst"
                className="w-full h-auto max-h-[420px] sm:max-h-[460px] object-cover object-top pointer-events-none z-10"
                loading="eager"
              />

              {/* Subtle bottom gradient to blend into card floor */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-transparent to-transparent opacity-60 pointer-events-none z-12"
                aria-hidden="true"
              />

              {/* Holographic Cyan Shimmer Beam Sweep */}
              <motion.div
                animate={{ y: ['-120%', '220%'] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.8 }}
                className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent pointer-events-none z-15"
                aria-hidden="true"
              />

              {/* Corner HUD Bracket Indicators */}
              <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400/50 pointer-events-none z-20" />
              <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400/50 pointer-events-none z-20" />
            </div>

            {/* ── 3. High-Gloss Obsidian Mirror Reflection Floor Effect ── */}
            <div className="relative w-full h-[90px] sm:h-[110px] -mt-2 overflow-hidden pointer-events-none flex justify-center">
              {/* Reflected Mirror Image (Inverted & Filtered) */}
              <div
                className="w-full rounded-3xl overflow-hidden flex items-start justify-center origin-top select-none"
                style={{
                  transform: 'scaleY(-1)',
                  opacity: 0.35,
                  filter: 'blur(2px) contrast(110%) brightness(0.9)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 80%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 80%)',
                }}
              >
                <img
                  src="/hero-image.png"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-auto object-cover object-top"
                />
              </div>

              {/* Mirror Floor Specular Horizon Waterline Glow */}
              <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent blur-[0.5px] shadow-[0_0_16px_#38bdf8]" />
              
              {/* Floor Perspective Radial Grid Reflection */}
              <div
                className="absolute top-0 inset-x-0 h-full opacity-35 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at top, rgba(6,182,212,0.35) 0%, rgba(59,130,246,0.15) 50%, transparent 80%)',
                }}
              />

              {/* Dynamic Ripple Wave Reflection */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scaleX: [0.8, 1.15, 0.8],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-2 w-4/5 h-4 rounded-full bg-cyan-400/25 blur-md"
              />
            </div>
          </div>

          {/* ── 4. Cybernetic Hologram Pedestal Base ── */}
          <div
            className="w-[280px] sm:w-[320px] h-[36px] -mt-6 relative flex items-center justify-center pointer-events-none"
            style={{ transform: 'translateZ(10px) rotateX(70deg)' }}
          >
            {/* Outer Glowing Base Ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.4)] bg-gradient-to-b from-cyan-500/10 to-transparent" />
            {/* Inner Concentric Pulse Ring */}
            <div className="absolute inset-2 rounded-full border border-blue-400/30 animate-pulse" />
            {/* Center Core Emitter */}
            <div className="w-16 h-4 rounded-full bg-cyan-400/30 blur-sm" />
          </div>
        </motion.div>

        {/* ── 4. Interactive 3D Holographic Badges with Live Telemetry ── */}

        {/* Badge 1: Top-Left (MERN Architect) */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(65px)' }}
          onClick={() => setActiveBadge(activeBadge === 'mern' ? null : 'mern')}
          onMouseEnter={() => setActiveBadge('mern')}
          className="absolute top-2 -left-2 sm:-left-6 p-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#0b1329]/95 backdrop-blur-xl border border-cyan-500/35 shadow-xl shadow-cyan-950/60 text-left flex items-center gap-3 z-30 cursor-pointer hover:border-cyan-400 hover:scale-105 transition-all group"
        >
          <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400 group-hover:bg-cyan-500/25 transition-colors">
            <SiReact className="w-4 h-4 sm:w-5 sm:h-5 animate-spin-slow" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
              <span>MERN Stack</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-cyan-300/80">React 19 · Node · Mongo</div>
          </div>

          {/* Interactive Popover */}
          <AnimatePresence>
            {activeBadge === 'mern' && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="absolute top-full left-0 mt-2 w-48 p-2.5 rounded-xl bg-[#070d1e] border border-cyan-500/40 shadow-2xl text-[10px] text-white/80 font-mono z-40"
              >
                <div className="text-cyan-400 font-bold mb-1">⚡ Core Stack</div>
                <div>• React / Vite / Custom Hooks</div>
                <div>• Express REST APIs</div>
                <div>• MongoDB Atlas Aggregations</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Badge 2: Top-Right (DevOps & VPS) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4.9, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          style={{ transform: 'translateZ(60px)' }}
          onClick={() => setActiveBadge(activeBadge === 'devops' ? null : 'devops')}
          onMouseEnter={() => setActiveBadge('devops')}
          className="absolute top-14 -right-2 sm:-right-6 p-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#0b1329]/95 backdrop-blur-xl border border-blue-500/35 shadow-xl shadow-blue-950/60 text-left flex items-center gap-3 z-30 cursor-pointer hover:border-blue-400 hover:scale-105 transition-all group"
        >
          <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400 group-hover:bg-blue-500/25 transition-colors">
            <SiDocker className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
              <span>DevOps &amp; VPS</span>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/15 px-1 py-0.2 rounded">LIVE</span>
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-blue-300/80">Docker · Nginx · CI/CD</div>
          </div>

          {/* Interactive Popover */}
          <AnimatePresence>
            {activeBadge === 'devops' && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="absolute top-full right-0 mt-2 w-52 p-2.5 rounded-xl bg-[#070d1e] border border-blue-500/40 shadow-2xl text-[10px] text-white/80 font-mono z-40"
              >
                <div className="text-blue-400 font-bold mb-1">🚀 Infra Pipeline</div>
                <div>• Linux VPS Server Ops</div>
                <div>• Docker Compose Containers</div>
                <div>• GitHub Actions CI/CD</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Badge 3: Bottom-Left (Business Analyst) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          style={{ transform: 'translateZ(70px)' }}
          onClick={() => setActiveBadge(activeBadge === 'ba' ? null : 'ba')}
          onMouseEnter={() => setActiveBadge('ba')}
          className="absolute bottom-24 -left-2 sm:-left-6 p-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#0b1329]/95 backdrop-blur-xl border border-indigo-500/35 shadow-xl shadow-indigo-950/60 text-left flex items-center gap-3 z-30 cursor-pointer hover:border-indigo-400 hover:scale-105 transition-all group"
        >
          <div className="p-2 rounded-xl bg-indigo-500/15 text-indigo-400 group-hover:bg-indigo-500/25 transition-colors">
            <HiOutlineSparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-white tracking-wide">Business Analyst</div>
            <div className="text-[9px] sm:text-[10px] font-mono text-indigo-300/80">BRD · SRS · User Flows</div>
          </div>

          {/* Interactive Popover */}
          <AnimatePresence>
            {activeBadge === 'ba' && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -5, scale: 0.95 }}
                className="absolute bottom-full left-0 mb-2 w-52 p-2.5 rounded-xl bg-[#070d1e] border border-indigo-500/40 shadow-2xl text-[10px] text-white/80 font-mono z-40"
              >
                <div className="text-indigo-400 font-bold mb-1">📊 Product Discovery</div>
                <div>• Stakeholder Requirements</div>
                <div>• Architecture &amp; UML Flows</div>
                <div>• Sprint Breakdown &amp; Scope</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Badge 4: Bottom-Right (Production Reliability) */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
          style={{ transform: 'translateZ(55px)' }}
          onClick={() => setActiveBadge(activeBadge === 'sla' ? null : 'sla')}
          onMouseEnter={() => setActiveBadge('sla')}
          className="absolute bottom-12 -right-2 sm:-right-6 p-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#0b1329]/95 backdrop-blur-xl border border-emerald-500/35 shadow-xl shadow-emerald-950/60 text-left flex items-center gap-3 z-30 cursor-pointer hover:border-emerald-400 hover:scale-105 transition-all group"
        >
          <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 group-hover:bg-emerald-500/25 transition-colors">
            <HiOutlineShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
              <span>Production SLA</span>
              <span className="text-[9px] font-mono text-emerald-300 bg-emerald-500/20 px-1.5 py-0.2 rounded font-bold">99.9%</span>
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-emerald-300/80">Automated Snapshots</div>
          </div>

          {/* Interactive Popover */}
          <AnimatePresence>
            {activeBadge === 'sla' && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -5, scale: 0.95 }}
                className="absolute bottom-full right-0 mb-2 w-48 p-2.5 rounded-xl bg-[#070d1e] border border-emerald-500/40 shadow-2xl text-[10px] text-white/80 font-mono z-40"
              >
                <div className="text-emerald-400 font-bold mb-1">🛡️ Reliability Specs</div>
                <div>• Zero-Downtime Releases</div>
                <div>• Automated Backup Crons</div>
                <div>• Nginx Reverse Proxy</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </div>
  )
}
