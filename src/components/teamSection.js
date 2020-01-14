import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";

export default function Team() {
    const blackColor = { color: "black" };
    return (
      <div className="team">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1 className="mb-5 heading">MEET OUR TRAINERS</h1>
          </Col>
        </Row>

        <Row>
          <CardDeck className="my-5 mx-5">
            <Card
              bg="dark"
              text={blackColor}
              className="border-0"
              style={{ width: "20rem" }}
            >
              <Image
                className="rounded img-fluid"
                src={require("../images/coach-1.jpg")}
                alt="Paul Hudson"
                style={{ width: "100%", height: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  Paul <span>Hudson</span>
                </Card.Title>
                <Card.Text>Age: 26</Card.Text>
                <Card.Text>Experience: 9 years</Card.Text>
                <Card.Text>Specialization: Gym</Card.Text>
                <div className="social">
                  <button type="button" className="fa fa-facebook"></button>
                  <button className="fa fa-twitter"></button>
                  <button className="fa fa-instagram"></button>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0" style={{ width: "20rem" }}>
              <Image
                className="rounded img-fluid"
                src={require("../images/coach-2.jpg")}
                alt="Paul Hudson"
                style={{ width: "100%", height: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  Jenny <span>Ramsey</span>
                </Card.Title>
                <Card.Text>Age: 26</Card.Text>
                <Card.Text>Experience: 9 years</Card.Text>
                <Card.Text>Specialization: Fitness</Card.Text>
                <div className="social">
                  <button className="fa fa-facebook"></button>
                  <button className="fa fa-twitter"></button>
                  <button className="fa fa-instagram"></button>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0" style={{ width: "20rem" }}>
              <Image
                className="rounded img-fluid"
                src={require("../images/coach-3.jpg")}
                alt="Paul Hudson"
                style={{ width: "100%", height: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  Gavin <span>Wilson</span>
                </Card.Title>
                <Card.Text>Age: 22</Card.Text>
                <Card.Text>Experience: 5 years</Card.Text>
                <Card.Text>Specialization: Crossfit</Card.Text>
                <div className="social">
                  <button className="fa fa-facebook"></button>
                  <button className="fa fa-twitter"></button>
                  <button className="fa fa-instagram"></button>
                </div>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="3" className="my-5">
            <button type="button" className="btn btn-outline-light btn-lg">
              SEE ALL TRAINERS
            </button>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }

