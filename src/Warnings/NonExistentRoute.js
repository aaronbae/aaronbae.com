import React, { Component } from 'react';
import './NotReady.scss';

class NonExistentRoute extends Component {
  render() {
    return (
      <div className="row all-notready-container">
        <div className="jumbotron">
          <h1 className="display-4">This Page Doesn't Exist...</h1>
          <p className="lead">Looks like you are trying to reach a page that does not exist. Check your URL one more time! Meanwhile, here is a cool link below!</p>
          <a className="btn btn-primary btn-lg" href="https://www.youtube.com/watch?v=DNWWi8RYzhM" role="button">Surprise Link</a>
        </div>
      </div>
    );
  }
}

export default NonExistentRoute;
