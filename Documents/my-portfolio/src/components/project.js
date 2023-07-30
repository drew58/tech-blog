// Project.js
import React from 'react';

const Project = ({ title, imageSrc, description, link }) => {
  return (
    <div className="project square-div">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p className="transition-text">{description}</p>
      <a href={link}>View Project</a>
    </div>
  );
};


export default Project;
