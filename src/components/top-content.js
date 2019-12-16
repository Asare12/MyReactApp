import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class TopContent extends React.Component {
  render() {
    const H1 = { fontSize: "110px", fontWeight: "bold" };
    return (
      <Container>
        <Row>
          <Col md="12" className="mt-5">
            <h1 className="mt-5" style={H1}>
              NO PAIN NO GAIN
            </h1>
            <p className="mt-5" style={{ fontSize: "25px" }}>
              Motivation is what gets you started. Habit is what keeps you
              going.
            </p>
            <button type="button" className="btn btn-outline-light btn-lg">
              JOIN US TODAY
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}
