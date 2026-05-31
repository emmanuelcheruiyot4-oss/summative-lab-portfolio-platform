import React from 'react'

function ProjectCard({ project }) {
  return (
    <div className="project-item">
      <div className="project-icon-placeholder">
        <span>✕</span>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard