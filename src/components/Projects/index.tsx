'use client'
import { useState } from 'react'
import Image from "next/image";
import styles from './styles.module.css';
import { SectionArrow } from '@/components/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export default function Projects() {
  const [projects] = useState<Project[]>([
    // Add your projects here
    // {
    //   id: 1,
    //   title: "Project 1",
    //   description: "Description of project 1",
    //   image: "/assets/images/project1.jpg",
    //   technologies: ["React", "Node.js", "MongoDB"],
    //   link: "https://project1.com"
    // },
    // Add more projects as needed
  ]);

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <h2>My Projects</h2>
      <div className={styles['project-grid']}>

      </div>
      <SectionArrow sectionId="projects" />
    </section>
  );
}
