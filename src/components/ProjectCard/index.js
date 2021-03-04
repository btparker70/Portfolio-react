import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.alt} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
          <li>
            <strong>Github</strong> <a href={props.github}>Here</a>
          </li>
          <li>
            <strong>Deployed</strong> <a href={props.deploy}>Here</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
