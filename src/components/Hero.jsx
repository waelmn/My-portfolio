import { motion } from "framer-motion";
import { Container, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => (
  <section id="home" className="hero-section d-flex align-items-center">
    <div className="overlay"></div>

    <Container className="text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Wael Mansouri
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
Full Stack Developer | React • JavaScript • Bootstrap
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        I build modern, scalable, and responsive web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Button variant="primary" href="#projects">
          View Projects
        </Button>

        <a
          href="/cv-wael-mansouri.pdf"
          download
          className="btn btn-outline-light ms-3"
        >
          Download CV
        </a>
      </motion.div>
    </Container>
  </section>
);

export default Hero;
