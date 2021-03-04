import React from "react";
import { Container, Row, Col } from "../components/Grid";

function Bio() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About me</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            My name is Brian, and I am a fullstack development student in the
            UCSD extension program.{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <b>I love to solve problems.</b> Whether it's rebuilding engines or
            making sure a customer leaves happy, I enjoy handling challenges and
            exploring new methods for solving them. This, and the creativity
            coding brings are the reasons that have drawn me to the field of web
            development. My passion for exploring has lead me to a colorful
            background of experience, from a Bachelors in Psychology to my
            summers farming oysters in the Pacific Northwest. My exceptional and
            varied pallet of knowledge provides me the tools to solve problems
            outside my breadth of expertise, and makes me a valuable member of
            any team.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Bio;
