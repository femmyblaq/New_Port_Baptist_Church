// src/components/WorshipArea.js
import React from 'react';
import worship from "../assets/group-pics.jpeg";
import { Container, Row, Col } from 'react-bootstrap';

const WorshipArea = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={worship}
              alt="Worship"
              className="img-fluid rounded shadow"
            />
          </Col>

          {/* Text Section */}
          <Col md={6}>
            <h2 className="fw-bold mb-3 text-primary">A Place of Worship and Connection</h2>
            <p className="text-muted fs-5">
              Join us in heartfelt worship as we connect deeply with God and one another. 
              Experience uplifting music, inspiring messages, and a warm community that 
              welcomes everyone seeking peace, joy, and purpose.
            </p>
            <p className="text-muted">
              “God is spirit, and his worshipers must worship in the Spirit and in truth.” – John 4:24
            </p>
            <button className="btn btn-primary px-4 mt-3">
              Learn More
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorshipArea;
