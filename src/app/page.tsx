import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero/HeroSection'
import About from '@/components/About/AboutSection'
import Projects from '@/components/Projects/ProjectsSection'
import Contact from '@/components/Contact/ContactSection'
import { Section } from '@/components/common/Section';

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
