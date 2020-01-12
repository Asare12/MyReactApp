import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Auth } from "aws-amplify";

import "../login.css";

export default function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      props.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
    }
  }
  return (
    <div className="login-form">
      <Container>
        <div className="form-border">
          <h2 className="mb-5">Login</h2>

          <form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="justify-content-md-center">
              <Col md={6}>
                <Form.Control
                  autoFocus
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center">
              <Col md={6}>
                <Form.Control
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter password"
                />
              </Col>
            </Form.Group>
            <button
              type="submit"
              className="btn btn-danger btn-lg login-btn-block"
              disabled={!validateForm()}
            >
              Login
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
