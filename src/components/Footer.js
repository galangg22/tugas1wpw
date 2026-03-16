import React from 'react';
import { Container } from 'react-bootstrap';

export default function AppFooter() {
  return (
    <footer id="footer" style={{ backgroundColor: '#212529', color: '#fff', padding: '40px 0' }}>
      <Container fluid className="text-center">
        <div className='copyright'>
          &copy; 2026 Corporate Web Project. Dibuat oleh Galang - PENS.
        </div>
        <div className='socials mt-3'>
          <ul className="list-inline mb-0">
            <li className="list-inline-item mx-2">
              <a href="https://www.facebook.com" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://www.twitter.com" className="text-white"><i className="fab fa-twitter fa-lg"></i></a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://www.linkedin.com" className="text-white"><i className="fab fa-linkedin-in fa-lg"></i></a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}