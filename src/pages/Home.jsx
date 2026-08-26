import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import TechMarquee from '../components/TechMarquee'
import PremiumHero from '../sections/PremiumHero'
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
        <PremiumHero />
        <TechMarquee />
        <Projects />
        <Process />
        <BASection />
        <DevOps />
        <Database />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
