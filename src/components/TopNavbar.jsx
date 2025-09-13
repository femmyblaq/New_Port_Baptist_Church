// src/components/Navbar.js
import React from 'react';
import navLogo from "../assets/NPBC.png";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const TopNavbar = () => (
  <Navbar expand="lg" style={{backgroundColor: "black"}} variant="dark" className="py-3">
    <Container>
      <Navbar.Brand href="/"><img width= "200" height="250" src={navLogo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/* <NavDropdown title="Demos" id="demos-dropdown">
            <NavDropdown.Item href="#">Demo 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Demo 2</NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown title="Our Church" id="church-dropdown">
            <Link className='nav-link text-black ms-2' to="/about">About</Link>
            <NavDropdown.Item href="#">Mission</NavDropdown.Item>
          </NavDropdown>
          <Link className='nav-link' to="/donation">Donations</Link>
          <Link className='nav-link' to="/home-fellowship-centers">Home Fellowship Centers</Link>
          <NavDropdown title="Events" id="events-dropdown">
            <NavDropdown.Item href="#">Upcoming</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="All Pages" id="pages-dropdown">
            <NavDropdown.Item href="#">Page 1</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopNavbar;