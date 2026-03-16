import React from 'react';
import { Carousel } from 'react-bootstrap';

// Data dummy (Array) untuk isi slider, sesuai trik di Video 4
const heroData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1200&h=400&fit=crop',
    title: 'The perfect design for your website',
    description: 'Kami menghadirkan desain modern yang responsif dan siap memanjakan mata pengunjung web Anda.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=400&fit=crop',
    title: 'Start Your Future Financial Plan',
    description: 'Solusi bisnis dan strategi masa depan yang terencana untuk perusahaan kelas dunia.',
    link: 'https://www.google.com'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop',
    title: 'Enjoy the Difference',
    description: 'Rasakan perbedaan menggunakan teknologi terbaru dengan eksekusi yang profesional.',
    link: 'https://www.google.com'
  }
];

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {/* Looping data menggunakan fungsi map() */}
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}