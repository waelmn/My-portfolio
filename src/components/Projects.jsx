import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  { title: "E-Commerce App", desc: "React + Node.js + MongoDB", link: "#" },
  { title: "Portfolio Website", desc: "React + Bootstrap + CSS", link: "#" },
  { title: "Blog Platform", desc: "MERN Stack Application", link: "#" },
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
