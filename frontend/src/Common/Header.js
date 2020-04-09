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

        <div className="d-none d-sm-block collapsable">
          <div className={path=="/"?"tab active":"tab"}>
            <Link addClasses="navlink" message="Home" route="/" />
          </div>

          <div className="tab line"></div>
          <div className={path=="/blog"?"tab active":"tab"}>
            <Link addClasses="navlink" message="Blog" route="/blog" />
          </div>

          <div className={path=="/login"?"tab admin-container active":"admin-container"}>
            {logged_in && 
              <button className="navlink sign-out-button" onClick={this.handleLogOut}>Sign Out</button>
            }
            {!logged_in &&
              <Link addClasses="navlink sign-out-button" message="Admin" route="/login" />
            }
          </div>
        </div>
        <div className="d-block d-sm-none dropdown-container">
          <div className="dropdown">
            <button className="btn" type="button" data-toggle="dropdown">
              <img className='menu-icon' src="assets/icons/hamburger_icon.png" alt="menu" />
            </button>
            <div className="dropdown-menu dropdown-menu-right" >
              <Link addClasses="dropdown-item" message="Home" route="/" />
              <Link addClasses="dropdown-item" message="Blog" route="/blog" />
              <div class="dropdown-divider"></div>
              <Link addClasses="dropdown-item" message="Admin" route="/login" />
            </div>
          </div>
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
