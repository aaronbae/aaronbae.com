import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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

  componentDidUpdate() {
    const { logged_in } = this.props;
    if( logged_in ) {
      this.props.history.push("/blog")
    }
  }

  handleSignInButton(e) {
    e.stopPropagation();
    var both_inputs = document.getElementsByClassName("text-input")
    const { dispatch } = this.props;
    dispatch(check_account(both_inputs[0].value, both_inputs[1].value))
  }

  render() { 
    const { failed_attempt } = this.props;
    return (
      <div className='row all-signin-container'>
        <div className="main-column col-10 col-sm-5 col-md-4">
          <div className="form-unit">
            <div className="row admin-title-row">
              <h3>Admin Access</h3>
            </div>
            <div className="row form-item-row">
              <input className={failed_attempt?"incorrect text-input":"text-input"} type="text" placeholder="Admin Id"/>
            </div>
            <div className="row form-item-row">
              <input className={failed_attempt?"incorrect text-input":"text-input"} type="password" placeholder="Admin Password"/>
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
  logged_in: PropTypes.bool.isRequired,
  failed_attempt: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return { 
    logged_in: state.AdminReducer.logged_in,
    failed_attempt: state.AdminReducer.failed_attempt
  }
}

export default connect(mapStateToProps)(withRouter(LogIn));
