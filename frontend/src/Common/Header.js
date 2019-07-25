import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll() {
    var anchors = document.getElementsByClassName('nav-anchor');
    
    for (var i = anchors.length - 1; i >=0; i--) {
      if (anchors[i].getBoundingClientRect().top <= 0 ) {
        this.setState({active: i});
        break;
      }
    }
  }

  render() {
    return (
      <Navbar className="row" sticky="top" bg="light" variant="light">
        <Navbar.Brand href="/">Aaron Bae</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" className={this.state.active===0? "active": ""} >Home</Nav.Link>
          <Nav.Link href="#projects" className={this.state.active===1? "active": ""} >Projects</Nav.Link>
          <Nav.Link href="#resume" className={this.state.active===2? "active": ""} >Resume</Nav.Link>
          <Nav.Link href="#blog" className={this.state.active===3? "active": ""} >Blog</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
