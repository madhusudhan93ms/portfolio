import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 origin-left shadow-[0_0_12px_#38bdf8]"
        style={{ scaleX }}
      />
    </div>
  )
}
