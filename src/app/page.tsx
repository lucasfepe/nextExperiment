'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

import { useEffect } from 'react';
import { initSideScroll } from '@/hooks/useSideArrows';
import { initScrollEffects } from '@/hooks/useScroll'



export default function Home() {
  useEffect(() => {
    initSideScroll();
    initScrollEffects();
  }, []);
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
