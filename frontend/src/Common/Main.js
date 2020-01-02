import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import NotReady from '../Warnings/NotReady';
import NonExistentRoute from '../Warnings/NonExistentRoute';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className='container-fluid base_container'>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route component={NonExistentRoute} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Main;
