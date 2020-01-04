import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.stopPropagation();
    console.log("Shit Out")
  }

  render() {
    const { logged_in } = this.props;
    const path = window.location.pathname
    return (
      <div className="header-container row">
        <div><a className="navbrand" href="/">Aaron Bae</a></div>
        <div><a className={path==="/"?"navlink active":"navlink "} href="/">Home</a></div>
        <div className="line"></div>
        <div><a className={path==="/blog"?"navlink active":"navlink"} href="/blog">Blog</a></div>
        <div className="line"></div>
        <div className="float-right">
        {logged_in && 
          <button className={path==="/login"?"navlink sign-out-button active":"navlink sign-out-button"} onClick={this.handleLogOut}>Sign Out</button>
        }
        {!logged_in &&
          <a className={path==="/login"?"navlink active":"navlink"} href="/login">Admin</a>
        }
        </div>
      </div>
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
