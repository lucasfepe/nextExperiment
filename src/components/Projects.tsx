'use client'
import { useState } from 'react'

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
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      image: "/assets/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://project1.com"
    },
    // Add more projects as needed
  ]);

  return (
    <section id="projects" className="projects section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="img-fluid"
              />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
