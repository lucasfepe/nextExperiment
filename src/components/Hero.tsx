'use client'

import styles from '@/ui/hero.module.css';

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <section className={styles.hero}>
    <div className="hero-content">
      <h1 className={styles['hero-content-title']}>Hi, I'm Luke</h1>
      <p className={styles['hero-content-text']}>I'm a Web Developer</p>
    </div>

    <div className={styles['scroll-indicator']}>
      <button onClick={scrollToNext}>
        <i className="bi bi-chevron-down"></i>
      </button>
    </div>
  </section>
  );
}
