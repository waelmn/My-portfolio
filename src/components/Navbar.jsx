import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navigation = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      sections.forEach(sec => {
        const element = document.getElementById(sec);
        if (element) {
          const top = element.offsetTop - 80;
          const bottom = top + element.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveLink(sec);
          }
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? 'navbar-scrolled shadow' : 'navbar-top'}
      variant={theme === 'dark' ? 'dark' : 'light'}
    >
      <Container>
        <Navbar.Brand href="#home">Wael Mansouri</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-link' : ''}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active-link' : ''}>About</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-link' : ''}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active-link' : ''}>Contact</Nav.Link>
            <Nav.Link onClick={toggleTheme} className="theme-toggle ms-3">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
