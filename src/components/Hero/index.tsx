'use client';
import { useRef } from 'react';
import styles from './styles.module.css';
import { useHeroAnimations } from '@/components/Hero/hooks';
import { useScrollButton } from '@/components/Hero/hooks';
import { ScrollButton } from './ScrollButton';

export default function Hero() {
  const scrollButtonRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useHeroAnimations(titleRef, textRef);
  useScrollButton(scrollButtonRef);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={`${styles.hero} section`}>
      <div className="hero-content">
        <h1 ref={titleRef} className={styles['hero-content-title']}>
          Hi, I'm Luke
        </h1>
        <p ref={textRef} className={styles['hero-content-text']}>
          I'm a Web Developer
        </p>
      </div>
      <ScrollButton ref={scrollButtonRef} onClick={scrollToNext} />
    </section>
  );
}