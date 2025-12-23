import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => (
  <section id="about" className="py-5">
    <Container>
      <h2 className="text-center mb-4" data-aos="fade-down">About Me</h2>
      <Row>
        <Col md={6} data-aos="fade-right">
          <p>Hello! I'm Wael Mansouri, a passionate Full Stack Developer. I specialize in creating responsive and interactive web applications using React, JavaScript, and Bootstrap.</p>
        </Col>
        <Col md={6} data-aos="fade-left">
          <p>I enjoy turning ideas into reality through clean and efficient code. My goal is to build seamless user experiences and robust web solutions.</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
