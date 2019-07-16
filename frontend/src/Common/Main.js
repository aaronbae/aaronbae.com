import React, { Component } from 'react';
import './Main.css';
import Header from './Header';
import Home from '../Home/Home';

class Main extends Component {
  render() {
    return (
      <div id="main">
        <Header />
        <Home />
      </div>
    );
  }
}

export default Main;
