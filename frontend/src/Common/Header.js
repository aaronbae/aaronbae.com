import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sign_out } from '../Admin/AdminActions'

import Link from './Link';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.stopPropagation();
    // TODO: give a warning
    // TODO: clear cache
    const { dispatch } = this.props;
    dispatch(sign_out());
    this.props.history.push("/login")
  }

  render() {
    const { logged_in } = this.props;
    const path = this.props.history.location.pathname;
    return (
      <div className="header-container d-flex row">
        <div><Link addClasses="navbrand" message="Aaron Bae" route="/" /></div>

        <div className={path=="/"?"active":""}>
          <Link addClasses="navlink" message="Home" route="/" />
        </div>

        <div className="line"></div>
        <div className={path=="/blog"?"active":""}>
          <Link addClasses="navlink" message="Blog" route="/blog" />
        </div>

        <div className={path=="/login"?"admin-container ml-auto active":"admin-container ml-auto"}>
          {logged_in && 
            <button className="navlink sign-out-button" onClick={this.handleLogOut}>Sign Out</button>
          }
          {!logged_in &&
            <Link addClasses="navlink sign-out-button" message="Admin" route="/login" />
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

export default connect(mapStateToProps)(withRouter(Header));
