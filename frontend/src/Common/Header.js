import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      prevScroll: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
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

  handleLogIn(e) {
    e.stopPropagation();
    console.log("Shit in")
  }

  handleLogOut(e) {
    e.stopPropagation();
    console.log("Shit Out")
  }

  render() {
    const { logged_in } = this.props;
    const path = window.location.pathname
    return (
      <Navbar fixed="top" className={this.state.visible ? "row": "row hidden"}>
        <Navbar.Brand href="/">Aaron Bae</Navbar.Brand>
        <div className='mr-auto'>
          <Nav.Link className={path==="/"?"navtab active":"navtab"} href="/">Home</Nav.Link>
          <Nav.Link className={path==="/blog"?"navtab active":"navtab"} href="/blog">Blog</Nav.Link>  
          {logged_in && 
            <Nav.Link className="navtab" href="/login">Sign Out</Nav.Link>
          }
          {!logged_in &&
            <Nav.Link className="navtab" href="/login">Sign In</Nav.Link>
          }
            
        </div>
      </Navbar>
    );
  }
}

Header.propTypes = {
  logged_in: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return { logged_in: state.AdminReducer.logged_in }
}

export default connect(mapStateToProps)(Header);
