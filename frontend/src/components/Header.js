import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";

const Header = (props) => {
  // extract spesific properties from object
  const { title } = props;
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
