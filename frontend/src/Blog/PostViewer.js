import React, { Component } from 'react';
import './PostViewer.scss';

class PostViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      additionalClassName: this.props.className
    };
  }

  render() {
    return (
      <div className="row">
        <div className={this.state.additionalClassName}>
          This is the post viewer
        </div>
      </div>
    );
  }
}

export default PostViewer;