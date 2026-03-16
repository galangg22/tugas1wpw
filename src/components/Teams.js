import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// Data dummy (Array) untuk profil 3 anggota tim
const teamsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sarah Willis',
    designation: 'CEO',
    description: 'Pemimpin visioner dengan pengalaman lebih dari 15 tahun membangun startup teknologi kelas dunia.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Michael Doe',
    designation: 'Lead Developer',
    description: 'Ahli arsitektur perangkat lunak yang memastikan semua sistem berjalan dengan performa maksimal.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Elena Smith',
    designation: 'UX Designer',
    description: 'Pakar psikologi pengguna yang merancang antarmuka paling intuitif dan memanjakan mata.'
  }
];

export default function AppTeams() {
  return (
    <section id="teams" className="block teams-block" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>Our Teams</h2>
          <div className="subtitle text-muted">some of our experts</div>
        </div>
        
        <Row>
          {/* Looping data anggota tim */}
          {teamsData.map(teams => {
            return (
              <Col sm={4} key={teams.id} className='mb-4'>
                <div className='image text-center mb-3'>
                  {/* Gambar dibuat melingkar menggunakan class rounded-circle */}
                  <Image src={teams.image} alt={teams.name} roundedCircle shadow-sm style={{ width: '150px', height: '150px' }} />
                  <div className='overlay mt-3'>
                    <a href={teams.fbLink} className="text-primary mx-2"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href={teams.twitterLink} className="text-info mx-2"><i className="fab fa-twitter fa-lg"></i></a>
                    <a href={teams.linkedinLink} className="text-primary mx-2"><i className="fab fa-linkedin-in fa-lg"></i></a>
                  </div>
                </div>
                <div className='content text-center'>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>{teams.name}</h3>
                  <span className='designation text-danger fw-bold d-block mb-2'>{teams.designation}</span>
                  <p className="text-muted">{teams.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}