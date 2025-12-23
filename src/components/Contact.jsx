import { useRef } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Something went wrong.");
      }
    );
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <Container>
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <Form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "600px" }}>
          <Form.Group className="mb-3">
            <Form.Control type="text" name="name" placeholder="Your Name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="email" name="email" placeholder="Your Email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control as="textarea" name="message" rows={4} placeholder="Your Message" required />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
