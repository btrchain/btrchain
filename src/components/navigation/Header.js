// import React from 'react'
// import './Header.css'

// export default function Header() {
//     return (
//         <header>
//             <nav className="navbar navbar-expand-lg navbar-light  py-4">
//                 <div className='container'>
//                     <a className="navbar-brand" href="/"><b>BTR</b></a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="/">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">OUR SERVICES</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/about">ABOUT US</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/contact">CONTACT US</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">BLOG</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             <div className="header-bg">
//                 <img src='/images/bg1.png' alt='header' className='img-fluid' />
//             </div>
//         </header>
//     )
// }
import React from "react";
import "./Header.css";
// import logo from "./logo1.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect  expand="md"  variant='light' className='headerbg'>
      {/* <Navbar.Brand href="/">
        <img
          alt="BTR Logo"
          src=""
          width="200"
          height="65"
          className="d-inline-block align-top logobg"
        />
      </Navbar.Brand> */}
      <Container>
        <Navbar.Brand href="/">BTRchain</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="h5 ext3" eventKey="2">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="h5 ext3" eventKey="2">
            About us
          </Nav.Link>
          <Nav.Link as={Link} to="/" className="h5 ext3" eventKey="2">
          Our Services
          </Nav.Link>
          <Nav.Link as={Link} to="/" className="h5 ext3" eventKey="2">
          Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="h5 ext3" eventKey="2">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default withRouter(Header);