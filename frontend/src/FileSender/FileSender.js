import React, { Component } from 'react';

class FileSender extends Component {  
  constructor(props) {
      super(props);
      this.state = {
          selectedFile: null
      }
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.onClickHandler = this.onClickHandler.bind(this);
  }
  onChangeHandler(event) {
    this.setState({
        selectedFile: event.target.files[0],
        loaded: 0
    })
  }
  onClickHandler() {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    fetch("http://localhost:4000/files/upload", {
        method: 'POST',
        body: data
    }).then( function(res){
        console.log(res.statusText)
    })
  }

  render() {
    return (
      <div className="row sender-container">
        <input type="file" name="file" onChange={this.onChangeHandler}/>
        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
      </div>
    );
  }
}


export default FileSender;
