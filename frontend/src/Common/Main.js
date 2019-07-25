import React, { Component } from 'react';
import './Main.css';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';

class Main extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Home />
        <Projects />
      </div>
    );
  }
}

export default Main;
