import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const Footer = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <p className="mx-auto" style={{ color: "white" }}>
        &copy;Copyright - All Rights Reserved - OurGym 2019
      </p>
    </Container>
  </Navbar>
);
