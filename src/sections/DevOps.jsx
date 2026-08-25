import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineServerStack,
  HiOutlineCube,
  HiOutlineGlobeAlt,
  HiOutlineCommandLine,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineArrowPath,
} from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'

// 8-stage horizontal pipeline
const pipelineSteps = [
  { label: 'Developer', icon: '👨‍💻' },
  { label: 'GitHub', icon: '🐙' },
  { label: 'GitHub Actions', icon: '⚙️' },
  { label: 'Build & Test', icon: '🔨' },
  { label: 'Docker', icon: '🐳' },
  { label: 'Ubuntu VPS', icon: '🖥️' },
  { label: 'Nginx', icon: '🌐' },
  { label: 'Production', icon: '🚀' },
]

// Deployment capabilities on left
const capabilities = [
  {
    icon: HiOutlineServerStack,
    title: 'Ubuntu Linux VPS Hosting',
    desc: 'Server hardening, SSH key authorization, UFW firewall configuration, and process management.',
  },
  {
    icon: HiOutlineCube,
    title: 'Docker & Docker Compose',
    desc: 'Multi-container orchestration, isolated bridge networks, and persistent data volumes.',
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'Nginx Reverse Proxy & SSL',
    desc: 'HTTP to HTTPS redirection, Certbot SSL automation, API proxying, and WebSocket support.',
  },
  {
    icon: HiOutlineCommandLine,
    title: 'Automated CI/CD Pipelines',
    desc: 'GitHub Actions workflows for automated linting, image build, and zero-downtime deployment.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Production Support & Monitoring',
    desc: 'Container log inspection, resource monitoring, automated health checks, and rapid incident response.',
  },
]

// Terminal commands sequence
const terminalSteps = [
  {
    cmd: 'git pull origin main',
    output: 'From github.com:org/repo\n * branch            main     -> FETCH_HEAD\nUpdating 8e2b10a..f94c31d\nFast-forward (14 files changed)',
  },
  {
    cmd: 'docker compose build',
    output: '[+] Building 4.8s (12/12) FINISHED\n => [backend internal] load build definition from Dockerfile\n => [backend] exporting layers to image\n => [backend] naming to docker.io/library/app-backend:latest',
  },
  {
    cmd: 'docker compose up -d',
    output: '[+] Running 3/3\n ✔ Container app-mongodb   Started\n ✔ Container app-backend   Started\n ✔ Container app-nginx     Started',
  },
  {
    cmd: 'docker compose ps',
    output: 'NAME                IMAGE               COMMAND             SERVICE    STATUS              PORTS\napp-nginx           nginx:alpine        "nginx -g..."       nginx      Up 2 minutes        0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp\napp-backend         app-backend:latest  "npm start"         backend    Up 2 minutes (healthy) 0.0.0.0:5000->5000/tcp\napp-mongodb         mongo:6.0           "docker-entry..."   mongodb    Up 2 minutes        27017/tcp',
  },
  {
    cmd: 'docker compose logs backend',
    output: '[INFO] Express API Gateway initialized on port 5000\n[INFO] Connected to MongoDB production database\n[INFO] Health check endpoint /api/health -> 200 OK (latency: 1.1ms)',
  },
]

export default function DevOps() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [activePipelineStep, setActivePipelineStep] = useState(0)
  const [isProductionOnline, setIsProductionOnline] = useState(false)

  // Synchronized pipeline animation
  useEffect(() => {
    const pipeTimer = setInterval(() => {
      setActivePipelineStep((prev) => (prev + 1) % pipelineSteps.length)
    }, 1500)
    return () => clearInterval(pipeTimer)
  }, [])

  // Terminal command stepping
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => {
        if (prev < terminalSteps.length - 1) {
          return prev + 1
        } else {
          setIsProductionOnline(true)
          return prev
        }
      })
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  const restartTerminal = () => {
    setIsProductionOnline(false)
    setActiveStepIndex(0)
  }

  return (
    <SectionWrapper id="devops" className="section-padding bg-[#0a0f1e] text-white text-left overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <span className="inline-block text-cyan-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            DevOps &amp; Infrastructure
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white leading-[1.05] uppercase tracking-tight mb-3">
            FROM CODE<br />
            <span className="text-cyan-400">TO PRODUCTION.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl font-medium">
            I don’t stop after development — I deploy, maintain and protect the application in production.
          </p>
        </div>

        {/* 1. Horizontal Pipeline Flow Row with Active Glowing Step */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl glass-dark border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="text-white font-bold text-xs sm:text-sm">
                Production Deployment Pipeline
              </span>
            </div>
            <span className="text-xs font-mono text-cyan-400">Automated Delivery Active</span>
          </div>

          {/* Step Badges with Active Beacon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {pipelineSteps.map((step, i) => {
              const isCurrent = activePipelineStep === i
              return (
                <div
                  key={step.label}
                  className={`p-3 rounded-xl transition-all duration-300 text-center flex flex-col items-center justify-center group ${
                    isCurrent
                      ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20 scale-105'
                      : 'bg-white/[0.04] border border-white/10 text-white/80 hover:border-cyan-400/50 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="text-lg mb-1 group-hover:scale-110 transition-transform">{step.icon}</div>
                  <div className="font-bold text-xs">{step.label}</div>
                  <span className={`text-[10px] font-mono mt-1 ${isCurrent ? 'text-cyan-300 font-bold' : 'text-cyan-400/70'}`}>
                    0{i + 1}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Flow Progress Bar */}
          <div className="mt-4 w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden relative">
            <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40 animate-shimmer" />
            </div>
          </div>
        </div>

        {/* 2. Two-Column Grid: Deployment Capabilities (Left) & Ubuntu Terminal (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Left Column: Deployment Capabilities List (6 cols) */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
              Deployment Capabilities
            </div>

            {capabilities.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/50 hover:bg-white/[0.06] hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#0a0f1e] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-0.5 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                    <p className="text-white/55 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Clean Dark Terminal Emulator (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/15 bg-[#0d1117] shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-white/40 text-xs font-mono ml-2">ubuntu@vps-node:~/app</span>
              </div>

              <button
                onClick={restartTerminal}
                className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-mono transition-colors cursor-pointer"
                title="Restart deployment simulation"
              >
                <HiOutlineArrowPath className="w-3.5 h-3.5" />
                Re-run
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs space-y-3 min-h-[360px] max-h-[400px] overflow-y-auto">
              {terminalSteps.slice(0, activeStepIndex + 1).map((step) => (
                <div key={step.cmd} className="space-y-1">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <span className="text-emerald-400">root@vps:~$</span>
                    <span>{step.cmd}</span>
                  </div>
                  <div className="text-white/65 text-[11px] whitespace-pre font-mono leading-relaxed pl-3 border-l border-white/10">
                    {step.output}
                  </div>
                </div>
              ))}

              {isProductionOnline ? (
                <div className="mt-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-between shadow-lg shadow-emerald-500/10">
                  <div className="flex items-center gap-2 font-bold text-xs">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Deployment Successful</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-[10px] font-mono font-bold tracking-wider">
                    PRODUCTION ONLINE
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-emerald-400 text-xs pt-1">
                  <span>root@vps:~$</span>
                  <span className="w-2 h-4 bg-cyan-400/80 cursor-blink" />
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </SectionWrapper>
  )
}
