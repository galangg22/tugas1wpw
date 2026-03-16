import React from 'react';
import { Container, Card } from 'react-bootstrap';

function HalamanDua() {
  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white">Halaman Kedua</Card.Header>
        <Card.Body>
          <Card.Title>Perhatikan Navbar di Atas</Card.Title>
          <Card.Text>
            Navbar tetap ada kan? Karena Navbar ditaruh di App.js sebagai kerangka utama. 
            Yang berganti cuma area konten di bawahnya ini. Keren, kan?
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HalamanDua;