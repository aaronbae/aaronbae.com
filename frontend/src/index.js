import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Common/Main';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import BlogReducer from './Redux/BlogReducer';
import AdminReducer from './Redux/AdminReducer';

import * as Sentry from '@sentry/react';

const rootReducer = combineReducers({
  BlogReducer,
  AdminReducer
});
const rootStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));
Sentry.init({dsn: "https://eafc03ce34b94dd98b03f1fc08903681@o418535.ingest.sentry.io/5321569"});

ReactDOM.render(
  <Provider store={rootStore}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
