import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="text-center mt-5">
      <div className="bg-light p-5 rounded shadow-sm">
        <h1 className="display-4 fw-bold">Selamat Datang di Portal Mahasiswa</h1>
        <p className="lead mt-3">Sistem Informasi Akademik Berbasis Single Page Application.</p>
        <hr className="my-4" />
        <Button as={Link} to="/login" variant="primary" size="lg" className="px-5 shadow">
          Masuk ke Sistem
        </Button>
      </div>
    </Container>
  );
}

export default Home;