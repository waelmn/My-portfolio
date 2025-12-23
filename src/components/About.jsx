import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => (
  <section id="about" className="py-5">
    <Container>
      <h2 className="text-center mb-4" data-aos="fade-down">About Me</h2>
      <Row>
        <Col md={6} data-aos="fade-right">
<p>
  I am a Full Stack Developer with a strong focus on frontend development using
  React and modern JavaScript. I enjoy building clean, responsive, and
  user-friendly web applications.
</p>        </Col>
        <Col md={6} data-aos="fade-left">
<p>
  I am passionate about learning new technologies, improving performance, and
  writing maintainable code. I am currently looking for opportunities where I
  can contribute, grow, and solve real-world problems.</p> </Col>
      </Row>
    </Container>
  </section>
);

export default About;
