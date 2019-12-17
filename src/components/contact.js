import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default class Contact extends React.Component {
  render() {
    return (
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
                <div class="contact-list">
                  <i class="fa fa-map-marker"></i>
                  <div class="contact-info">
                    <p>
                      Avenue Rd, Marshes Lower,
                      <br /> Dundalk, Co. Louth
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="contact-list">
                  <i class="fa fa-phone"></i>
                  <div class="contact-info">
                    <p>Phone: 042 98 76543</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="contact-list">
                  <i class="fa fa-envelope"></i>
                  <div class="contact-info">
                    <p>info@ourgym.com</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="contact-list">
                  <i class="fa fa-clock-o"></i>
                  <div class="contact-info">
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
            <Form>
              <Form.Group>
                <input type="text" class="form-control " placeholder="Name" />
              </Form.Group>

              <Form.Group>
                <input type="email" class="form-control" placeholder="Email" />
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
    );
  }
}
