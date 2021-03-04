import React from "react";
import { Input, FormBtn } from "../components/Form";
import { Container, Row, Col } from "../components/Grid";

function Contact() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <form>
              <label forhtml="name">Name:</label>
              <Input type="text" id="name" name="name" placeholder="Name" />
              <label forhtml="email">Email:</label>
              <Input type="text" id="email" name="email" placeholder="Email" />
              <label forhtml="comment">Comment:</label>
              <Input
                type="text"
                id="comment"
                name="comment"
                placeholder="Comment"
              />
              <FormBtn>Submit</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
