import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="buttom">
        <Container>
          <p className="mx-auto">
            &copy;Copyright - All Rights Reserved - OurGym 2019
          </p>
        </Container>
      </Navbar>
    );
  }
}
