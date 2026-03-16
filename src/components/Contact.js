import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>Contact Us</h2>
          <div className="subtitle text-muted">get connected with us</div>
        </div>

        {/* Menggunakan Form Bootstrap */}
        <Form className='contact-form mx-auto' style={{ maxWidth: '800px' }}>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" className="mb-4" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" className="mb-4" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" className="mb-4" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" rows={4} className="mb-4" required />
            </Col>
          </Row>
          <div className='btn-holder text-center'>
            <Button type="submit" variant="primary" size="lg">Submit Message</Button>
          </div>
        </Form>
      </Container>

      {/* Info Kontak Tambahan di bawah form */}
      <Container className="mt-5 text-center">
        <div className='contact-info'>
          <p><i className="fas fa-envelope text-primary me-2"></i> hello@corporate.inc</p>
          <p><i className="fas fa-phone text-primary me-2"></i> +62 812-3456-7890</p>
          <p><i className="fas fa-map-marker-alt text-primary me-2"></i> Jl. Raya ITS, Sukolilo, Surabaya</p>
        </div>
      </Container>
    </section>
  );
}   