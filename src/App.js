import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';

// Komponen Layout untuk halaman yang butuh Navbar
function LayoutDenganNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">xPENS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Beranda</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login" className="text-warning">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet /> {/* Tempat halaman anak di-render */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Grup rute dengan Navbar */}
        <Route element={<LayoutDenganNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Rute polosan tanpa Navbar */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;