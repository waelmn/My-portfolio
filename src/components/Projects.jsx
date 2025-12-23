import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React, Bootstrap, Framer Motion, and responsive design.",
    link: "#",
  },
  {
    title: "E-Commerce UI",
    desc: "Frontend interface for an online store with reusable components and clean UI.",
    link: "#",
  },
  {
    title: "Blog Platform",
    desc: "Modern blog application using React and REST concepts.",
    link: "#",
  },
];


const Projects = () => (
  <section id="projects" className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-5" data-aos="fade-down">My Projects</h2>
      <Row>
        {projects.map((proj, idx) => (
          <Col md={4} key={idx} className="mb-4" data-aos="fade-up" data-aos-delay={idx*100}>
            <Card className="project-card h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
                <Button variant="primary" href={proj.link} target="_blank">
                  View <FaExternalLinkAlt className="ms-1"/>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
