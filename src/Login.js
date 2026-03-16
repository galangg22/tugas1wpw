import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '400px' }} className="shadow border-0">
        <Card.Body className="p-4">
          <h3 className="text-center mb-4 fw-bold">Login Sistem</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>NRP</Form.Label>
              <Form.Control type="text" placeholder="Masukkan NRP" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan Password" />
            </Form.Group>
            <Button variant="primary" className="w-100 mb-2" onClick={() => navigate('/dashboard')}>
              Login
            </Button>
            <Button variant="outline-secondary" className="w-100" onClick={() => navigate('/')}>
              Kembali
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;