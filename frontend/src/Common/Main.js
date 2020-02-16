import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import PostViewer from '../Blog/PostViewer';
import LogIn from '../Admin/LogIn';
import NotReady from '../Warnings/NotReady';
import NonExistentRoute from '../Warnings/NonExistentRoute';

class Main extends Component {
  // NOTE THAT path="/api/" is already reserved for backend
  render() {
    return (
      <Router>
        <div className='container-fluid base_container'>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:id" component={PostViewer} />
              <Route exact path="/login" component={LogIn} />
              <Route component={NonExistentRoute} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Main;
