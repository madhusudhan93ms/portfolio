import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/**
 * Wraps a section with a fade-up entrance animation.
 * Also handles the section id for navigation anchors.
 */
export default function SectionWrapper({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  )
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
