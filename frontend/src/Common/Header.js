import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Aaron Bae</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
        </Navbar>
    );
  }
}

export default Header;
