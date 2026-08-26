import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiArrowUpRight } from 'react-icons/hi2'
import { personal } from '../data/personal'

gsap.registerPlugin(ScrollTrigger)

export default function PremiumHero() {
  const root = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline()
        .from('.ph-eyebrow', { opacity: 0, y: 12 })
        .from('.ph-line span', { y: '115%', stagger: 0.1, duration: 0.75, ease: 'power4.out' }, '-=.2')
        .from('.ph-copy, .ph-actions, .ph-social', { opacity: 0, y: 18, stagger: 0.1 }, '-=.45')
        .from('.ph-portrait', { opacity: 0, scale: 1.08, clipPath: 'inset(100% 0 0 0)', duration: 1 }, '-=.8')

      gsap.to('.ph-content', {
        scale: 0.95,
        opacity: 0.45,
        scrollTrigger: { trigger: root.current, start: '65% center', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => context.revert()
  }, [])

  return (
    <section id="home" className="premium-hero" ref={root}>
      <div className="ph-grid" aria-hidden="true" />
      <div className="ph-shell ph-content">
        <div className="ph-text">
          <p className="ph-eyebrow"><i /> MERN DEVELOPER · BA · DEVOPS</p>
          <h1>{['FROM', 'REQUIREMENT', 'TO PRODUCTION.'].map((line) => <span className="ph-line" key={line}><span>{line}</span></span>)}</h1>
          <p className="ph-lead">I design, build, deploy and maintain real-world software products.</p>
          <p className="ph-copy">MERN Stack Developer working across full-stack development, Business Analysis, CI/CD, VPS deployment and production application maintenance.</p>
          <div className="ph-actions">
            <a className="ph-button ph-primary" href="#work">Explore My Work <HiArrowUpRight /></a>
            <a className="ph-button" href="#contact">Let's Talk <HiArrowUpRight /></a>
          </div>
          <div className="ph-social">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="ph-visual">
          <div className="ph-orbit ph-orbit-one" /><div className="ph-orbit ph-orbit-two" />
          <div className="ph-portrait-wrap"><img className="ph-portrait" src={personal.heroImage} alt="Madhusudhan N" /></div>
          {['React', 'MERN', 'CI/CD', 'VPS'].map((label, index) => <span className={`ph-float ph-f${index}`} key={label}>{label}</span>)}
        </div>
      </div>
      <div className="ph-lifecycle">UNDERSTAND → BUILD → DEPLOY → MAINTAIN → PROTECT</div>
    </section>
  )
}
