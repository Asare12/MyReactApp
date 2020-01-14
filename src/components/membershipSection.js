import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

export default function Membership() {
  return (
    <div className="membership">
      <Container>
        <Row className=" align-items-center">
          <Col md="8">
            <h1
              className="mt-5"
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "Helvetica"
              }}
            >
              Achieve Your Fitness Goals
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "17px",
                fontFamily: "Helvetica"
              }}
            >
              Flexible membership packages to suit all levels of training to
              help achieve your fitness goals
            </p>
          </Col>
          <Col md="4">
            <LinkContainer to="/signUp">
              <Button size="lg" variant="outline-light" type="button">
                JOIN US TODAY
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
