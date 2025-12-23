import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaGitAlt />, name: "Git & GitHub" },
  { icon: <FaNodeJs />, name: "Node.js (Basics)" },
];

const Skills = () => (
  <section id="skills" className="py-5">
    <Container>
      <motion.h2
        className="text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <Row>
        {skills.map((skill, index) => (
          <Col md={3} sm={4} xs={6} key={index} className="text-center mb-4">
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ fontSize: "3rem", color: "#0d6efd" }}
            >
              {skill.icon}
            </motion.div>
            <p className="mt-2">{skill.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills;
