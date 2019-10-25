import React, { Component } from 'react';
import './WordArtViewer.scss';

class WordArtViewer extends Component {
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
          This is the word art viewer
        </div>
      </div>
    );
  }
}

export default WordArtViewer;