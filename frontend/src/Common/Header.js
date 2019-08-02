import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      prevScroll: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
     window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const currScroll = window.scrollY;
    const currVisible = this.state.prevScroll - currScroll >= -0;
    //console.log(this.state.prevScroll - currScroll);
    this.setState({
      visible: currVisible,
      prevScroll: currScroll
    });
  }

  render() {
    const path = window.location.pathname
    return (
      <Navbar fixed="top" className={this.state.visible ? "row": "row hidden"}>
        <Navbar.Brand href="/">Aaron Bae</Navbar.Brand>
        <div className='mr-auto'>
          <Nav.Link className={path==="/"?"navtab active":"navtab"} href="/">Home</Nav.Link>
          <Nav.Link className={path==="/blog"?"navtab active":"navtab"} href="/blog">Blog</Nav.Link>
        </div>
      </Navbar>
    );
  }
}

export default Header;
