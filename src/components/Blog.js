import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Data dummy (Array) untuk 3 artikel blog
const blogData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop',
    time: '15 Mar 2026',
    title: 'Coffee Lovers Unite',
    description: 'Budaya minum kopi di kalangan developer: apakah benar meningkatkan produktivitas atau sekadar sugesti belaka?',
    link: '#'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    time: '10 Mar 2026',
    title: 'Tips for UI/UX',
    description: 'Membuat antarmuka yang tidak hanya indah dipandang, tetapi juga ramah dan intuitif bagi pengguna awam.',
    link: '#'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
    time: '05 Mar 2026',
    title: 'Beautiful Day',
    description: 'Menjaga keseimbangan kerja dan kehidupan (work-life balance) untuk mencegah kelelahan di industri teknologi.',
    link: '#'
  }
];

export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block" style={{ padding: '60px 0' }}>
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>Latest from Blog</h2>
          <div className="subtitle text-muted">get our latest news from blog</div>
        </div>

        <Row>
          {/* Looping data artikel blog */}
          {blogData.map(blog => {
            return (
              <Col sm={4} key={blog.id} className='mb-4'>
                <div className='holder shadow-sm rounded'>
                  <Card className="border-0 h-100">
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time className="text-muted" style={{ fontSize: '14px' }}>{blog.time}</time>
                      <Card.Title className="mt-2 fw-bold">{blog.title}</Card.Title>
                      <Card.Text className="text-muted">
                        {blog.description}
                      </Card.Text>
                      <a href={blog.link} className="btn btn-outline-primary btn-sm">
                        Read More <i className="fas fa-chevron-right ms-1"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}