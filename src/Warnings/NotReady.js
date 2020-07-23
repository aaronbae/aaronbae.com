import React, { Component } from 'react';
import './NotReady.scss';

class NotReady extends Component {
  render() {
    return (
      <div className="row all-notready-container">
        <div class="jumbotron">
          <h1 class="display-4">Still In Development...</h1>
          <p class="lead">Sorry, I am still working on this page. Just ironing out some small bugs.</p>
        </div>
      </div>
    );
  }
}

export default NotReady;
