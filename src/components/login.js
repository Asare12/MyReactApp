import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../login.css";

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-form">
        <Container>
          <div className="form-border">
            <h2 className="mb-5">Login</h2>

            <Form>
              <Form.Group as={Row} className="justify-content-md-center">
                <Col md={6}>
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="justify-content-md-center">
                <Col md={6}>
                  <Form.Control type="password" placeholder="Enter password" />
                </Col>
              </Form.Group>
              <button
                type="button"
                class="btn btn-danger btn-lg login-btn-block"
              >
                Submit
              </button>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}
