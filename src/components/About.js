import React from 'react';
import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';

export default function AppAbout() {
  // Variabel untuk nilai persentase keahlian (mengikuti tutorial)
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block" style={{ padding: '60px 0' }}>
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>About Us</h2>
          <div className="subtitle text-muted">learn more about us</div>
        </div>
        
        <Row>
          {/* Kolom Kiri: Gambar */}
          <Col sm={6}>
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
              alt="Tim Corporate" 
              fluid 
              className="rounded shadow-sm mb-4" 
            />
          </Col>
          
          {/* Kolom Kanan: Teks & Progress Bar */}
          <Col sm={6}>
            <p>Kami adalah perusahaan teknologi terkemuka yang berdedikasi untuk memberikan solusi digital terbaik. Dengan pengalaman bertahun-tahun, tim kami siap membantu transformasi bisnis Anda ke level selanjutnya.</p>
            <p>Keahlian kami mencakup berbagai teknologi modern dengan standar industri global untuk memastikan kualitas dan kepuasan klien.</p>
            
            <div className='progress-block mt-4'>
              <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} className="mb-3" />
            </div>
            <div className='progress-block'>
              <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>RESPONSIVE DESIGN</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} variant="success" className="mb-3" />
            </div>
            <div className='progress-block'>
              <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>PHOTOSHOP & UI/UX</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} variant="warning" className="mb-3" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}