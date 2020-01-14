import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function Contact() {
    return (
      <div className="contact">
      <Container>
        <Row>
          <Col md="5">
            <img
              src={require("../images/OurGymLogo.png")}
              style={{ width: "70%", height: "auto" }}
              alt="Our Gym Logo"
            />
          </Col>
          <Col md="auto">
            <h1 className="my-5 heading">CONTACT US</h1>
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <ul>
              <li>
                <div className="contact-list">
                  <i className="fa fa-map-marker"></i>
                  <div className="contact-info">
                    <p>
                      Avenue Rd, Marshes Lower,
                      <br /> Dundalk, Co. Louth
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-list">
                  <i className="fa fa-phone"></i>
                  <div className="contact-info">
                    <p>Phone: 042 98 76543</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-list">
                  <i className="fa fa-envelope"></i>
                  <div className="contact-info">
                    <p>info@ourgym.com</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-list">
                  <i className="fa fa-clock-o"></i>
                  <div className="contact-info">
                    <p>
                      Monday-Friday: 7:30am-9:30pm
                      <br />
                      Saturday-Sunday: 10am-4pm
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </Col>

          <Col md="8" className="mb-5">
            <Form id="contact-form">
              <Form.Group>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group>
                <textarea
                  type="text"
                  placeholder="Your Comments"
                  id="message"
                  cols="20"
                  rows="5"
                  class="form-control"
                  required=""
                  data-error="Please enter your comments"
                ></textarea>
              </Form.Group>
              <button type="button" class="btn btn-danger btn-lg btn-block">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }

