import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import { useFormFields } from "../libs/hooksLib";
// import "./Signup.css";
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
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  // function validateConfirmationForm() {
  //   return fields.confirmationCode.length > 0;
  // }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password
      });
      setIsLoading(false);
      setNewUser(newUser);
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);

      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
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
            <LoaderButton
              type="submit"
              className="btn btn-danger btn-lg login-btn-block"
              isLoading={isLoading}
              disabled={!validateForm()}
            >
              Verify
            </LoaderButton>
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
              bsSize="large"
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
              bsSize="large"
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
              bsSize="large"
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
            <LoaderButton
              type="submit"
              className="btn btn-danger btn-lg login-btn-block"
              isLoading={isLoading}
              disabled={!validateForm()}
            >
              Signup
            </LoaderButton>
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
