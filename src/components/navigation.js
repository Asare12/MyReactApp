import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../componentsCSS/navbar.css";
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";

async function handleLogout(props) {
  await Auth.signOut();

  props.userHasAuthenticated(false);
  props.history.push("/login");
}

export const Navigation = ({ isAuthenticated }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <LinkContainer to="/">
      <Navbar.Brand className="custom-navbar-brand"></Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="custom-navbar-nav">
        <LinkContainer to="/">
          <Nav.Item>
            <Nav.Link href="/" className="custom-nav-link">
              Home
            </Nav.Link>
          </Nav.Item>
        </LinkContainer>

        {/* <Nav.Item>
              <Nav.Link href="/" className="custom-nav-link">
                Service
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/" className="custom-nav-link">
                Team
              </Nav.Link>
            </Nav.Item> */}
        <LinkContainer to="/about">
          <Nav.Item>
            <Nav.Link href="/" className="custom-nav-link">
              About
            </Nav.Link>
          </Nav.Item>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Item>
            <Nav.Link href="/" className="custom-nav-link">
              Contact
            </Nav.Link>
          </Nav.Item>
        </LinkContainer>
      </Nav>
      <Nav className="ml-auto mt-2 mt-lg-0">
        {isAuthenticated ? (
          <Nav.Item onClick={handleLogout}>
            <Nav.Link href="/" className="custom-nav-link">
              Logout
            </Nav.Link>
          </Nav.Item>
        ) : (
          <>
            <LinkContainer to="/login">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Login
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>

            <LinkContainer to="/signUp">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Register
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
          </>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
