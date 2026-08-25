import { motion } from 'framer-motion'
import { HiOutlineTrophy, HiOutlineDocumentText, HiOutlineCodeBracket } from 'react-icons/hi2'
import SectionWrapper, { stagger, fadeUpItem } from '../components/SectionWrapper'
import { achievements } from '../data/experience'

const iconMap = {
  trophy: HiOutlineTrophy,
  'file-text': HiOutlineDocumentText,
  code: HiOutlineCodeBracket,
}

const colorMap = {
  trophy: 'bg-amber-50 border-amber-100 text-amber-600',
  'file-text': 'bg-blue-50 border-blue-100 text-blue-600',
  code: 'bg-green-50 border-green-100 text-green-600',
}

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0a0f1e] leading-tight">
            Milestones & recognition
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {achievements.map((item) => {
            const Icon = iconMap[item.icon] || HiOutlineTrophy
            return (
              <motion.div
                key={item.title}
                variants={fadeUpItem}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4 ${colorMap[item.icon]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[#0a0f1e] font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-1.5 rounded-lg border border-blue-200 text-blue-600 text-xs font-semibold hover:bg-blue-50 transition-colors"
                  >
                    View →
                  </a>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
