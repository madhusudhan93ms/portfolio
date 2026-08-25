import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { HiArrowUpRight } from 'react-icons/hi2'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { navLinks, personal } from '../data/personal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  // Track active section
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observers = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0f1e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            
            {/* Brand Logo */}
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-2.5 group text-left"
              aria-label="Madhusudhan N — Home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-base shadow-md group-hover:shadow-blue-500/40 transition-shadow">
                M
              </div>
              <span className="text-white font-bold text-base tracking-tight group-hover:text-blue-400 transition-colors">
                Madhusudhan
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-blue-600 shadow-sm shadow-blue-600/50'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </nav>

            {/* Right Side CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all duration-200 shadow-md shadow-blue-900/30 hover:-translate-y-0.5"
              >
                <span>Resume</span>
                <HiArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Fullscreen Clean Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-[#0a0f1e]/95 flex flex-col justify-between pt-24 pb-12 px-6"
          >
            {/* Nav List */}
            <nav className="flex flex-col gap-2 my-auto" aria-label="Mobile navigation">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 text-2xl font-black text-white hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 text-2xl font-black text-blue-400 hover:text-blue-300"
              >
                <span>Resume</span>
                <HiArrowUpRight className="w-6 h-6" />
              </motion.a>
            </nav>

            {/* Social Links Underneath */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm transition-colors group"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
                <HiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm transition-colors group"
              >
                <FiLinkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <HiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
