import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/react-logo.png";

const MainNavbar = () => {
  return (
    <Navbar
      className="navbar-center-align"
      collapseOnSelect
      expand="lg"
      variant="dark"
      sticky="top"
    >
      <img className="navbar-logo" src={Logo} alt="White logo" />

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#resources" className="navbar-text">
            Resources
          </Nav.Link>
          <Nav.Link href="#team" className="navbar-text">
            Our Team
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
