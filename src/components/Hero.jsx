import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => (
  <section id="home" className="hero-section d-flex align-items-center">
    <div className="overlay"></div>
    <Container className="text-center text-white" data-aos="fade-up">
      <h1>Hi, I'm Wael Mansouri</h1>
      <h3>Full Stack Developer</h3>
      <p>Building modern web applications with React, Bootstrap, and JavaScript.</p>
      <Button variant="primary" href="#projects">See My Work</Button>
    </Container>
  </section>
);

export default Hero;
