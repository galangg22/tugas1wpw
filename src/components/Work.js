import React from 'react';
import { Container, Row, Col, Image, Pagination } from 'react-bootstrap';

// Data dummy (Array) untuk 6 gambar portofolio
const worksData = [
  { id: 1, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop', title: 'Web Template' },
  { id: 2, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop', title: 'Coding' },
  { id: 3, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', title: 'Data Analysis' },
  { id: 4, image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop', title: 'UI/UX Design' },
  { id: 5, image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop', title: 'App Development' },
  { id: 6, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop', title: 'Server Setup' }
];

export default function AppWorks() {
  return (
    <section id="works" className="block works-block" style={{ padding: '60px 0' }}>
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>Our Works</h2>
          <div className="subtitle text-muted">our awesome works</div>
        </div>
        
        <Row className='portfoliolist'>
          {/* Looping data gambar */}
          {worksData.map(works => {
            return (
              <Col sm={4} key={works.id} className='mb-4'>
                <div className='portfolio-wrapper'>
                  {/* Thumbnail gambar yang akan menyesuaikan lebar kotak */}
                  <Image src={works.image} fluid className='rounded shadow-sm' alt={works.title} />
                  <div className='label text-center mt-2 fw-bold'>{works.title}</div>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Komponen Navigasi Halaman (Pagination) di bagian bawah */}
        <Pagination className="justify-content-center mt-4">
          <Pagination.Prev disabled />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </Container>
    </section>
  );
}