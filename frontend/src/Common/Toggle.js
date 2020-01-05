import React, { Component } from 'react';
import './Toggle.scss';

class Toggle extends Component {
  constructor(props) {
    super(props);
    // calculate height
    var width = parseInt(props.width.slice(0, -2)) * 0.8
    var height = (width/1.7).toString() + "px"

    this.state = {
      checked: props.checked,
      click_behavior: props.click_behavior,
      style_object: {
        width: width.toString() + "px",
        height: height
      }
    }
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.checked !== this.props.checked) {
      this.setState({checked: this.props.checked});
    }
  }

  render() {
    return (
      <div className="public-toggle-container">
        <label className="switch" style={this.state.style_object}>
          <input type="checkbox" checked={this.state.checked} onChange={this.state.click_behavior}/>
          <span className="slider round"></span>
        </label>
      </div>
    )
  }
}

export default Toggle;
