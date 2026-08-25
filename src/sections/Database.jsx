import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineCheckCircle,
  HiOutlineArrowPath,
  HiOutlineShieldCheck,
  HiArrowUpRight,
  HiOutlineXMark,
} from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'

const backupSteps = ['MongoDB', 'Backup', 'Compress', 'Cloud', 'Verify']

const progressItems = [
  'Database backup 100% ✓',
  'Compression 100% ✓',
  'Cloud sync 100% ✓',
  'Verification 100% ✓',
]

export default function Database() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isVerified, setIsVerified] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => {
        if (prev < progressItems.length - 1) {
          return prev + 1
        } else {
          setIsVerified(true)
          return prev
        }
      })
    }, 1200)
    return () => clearInterval(timer)
  }, [])

  const restart = () => {
    setIsVerified(false)
    setActiveIdx(0)
  }

  return (
    <SectionWrapper id="database" className="section-padding bg-[#f8f9fb] text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <span className="inline-block text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            Data Resilience
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#0a0f1e] leading-[1.05] uppercase tracking-tight mb-3">
            PRODUCTION DATA<br />
            <span className="text-blue-600">NEEDS PROTECTION.</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl font-medium leading-relaxed mb-6">
            Automated MongoDB backups, scheduled execution, cloud synchronization, retention and verification for production applications.
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0f1e] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold transition-colors group shadow-sm"
          >
            <span>See Data Workflow</span>
            <HiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 2-Column Grid: Visual Flow & Live Progress Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Step Strip (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
            <div className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-4">
              Snapshot Pipeline
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold text-[#0a0f1e]">
              {backupSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-700">
                    {step}
                  </span>
                  {i < backupSteps.length - 1 && (
                    <span className="text-gray-300">&darr;</span>
                  )}
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-xs mt-6 leading-relaxed">
              Cron triggers automated dumps nightly, encrypted via TLS before rclone synchronizes archives with remote off-site cloud storage.
            </p>
          </div>

          {/* Progress Simulation Card (6 cols) */}
          <div className="lg:col-span-6 bg-[#0a0f1e] rounded-3xl p-6 sm:p-8 border border-white/10 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-cyan-400 font-bold">
                Automated Backup Stream
              </span>
              <button
                onClick={restart}
                className="text-[11px] font-mono text-white/40 hover:text-cyan-400 flex items-center gap-1"
                title="Restart backup animation"
              >
                <HiOutlineArrowPath className="w-3.5 h-3.5" />
                Restart
              </button>
            </div>

            <div className="space-y-2.5 font-mono text-xs mb-4 min-h-[120px]">
              {progressItems.slice(0, activeIdx + 1).map((item, idx) => (
                <div key={idx} className="text-emerald-400 flex items-center gap-2">
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {isVerified && (
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/50">Status:</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5">
                  <HiOutlineCheckCircle className="w-4 h-4" />
                  BACKUP VERIFIED
                </span>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Expandable Data Workflow Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-[#0a0f1e]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 z-10 text-left space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-bold text-[#0a0f1e] text-base sm:text-lg">
                  Production Backup Architecture
                </h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700"
                >
                  <HiOutlineXMark className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p><strong>1. Database Snapshot:</strong> mongodump executes against isolated MongoDB volume containers with zero table locking.</p>
                <p><strong>2. Compression &amp; Encryption:</strong> Archives are compressed via Tar+Gzip and sealed with AES checksum tokens.</p>
                <p><strong>3. Cloud Sync (rclone):</strong> TLS encrypted transfer pushes snapshots directly to off-site cloud bucket storage.</p>
                <p><strong>4. Retention Policy:</strong> Automated cron script purges backups older than 30 days to optimize storage footprint.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
