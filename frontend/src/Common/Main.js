import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from '../Home/Home';
import MainBlogPage from '../Blog/MainBlogPage';
import PostViewer from '../Blog/PostViewer';
import LogInPage from '../Admin/LogInPage';
import AdminBlog from '../Admin/AdminBlog';
import Testing from '../Testing/Main';
//import NotReady from '../Warnings/NotReady';
import NonExistentRoute from '../Warnings/NonExistentRoute';
import './Main.scss';

class Main extends Component {
  // NOTE THAT path="/api/" is already reserved for backend
  render() {
    return (
      <Router>
        <div className='container-fluid base_container main-container'>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={MainBlogPage} />
            <Route exact path="/blog/:id" component={PostViewer} />
            <Route exact path="/admin" component={AdminBlog} />
            <Route exact path="/admin" component={AdminBlog} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/test" component={Testing} />
            <Route component={NonExistentRoute} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Main;
