import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Auth } from "aws-amplify";
import LoaderButton from "../components/LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import "../login.css";

export default function Login(props) {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = React.useState(false);

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
      setIsLoading(false);
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
                  value={fields.email}
                  onChange={handleFieldChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-md-center">
              <Col md={6}>
                <Form.Control
                  value={fields.password}
                  onChange={handleFieldChange}
                  type="password"
                  placeholder="Enter password"
                />
              </Col>
            </Form.Group>
            <LoaderButton
              type="submit"
              className="btn btn-danger btn-lg login-btn-block"
              isLoading={isLoading}
              disabled={!validateForm()}
            >
              Login
            </LoaderButton>
          </form>
        </div>
      </Container>
    </div>
  );
}
