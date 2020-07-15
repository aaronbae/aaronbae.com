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


import DocumentMeta from 'react-document-meta';

class Main extends Component {
  // NOTE THAT path="/api/" is already reserved for backend
  render() {
    let meta = {
      title: "Aaron Bae | The Software Engineer",
      description: 'A Website Built by Aaron',
      canonical: "https://www.aaronbae.com/",
      meta: {
        charsset: 'utf-8'
      }
    }
    return (
      <DocumentMeta {...meta}>
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
      </DocumentMeta>
    );
  }
}

export default Main;
