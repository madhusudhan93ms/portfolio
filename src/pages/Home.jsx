import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import TechMarquee from '../components/TechMarquee'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Process from '../sections/Process'
import BASection from '../sections/BASection'
import DevOps from '../sections/DevOps'
import Database from '../sections/Database'
import Skills from '../sections/Skills'
import About from '../sections/About'
import Education from '../sections/Education'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        {/* 01 Hero — Who I am & Positioning */}
        <Hero />

        {/* Dynamic Tech Strip */}
        <TechMarquee />

        {/* 02 Selected Work — What I have built (01 to 04 Cinematic Panels) */}
        <Projects />

        {/* 03 Process — How I approach software (4 Large Stages) */}
        <Process />

        {/* 04 Business Analysis — From Conversation to Software */}
        <BASection />

        {/* 05 DevOps — From Commit to Production */}
        <DevOps />

        {/* 06 Production Data — Protecting Production Data */}
        <Database />

        {/* 07 Technology — Compact MERN Ecosystem */}
        <Skills />

        {/* 08 About + Experience — Who I am professionally */}
        <About />

        {/* 09 Education + Achievements — Background & Credibility */}
        <Education />

        {/* 10 Contact — Let's Build Something Useful */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
