import React from "react";
import ProjectCard from "../components/ProjectCard"
import Projects from '../projects.json';

function Portfolio() {
  return (
    <div style={{width: "100%"}}>
      <h1>Portfolio</h1>
      {Projects.map(project => (
      <ProjectCard
        {...project}/>
      ))}
    </div>
  )
}

export default Portfolio;