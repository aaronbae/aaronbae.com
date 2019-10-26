import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import NotReady from '../NotReady/NotReady';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className='container-fluid base_container'>
          <Header />
          
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={NotReady} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default Main;