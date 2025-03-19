'use client'
import { useRef, useEffect } from 'react'
import styles from './styles.module.css';
import { SectionArrowNext } from '@/components/common';
import { SectionArrowPrevious } from '@/components/common';
import { GitContributions } from '../GitContributions';
import { Showcase } from '@/components/Showcase';

export default function Projects() {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (h2Ref.current) {
      const el = h2Ref.current;
      const styles = window.getComputedStyle(el);
      const height = el.offsetHeight +
        parseInt(styles.marginTop) +
        parseInt(styles.marginBottom);

      document.documentElement.style.setProperty('--h2-total-height', `${height}px`);
    }
  }, []);

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <h2 ref={h2Ref} className={styles.title}>I do it for fun...</h2>
      <div className={styles.horizontalContainer}>
        <GitContributions />
        <Showcase />
      </div>
      <SectionArrowNext sectionId="projects" />
      <SectionArrowPrevious sectionId="projects" />
    </section>
  );
}
