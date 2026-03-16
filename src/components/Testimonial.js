import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

// Data dummy (Array) untuk 3 ulasan klien
const testimonialsData = [
  {
    id: 1,
    name: 'John Willis',
    designation: 'Manager',
    description: 'Layanan yang luar biasa! Tim sangat responsif dan hasil kerjanya melebihi ekspektasi kami. Sangat direkomendasikan untuk perusahaan yang butuh transformasi digital yang cepat dan andal.'
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    designation: 'Accountant',
    description: 'Website kami sekarang terlihat jauh lebih profesional dan responsif di berbagai perangkat. Konversi penjualan kami meningkat drastis sejak peluncuran desain baru ini.'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    designation: 'CEO',
    description: 'Support 24/7 yang dijanjikan benar-benar terbukti. Setiap kendala teknis diselesaikan dalam hitungan menit. Terima kasih banyak atas dedikasi tim Anda!'
  }
];

export default function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block" style={{ padding: '60px 0' }}>
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>Client Testimonials</h2>
          <div className="subtitle text-muted">what clients say about us</div>
        </div>
        
        {/* controls={false} digunakan untuk menghilangkan panah Next/Prev standar karena ini ulasan teks */}
        <Carousel controls={false} indicators={true} className="pb-5">
          {/* Looping data ulasan */}
          {testimonialsData.map(testimonials => {
            return (
              <Carousel.Item key={testimonials.id}>
                <blockquote className="blockquote text-center mx-auto" style={{ maxWidth: '800px' }}>
                  <p className="mb-4 text-muted" style={{ fontSize: '18px', fontStyle: 'italic' }}>
                    <i className="fas fa-quote-left text-primary me-2"></i>
                    {testimonials.description}
                    <i className="fas fa-quote-right text-primary ms-2"></i>
                  </p>
                  <cite title="Source Title">
                    <span className='name fw-bold fs-5 text-dark'>{testimonials.name}</span>
                    <span className='designation d-block text-primary mt-1'>{testimonials.designation}</span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}