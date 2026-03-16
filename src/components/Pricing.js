import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

// Data dummy (Array) untuk 3 paket harga
const pricingData = [
  {
    id: 1,
    plan: 'Basic',
    price: 'Rp 499.000',
    features: ['Wireframing', 'Visual Design', '5 Pages Website', 'Free Hosting 1 Tahun', 'Support & Assistance'],
    link: '#'
  },
  {
    id: 2,
    plan: 'Premium',
    price: 'Rp 1.499.000',
    features: ['Wireframing', 'Visual Design', '15 Pages Website', 'Free Hosting 2 Tahun', 'Support & Assistance', 'SEO Optimization'],
    link: '#'
  },
  {
    id: 3,
    plan: 'Ultimate',
    price: 'Rp 3.499.000',
    features: ['Wireframing', 'Visual Design', 'Unlimited Pages', 'Free Hosting 5 Tahun', 'Support & Assistance', 'SEO Optimization', 'Database Setup'],
    link: '#'
  }
];

export default function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>Pricing &amp; Plans</h2>
          <div className="subtitle text-muted">check our pricing &amp; plans</div>
        </div>
        
        <Row>
          {/* Looping data paket harga */}
          {pricingData.map(pricing => {
            return (
              <Col sm={4} key={pricing.id} className='mb-4'>
                <div className='heading text-center mb-3'>
                  <h3 className="text-primary fw-bold">{pricing.plan}</h3>
                  <span className='price fs-2 fw-bold text-dark'>{pricing.price}</span>
                </div>
                <Card className="text-center shadow-sm border-0">
                  <ListGroup variant="flush">
                    {/* Looping untuk daftar fitur di dalam Card */}
                    {pricing.features.map((feature, index) => {
                      return (
                        <ListGroup.Item key={index} className="py-3 text-muted">{feature}</ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                  <Card.Body className="bg-light">
                    <Button variant="primary" size="lg" href={pricing.link}>Order Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}