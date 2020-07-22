import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

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

// Other 
import store from "../Redux/Store";
import * as Sentry from '@sentry/react';
import { metaDefault } from "../Utils/MetaHelpers";

Sentry.init({dsn: "https://eafc03ce34b94dd98b03f1fc08903681@o418535.ingest.sentry.io/5321569"});

class Main extends Component {
  // NOTE THAT path="/api/" is already reserved for backend
  render() {
    return (
      <Provider store={store}>
        {metaDefault()}
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
      </Provider>
    );
  }
}

export default Main;
