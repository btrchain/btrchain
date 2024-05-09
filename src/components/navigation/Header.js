import React from "react";
import "./Header.css";
import logo from "./logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" variant='light' className='headerbg' >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="BTR Logo"
            src={logo}
            width="175"
            height="75"
            className="d-inline-block align-top logobg"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" className="h5 ext3 code" activeClassName="active" eventKey="1">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="h5 ext3 code" activeClassName="active" eventKey="2">
              About us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="h5 ext3 code" activeClassName="active" eventKey="3">
              Our Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" className="h5 ext3 code" activeClassName="active" eventKey="4">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="h5 ext3 code" activeClassName="active" eventKey="5">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
