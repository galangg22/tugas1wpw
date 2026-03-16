import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Data dummy (Array) untuk 6 kotak layanan
const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Responsive Design',
    description: 'Desain web yang otomatis menyesuaikan ukuran layar dari HP hingga monitor desktop.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Creative Design',
    description: 'Kami menghadirkan desain visual yang modern, segar, dan anti-membosankan.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'SEO Optimized',
    description: 'Struktur kode kami disukai oleh Google sehingga web Anda mudah ditemukan di halaman pertama.'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Retina Ready',
    description: 'Resolusi gambar super tajam yang memanjakan mata pada layar berkualitas tinggi.'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Browser Compatibility',
    description: 'Aplikasi berjalan lancar tanpa error di Chrome, Safari, Firefox, maupun Edge.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Customer Support',
    description: 'Tim kami siap sedia 24/7 membantu segala kendala teknis yang Anda alami.'
  }
];

export default function AppServices() {
  return (
    <section id="services" className="block services-block" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>Our Services</h2>
          <div className="subtitle text-muted">services we provide</div>
        </div>
        
        <Row>
          {/* Looping data 6 layanan menggunakan map() */}
          {servicesData.map(services => {
            return (
              // sm={4} artinya tiap kotak mengambil 4 kolom (dari total 12), jadi sebaris isi 3 kotak
              <Col sm={4} className='holder mb-4' key={services.id}>
                <div className="icon mb-3 text-primary text-center">
                  <i className={services.icon} style={{ fontSize: '40px' }}></i>
                </div>
                <h3 className="text-center" style={{ fontSize: '20px', fontWeight: 'bold' }}>{services.title}</h3>
                <p className="text-center text-muted">{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}