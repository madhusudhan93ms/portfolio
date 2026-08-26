import { useEffect } from 'react'
import Home from './pages/Home'

export default function App() {
  useEffect(() => {
    const glow = document.createElement('div')
    glow.className = 'pointer-glow'
    document.body.appendChild(glow)

    let frame = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let targetX = x
    let targetY = y

    const render = () => {
      x += (targetX - x) * 0.12
      y += (targetY - y) * 0.12
      glow.style.transform = `translate3d(${x - 180}px, ${y - 180}px, 0)`
      frame = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.5
        ? requestAnimationFrame(render)
        : 0
    }
    const move = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      if (!frame) frame = requestAnimationFrame(render)
    }

    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      if (frame) cancelAnimationFrame(frame)
      glow.remove()
    }
  }, [])

  return <div className="site-shell"><Home /></div>
}
