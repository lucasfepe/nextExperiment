import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="main-container">
        <Hero />
        <div className="horizontal-container">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  )
}
