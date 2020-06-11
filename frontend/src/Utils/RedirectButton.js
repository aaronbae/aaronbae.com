import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './RedirectButton.scss';

class RedirectButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClasses: props.addClasses + " link-button",
      message: props.message,
      route: props.route
    }
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(route) {
    this.props.history.push(route)
  }
  
  render() {
    return (
      <button
        className={this.state.addClasses} 
        onClick={this.handleRedirect.bind(this, this.state.route)}>
          {this.state.message}
      </button>
    )
  }
}

export default withRouter(RedirectButton);
