// Bootstrap imports
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';

// React Engine Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
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

// Redux 
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import BlogReducer from '../Redux/BlogReducer';
import AdminReducer from '../Redux/AdminReducer';

// Dynamic Meta tag manager
import DocumentMeta from 'react-document-meta';

import {createMemoryHistory} from 'history';


// Sentry
import * as Sentry from '@sentry/react';
Sentry.init({dsn: "https://eafc03ce34b94dd98b03f1fc08903681@o418535.ingest.sentry.io/5321569"});

// Prepare reducers
const rootReducer = combineReducers({
  BlogReducer,
  AdminReducer
});
const rootStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));


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
    let history = createMemoryHistory();
    return (
      <Provider store={rootStore}>
        <DocumentMeta {...meta}>
          <Router history={history}>
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
      </Provider>
    );
  }
}

export default Main;
