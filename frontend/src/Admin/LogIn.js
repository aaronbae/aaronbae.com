import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { check_account } from './AdminActions'

// components 
import './LogIn.scss';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.handleSignInButton = this.handleSignInButton.bind(this);
  }

  handleSignInButton(e) {
    e.stopPropagation();
    console.log("SHIT")
  }

  render() { 
    return (
      <div className='row all-signin-container'>
        <div className="main-column col-10 col-sm-5 col-md-4">
          <div className="form-unit">
            <div className="row admin-title-row">
              <h3>Admin Access</h3>
            </div>
            <div className="row form-item-row">
              <input className="text-input" type="text" placeholder="Admin Id"/>
            </div>
            <div className="row form-item-row">
              <input className="text-input" type="text" placeholder="Admin Password"/>
            </div>
            <div className="row buttons-row form-item-row">
              <button className="sign-in-button" onClick={this.handleSignInButton}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
LogIn.propTypes = {

}

function mapStateToProps(state) {
  return {  }
}

export default connect(mapStateToProps)(LogIn);
