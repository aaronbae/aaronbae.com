import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Common/Main';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import BlogReducer from './Blog/BlogReducer';

const rootReducer = combineReducers({
  BlogReducer
});
const rootStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={rootStore}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
