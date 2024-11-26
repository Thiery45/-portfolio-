// Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Analyse de données de vente',
      description: 'Un projet pour prédire les tendances de vente en utilisant des modèles de régression.',
      techStack: ['Python', 'scikit-learn', 'pandas'],
      link: 'https://github.com/votreprofil/sales-analysis',
    },
    {
      title: 'Clustering de clients',
      description: 'Segmentation des clients pour le marketing ciblé en utilisant K-Means.',
      techStack: ['Python', 'scikit-learn', 'seaborn'],
      link: 'https://github.com/votreprofil/customer-clustering',
    },
  ];

  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
