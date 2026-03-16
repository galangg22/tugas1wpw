import React from 'react';
// Perhatikan import-nya: Kita butuh Row, Col, dan Card untuk layouting
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function Profil() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Profil Saya</h2>
      
      {/* Kodenya beda karena memakai Row dan Col untuk membelah layar */}
      <Row>
        {/* Kolom kiri (ukuran 4 dari 12 bagian layar) */}
        <Col md={4}>
          <Card className="shadow-sm text-center p-3">
            <div className="bg-secondary rounded-circle mx-auto mb-3" style={{ width: '150px', height: '150px' }}></div>
            <Card.Title>Galang A. P.</Card.Title>
            <Card.Subtitle className="text-muted">Mahasiswa PENS</Card.Subtitle>
          </Card>
        </Col>

        {/* Kolom kanan (ukuran 8 dari 12 bagian layar) */}
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">Detail Informasi</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>NRP:</strong> 3125510020</ListGroup.Item>
              <ListGroup.Item><strong>Program Studi:</strong> D3 PJJ Teknik Informatika A</ListGroup.Item>
              <ListGroup.Item><strong>Email:</strong> galang@student.pens.ac.id</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profil;