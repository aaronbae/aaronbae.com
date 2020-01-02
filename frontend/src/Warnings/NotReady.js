import React, { Component } from 'react';
import './NotReady.scss';

class NotReady extends Component {
  render() {
    return (
      <div className="row all-notready-container">
        <div class="jumbotron">
          <h1 class="display-4">Still In Development...</h1>
          <p class="lead">Sorry, I am still working on this page. Just ironing out some small bugs. Meanwhile, click on the surprise link below!</p>
          <a class="btn btn-primary btn-lg" href="https://www.youtube.com/watch?v=DNWWi8RYzhM" role="button">Surprise Link</a>
        </div>
      </div>
    );
  }
}

export default NotReady;
