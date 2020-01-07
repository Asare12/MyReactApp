import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LinkContainer } from "react-router-bootstrap";

const H1 = { fontSize: "110px", fontWeight: "bold" };
export const TopContent = () => (
  <Row>
    <Col md="12" className="mt-5">
      <h1 className="mt-5" style={H1}>
        NO PAIN NO GAIN
      </h1>
      <p className="mt-5" style={{ fontSize: "25px" }}>
        Motivation is what gets you started. Habit is what keeps you going.
      </p>
      <LinkContainer to="/signUp">
        <button type="button" className="btn btn-outline-light btn-lg">
          JOIN US TODAY
        </button>
      </LinkContainer>
    </Col>
  </Row>
);
