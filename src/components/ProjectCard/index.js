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
            <strong>Github</strong> {props.github}
          </li>
          <li>
            <strong>Deployed</strong> {props.deploy}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
