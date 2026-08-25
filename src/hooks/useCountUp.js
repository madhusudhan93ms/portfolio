import { useEffect, useRef, useState } from 'react'

/**
 * Counts up to `target` (number) when the element comes into view.
 * For non-numeric targets, just returns the value immediately.
 */
export function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(typeof target === 'number' ? 0 : target)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (typeof target !== 'number') return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(target)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
