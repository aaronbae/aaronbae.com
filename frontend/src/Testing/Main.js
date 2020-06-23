import React, { Component } from 'react';
import Editable from './Editable';
import FileSender from './FileSender';

class Main extends Component {
  render() {
    return (
        <div className="row" style={{minHeight: "80vh"}}>
          <div className="col">
            <Editable />
            <FileSender />
          </div>
        </div>
    )
  }
}

export default Main;
