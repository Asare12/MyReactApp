import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Membership extends React.Component {
  render() {
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
              <button type="button" class="btn btn-outline-light btn-lg">
                JOIN US TODAY
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
