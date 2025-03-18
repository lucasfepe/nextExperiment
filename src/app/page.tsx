import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import WorkHistory from '@/components/WorkHistory'
import Contact from '@/components/Contact'

export default function Home() {

  return (
    <main className="main">
      <Navigation />
      <div className="main-container">
        <Hero />
        <div className="horizontal-container">
          <About />
          <Projects />
          <WorkHistory />
          <Contact />
        </div>
      </div>
    </main>
  )
}
