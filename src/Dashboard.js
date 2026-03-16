import React from 'react';
import { Container, Table, Badge } from 'react-bootstrap';

function Dashboard() {
  return (
    <Container>
      <h2 className="mb-4">Data Kehadiran Workshop</h2>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Mata Kuliah</th>
            <th>Status Kehadiran</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Workshop Pemrograman Web</td>
            <td><Badge bg="success">Hadir</Badge></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Struktur Data</td>
            <td><Badge bg="warning" text="dark">Izin</Badge></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Dashboard;