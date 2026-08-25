import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineServer,
  HiOutlineCircleStack,
  HiOutlineCpuChip,
  HiOutlineCommandLine,
  HiOutlineCheckCircle,
  HiOutlineArrowTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineSignal
} from 'react-icons/hi2'
import { SiReact, SiNodedotjs, SiMongodb, SiDocker } from 'react-icons/si'

export default function LogicCoreVisual() {
  const [activeTab, setActiveTab] = useState('pipeline')
  const [logs, setLogs] = useState([
    { text: 'system::init(mern_stack_v2)', time: '0.12s', ok: true },
    { text: 'mongodb::connect(atlas_shard_primary)', time: '0.34s', ok: true },
    { text: 'docker::container(proxy_nginx) UP', time: '0.58s', ok: true },
    { text: 'api::healthcheck [200 OK] 14ms', time: '0.82s', ok: true },
  ])
  const [packetPos, setPacketPos] = useState(0)
  const cardRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Packet animation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setPacketPos((prev) => (prev + 1) % 4)
    }, 1400)
    return () => clearInterval(timer)
  }, [])

  // Interactive 3D Tilt Effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x: x * 14, y: -y * 14 })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  const nodes = [
    { id: 'client', name: 'React Client', icon: SiReact, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
    { id: 'server', name: 'Node.js API', icon: SiNodedotjs, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
    { id: 'db', name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
    { id: 'ops', name: 'Docker VPS', icon: SiDocker, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  ]

  return (
    <div
      className="relative w-full max-w-[460px] mx-auto py-2 perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient background glow */}
      <div
        className="absolute -inset-2 rounded-3xl opacity-40 blur-2xl -z-10 pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #3b82f6 0%, #6366f1 50%, transparent 80%)',
          transform: `translate3d(${mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px, 0)`,
        }}
        aria-hidden="true"
      />

      {/* Main Glassmorphism Card */}
      <motion.div
        ref={cardRef}
        animate={{
          rotateX: mousePos.y,
          rotateY: mousePos.x,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        className="relative rounded-3xl border border-white/15 bg-[#0e1628]/85 backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-blue-950/60 text-left overflow-hidden select-none"
      >
        {/* Subtle top glare reflection */}
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Header with status badge and tab switcher */}
        <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
              Core Engine · Online
            </span>
          </div>

          <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-xl border border-white/[0.08] text-[11px] font-medium">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'pipeline'
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-900/40'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Flow
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'terminal'
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-900/40'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Logs
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'metrics'
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-900/40'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Metrics
            </button>
          </div>
        </div>

        {/* Tab 1: Live Interactive Architecture Pipeline */}
        {activeTab === 'pipeline' && (
          <div className="space-y-4">
            {/* Top Node Flow */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {nodes.map((node, index) => {
                const Icon = node.icon
                const isActive = packetPos === index
                return (
                  <motion.div
                    key={node.id}
                    animate={{
                      scale: isActive ? 1.03 : 1,
                      borderColor: isActive ? 'rgba(96, 165, 250, 0.7)' : 'rgba(255, 255, 255, 0.08)',
                    }}
                    transition={{ duration: 0.3 }}
                    className={`relative p-3.5 rounded-2xl border ${node.border} ${node.bg} backdrop-blur-sm flex items-center gap-3 transition-all duration-300`}
                  >
                    {isActive && (
                      <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400" />
                      </span>
                    )}

                    <div className={`p-2 rounded-xl bg-white/[0.08] ${node.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white tracking-wide truncate">
                        {node.name}
                      </div>
                      <div className="text-[10px] font-mono text-white/50 flex items-center gap-1">
                        <HiOutlineSignal className="w-3 h-3 text-emerald-400" />
                        <span>Active</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Central Architecture Highway Visualizer */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] font-mono">
              <div className="flex items-center justify-between text-[11px] text-white/70 mb-2">
                <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                  <HiOutlineBolt className="w-3.5 h-3.5" />
                  <span>Pipeline Pulse</span>
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  99.98% SLA
                </span>
              </div>

              {/* Progress bars / latency indicators */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] text-white/50">
                  <span>API Response: 12ms</span>
                  <span>Payload: 4.2 KB</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      ease: 'easeInOut',
                    }}
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-cyan-300 rounded-full"
                  />
                </div>
              </div>

              {/* Micro badge strip */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/[0.06] text-center text-[10px]">
                <div className="bg-white/[0.04] p-1.5 rounded-lg border border-white/[0.04]">
                  <span className="text-white/40 block">Build</span>
                  <span className="text-white font-bold">Vite 8</span>
                </div>
                <div className="bg-white/[0.04] p-1.5 rounded-lg border border-white/[0.04]">
                  <span className="text-white/40 block">Server</span>
                  <span className="text-white font-bold">Express</span>
                </div>
                <div className="bg-white/[0.04] p-1.5 rounded-lg border border-white/[0.04]">
                  <span className="text-white/40 block">Host</span>
                  <span className="text-white font-bold">Ubuntu VPS</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Live Terminal Logs */}
        {activeTab === 'terminal' && (
          <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.08] font-mono text-[11px] space-y-2 min-h-[195px] flex flex-col justify-center">
            <div className="flex items-center gap-1.5 pb-2 mb-1 border-b border-white/[0.08] text-[10px] text-white/40">
              <HiOutlineCommandLine className="w-3.5 h-3.5 text-blue-400" />
              <span>production_daemon.log</span>
            </div>
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-center justify-between gap-2 text-white/80">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="text-emerald-400">➜</span>
                  <span className="truncate">{log.text}</span>
                </div>
                <span className="text-white/30 text-[10px]">{log.time}</span>
              </div>
            ))}
            <div className="flex items-center gap-1 text-blue-400 text-[10px] pt-1">
              <span className="animate-pulse">_</span>
              <span>listening on port 5000</span>
            </div>
          </div>
        )}

        {/* Tab 3: System Telemetry Metrics */}
        {activeTab === 'metrics' && (
          <div className="space-y-2.5 min-h-[195px] flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <span className="text-[10px] text-white/50 block font-mono">Uptime Reliability</span>
                <span className="text-lg font-black text-white">99.98%</span>
                <span className="text-[9px] text-emerald-400 block mt-0.5">● Continuous Health</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <span className="text-[10px] text-white/50 block font-mono">Avg API Latency</span>
                <span className="text-lg font-black text-white">18 ms</span>
                <span className="text-[9px] text-cyan-400 block mt-0.5">⚡ Fast Queries</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  <HiOutlineShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Automated Backups</div>
                  <div className="text-[10px] text-white/50 font-mono">Daily MongoDB Snapshot</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                ACTIVE
              </span>
            </div>
          </div>
        )}

        {/* Bottom Floating Stats Pill */}
        <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-white/60">
          <span className="flex items-center gap-1.5 text-xs text-white font-semibold">
            <HiOutlineCircleStack className="w-3.5 h-3.5 text-blue-400" />
            <span>Full-Stack &amp; DevOps Ready</span>
          </span>
          <span className="font-mono text-[10px] text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
            Node · Mongo · Docker
          </span>
        </div>
      </motion.div>
    </div>
  )
}
