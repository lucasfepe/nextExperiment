import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero/Main'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { Section } from '@/components/Section';

export default function Home() {
  
  return (
    <main>
      <Navigation />
      <div className="main-container">
        <Hero />
        <div className="horizontal-container">
          <Section id="about" showArrow={true}>
            <About />
          </Section>
          <Section id="projects" showArrow={true}>
            <Projects />
          </Section>
          <Section id="contact" showArrow={false}>
            <Contact />
          </Section>
        </div>
      </div>
    </main>
  )
}
