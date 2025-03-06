'use client'
import { useState } from 'react'
// Cool: added husky to make sure can't push unless eslint passes
// disable rules for exceptions
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <div className={styles.horizontalContainer}>
        
      <GitContributions />
      <Showcase />
      </div>
      <SectionArrow sectionId="projects" />
    </section>
  );
}
