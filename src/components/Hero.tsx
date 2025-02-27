'use client'

import { useEffect, useRef } from 'react';
import styles from '@/ui/hero.module.css';
import { fadeUpAnimation } from '@/hooks/useAnimations';
import { navigate } from '@/hooks/useNagivation';


export default function Hero() {
  // Use useRef instead of document.querySelector
  const scrollButtonRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Now we can use the refs instead of querySelector
    if (titleRef.current) {
      fadeUpAnimation(titleRef.current, 200);
    }
    if (textRef.current) {
      fadeUpAnimation(textRef.current, 800);
    }

    // Down Arrow functionality
    if (scrollButtonRef.current) {
      scrollButtonRef.current.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          navigate(null, aboutSection as HTMLElement);
        }
      });
    }

    // Cleanup event listener
    return () => {
      if (scrollButtonRef.current) {
        scrollButtonRef.current.removeEventListener('click', () => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            navigate(null, aboutSection as HTMLElement);
          }
        });
      }
    };
  }, []); // Empty dependency array means this runs once when component mounts

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className="hero-content">
        <h1 ref={titleRef} className={styles['hero-content-title']}>Hi, I'm Luke</h1>
        <p ref={textRef} className={styles['hero-content-text']}>I'm a Web Developer</p>
      </div>

      <div className={styles['scroll-indicator']}>
        <button
          ref={scrollButtonRef}
          onClick={scrollToNext}
          title="Scroll to next section"
          aria-label="Scroll to next section"
          type="button"
        >
          <i className="bi bi-chevron-down"></i>
        </button>

      </div>
    </section>
  );
}
