import React from "react";
import ProjectCard from "../components/ProjectCard";
import Projects from "../projects.json";
import { Container, Row, Col } from "../components/Grid";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Portfolio</h1>
        </Col>
      </Row>

      {/* Render project cards here */}
      <Row>
        {Projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
