import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <section id="contact" className="py-5">
    <Container data-aos="fade-up">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Your Message" />
        </Form.Group>
        <Button variant="primary" type="submit">Send Message</Button>
      </Form>
    </Container>
  </section>
);

export default Contact;
