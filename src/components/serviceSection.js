import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default class Service extends React.Component {
  render() {
    return (
      <div className="service">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1 className="mb-5 heading">WHAT WE OFFER</h1>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Image
              className="mx-auto d-block"
              src={require("../images/strength-icon.png")}
              alt="Strength Icon"
              style={{ height: "70px", width: "70px" }}
            />
            <h5>Strength & Conditioning</h5>
            <hr className="divider-x" />
            <p>
              Classes that provide full body workout focusing on increasing
              strength, range of motion, core stability and flexibility for true
              full body strength.
            </p>
          </Col>
          <Col md="4">
            <Image
              className="mx-auto d-block"
              src={require("../images/bike-icon.png")}
              alt="Bike Icon"
              style={{ height: "70px", width: "70px" }}
            />
            <h5>Fitness & Cardio</h5>
            <hr className="divider-x" />
            <p>
              Elite high perfomance units suitable for all levels with a mix of
              cardio and strength work for fitness and physique.
            </p>
          </Col>

          <Col md="4">
            <Image
              className="mx-auto d-block"
              src={require("../images/health-icon.png")}
              alt="Health Icon"
              style={{ height: "70px", width: "70px" }}
            />
            <h5>Health & Diet</h5>
            <hr class="divider-x" />
            <p>
              Our trainers will provide you with the best nutritional advice
              that will help you with your journey to live a better and
              healthier life.
            </p>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
