import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useFormFields } from "../libs/hooksLib";
import "../login.css";
import { Auth } from "aws-amplify";

export default function SignUp(props) {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: ""
  });
  const [newUser, setNewUser] = useState(null);

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password
      });
      
      setNewUser(newUser);
    } catch (e) {
      alert(e.message);
      
    }
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);

      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
      
    }
  }

  function renderConfirmationForm() {
    return (
      <Container>
        <div className="form-border">
          <form onSubmit={handleConfirmationSubmit}>
            <Form.Group
              as={Row}
              className="justify-content-md-center"
              controlId="confirmationCode"
              bsSize="large"
            >
              <Col md={6}>
                <Form.Label>Confirmation Code</Form.Label>
                <Form.Control
                  autoFocus
                  type="tel"
                  onChange={handleFieldChange}
                  value={fields.confirmationCode}
                />
                <Form.Control.Feedback>
                  Please check your email for the code.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="justify-content-md-center"
            >
            <Button
              block
              size="lg"
              variant="danger"
              type="submit"
              className="login-btn-block"
              disabled={!validateConfirmationForm()}
            >
              Verify
            </Button>
            </Form.Group>
          </form>
        </div>
      </Container>
    );
  }

  function renderForm() {
    return (
      <Container>
        <div className="form-border">
          <h2 className="mb-5">Register</h2>
          <form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="justify-content-md-center"
              controlId="email"
            >
              <Col md={6}>
                <Form.Control
                  autoFocus
                  type="email"
                  placeholder="Enter email address"
                  value={fields.email}
                  onChange={handleFieldChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="justify-content-md-center"
              controlId="password"
            >
              <Col md={6}>
                <Form.Control
                  type="password"
                  value={fields.password}
                  onChange={handleFieldChange}
                  placeholder="Enter password"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="justify-content-md-center"
              controlId="confirmPassword"
            >
              <Col md={6}>
                <Form.Control
                  type="password"
                  onChange={handleFieldChange}
                  value={fields.confirmPassword}
                  placeholder="Confirm password"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="justify-content-md-center"
            >
            <Button
              block
              size="lg"
              variant="danger"
              type="submit"
              className="login-btn-block"
              disabled={!validateForm()}
            >
              SignUp
            </Button>
            </Form.Group>
          </form>
        </div>
      </Container>
    );
  }

  return (
    <div className="login-form">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}
