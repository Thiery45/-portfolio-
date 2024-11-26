// ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, techStack, link }) => (
  <div className="project-card">
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Technologies : {techStack.join(", ")}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
      Voir sur GitHub
    </a>
  </div>
);

export default ProjectCard;
