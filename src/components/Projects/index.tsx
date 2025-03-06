'use client'
import { useState, useRef, useEffect } from 'react'
import Image from "next/image";
import styles from './styles.module.css';
import { SectionArrow } from '@/components/common';
import { GitContributions } from '../GitContributions';
import { Showcase } from '@/components/Showcase';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

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
      <h2 ref={h2Ref}>My Projects</h2>
      <div className={styles.horizontalContainer}>
        <GitContributions />
        <Showcase />
      </div>
      <SectionArrow sectionId="projects" />
    </section>
  );
}
