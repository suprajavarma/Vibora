// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  const sections = [
    { name: 'Tasty Spots', path: '/tasty-spots', icon: '🍔' },
    { name: 'Show Time', path: '/show-time', icon: '🎬' },
    { name: 'Voyages', path: '/voyages', icon: '✈️' },
  ];

  return (
    <Container className="text-center my-5">
      <h1 className="mb-4">Welcome to Vibora</h1>
      <Row>
        {sections.map(({ name, path, icon }) => (
          <Col key={name} md={4} className="mb-4">
            <Card className="p-4 shadow-sm border-0" style={{ cursor: 'pointer' }}>
              <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card.Body>
                  <div style={{ fontSize: '4rem' }}>{icon}</div>
                  <Card.Title className="mt-3">{name}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
