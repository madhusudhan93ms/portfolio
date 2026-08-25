import { useState } from 'react'
import { HiArrowUpRight, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'
import SectionWrapper from '../components/SectionWrapper'
import { personal } from '../data/personal'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio Inquiry from ' + form.name
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <SectionWrapper id="contact" className="section-padding bg-[#0a0f1e] text-white text-left overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-cyan-400 text-xs sm:text-sm font-bold tracking-widest uppercase">
              Get in Touch
            </span>

            <h2 className="text-4xl sm:text-6xl font-black text-white leading-[1.05] uppercase tracking-tight">
              LET'S BUILD<br />
              <span className="text-cyan-400">SOMETHING USEFUL.</span>
            </h2>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md">
              Open to MERN development, React development, Business Analyst opportunities, product work and application operations.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-sm">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <HiOutlineEnvelope className="w-5 h-5 text-cyan-400" />
                <span>{personal.email}</span>
              </a>

              <a
                href={`tel:${personal.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <HiOutlinePhone className="w-5 h-5 text-cyan-400" />
                <span>{personal.phone}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-2 text-xs">
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
            </div>
          </div>

          {/* Right Column: Clean 4-Field Form (7 cols) */}
          <div className="lg:col-span-7 bg-white/[0.03] rounded-3xl p-6 sm:p-10 border border-white/[0.08] backdrop-blur-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="text-emerald-400 text-3xl font-black">Message Prepared!</div>
                <p className="text-white/60 text-sm">
                  Your email client has been launched with your message directed to {personal.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-white/60 font-medium">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-white/60 font-medium">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs text-white/60 font-medium">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs text-white/60 font-medium">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can I help with your project or team?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-900/40 group cursor-pointer"
                >
                  <span>Send Message</span>
                  <HiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </SectionWrapper>
  )
}
