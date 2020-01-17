import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Auth } from "aws-amplify";
import { useFormFields } from "../libs/hooksLib";
import "./componentsCSS/login.css";

export default function Login(props) {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signIn(fields.email, fields.password);
      props.userHasAuthenticated(true);
      props.history.push("/");
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
                  placeholder="Enter password"
                  value={fields.password}
                  onChange={handleFieldChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center">
              <Button
                block
                size="lg"
                variant="danger"
                type="submit"
                className="login-btn-block"
                disabled={!validateForm()}
              >
                Login
              </Button>
            </Form.Group>
          </form>
        </div>
      </Container>
    </div>
  );
}
