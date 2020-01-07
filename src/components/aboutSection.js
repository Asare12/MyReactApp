import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
    return (
      <div className="about">
      <Container>
        <Row>
          <Col md="12" className="mt-5">
            <h1
              className="mt-5"
              style={{ fontSize: "40px", fontWeight: "bold" }}
            >
              WORLD CLASS FITNESS
            </h1>
            <hr className="divider-xx" />
            <p style={{ fontSize: "25px" }}>
              At Our Gym, everything we do from top to bottom is of the highest
              quality to ensure we’re equipped to help you reach your goals of a
              healthy and fit lifestyle.
            </p>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }

