import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../navbar.css";

export default class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand
          href="#home"
          className="custom-navbar-brand"
        ></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mt-2 mt-lg-0 custom-navbar-nav">
            <Nav.Item>
              <Nav.Link href="#home" className="custom-nav-link">
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#team" className="custom-nav-link">
                Team
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#about" className="custom-nav-link">
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#contact" className="custom-nav-link">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
