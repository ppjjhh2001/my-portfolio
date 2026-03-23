// src/sections/Projects.tsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section style={{ padding: '100px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px', fontWeight: '800' }}>
        My Projects
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
}