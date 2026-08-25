import { HiArrowUpRight } from 'react-icons/hi2'
import { personal } from '../data/personal'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0f1e] border-t border-white/[0.08] text-white/50 text-xs py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Minimal Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/[0.06] text-center sm:text-left">
          
          {/* Left: Name */}
          <div className="text-white font-bold text-sm tracking-wide">
            {personal.name}
          </div>

          {/* Middle: Professional Tagline */}
          <div className="text-white/60 font-medium">
            MERN Developer · BA · DevOps
          </div>

          {/* Right: Social External Links */}
          <div className="flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors group"
            >
              <span>GitHub</span>
              <HiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white/70 hover:text-blue-400 transition-colors group"
            >
              <span>LinkedIn</span>
              <HiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center text-white/30 text-[11px]">
          © {currentYear} Madhusudhan N. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
