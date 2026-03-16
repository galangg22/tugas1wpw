import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader() {
  return (
    // fixed="top" supaya nempel terus pas di-scroll, bg="white" biar bersih
    <Navbar bg="white" expand="lg" fixed="top" className="navbar-custom shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">CORPORATE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* ms-auto itu kunci agar menu lari ke KANAN persis video */}
          <Nav className="ms-auto text-uppercase">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}