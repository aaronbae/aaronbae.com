import React, { Component } from 'react';
import './Editable.scss';

class Editable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        rows: [""],
        index: 0
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  clickHandler(event) {
    this.setState({index: event.target.tabIndex})
  }
  keyDownHandler(event) {
    event.preventDefault();
    var original = this.state.rows
    var index = this.state.index
    if (event.key.length == 1) {
      original[index] += event.key
    } else if(event.key=="Enter"){
      original.splice(index+1, 0, "")
      // Shift focus
      index += 1
    } else if(event.key=="Backspace"){
      if(original[index] == ""){
        original.splice(index, 1)
        index -= 1
      } else {
        original[index] = original[index].slice(0,-1)
      }     
    } 
    this.setState({
      rows: original,
      index: index
    })
  }

  render() {
    const { rows } = this.state
    return (
      <div className="row">
        <div className="col" id="editable-container">
          {rows.map((item, index) => 
              <div key={index}
                tabIndex={index}
                className="row editable"  
                onClick={this.clickHandler} 
                onKeyDown={this.keyDownHandler}>
                {item}
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default Editable;
