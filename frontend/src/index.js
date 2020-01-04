import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Common/Main';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import BlogReducer from './Blog/BlogReducer';
import AdminReducer from './Admin/AdminReducer';

const rootReducer = combineReducers({
  BlogReducer,
  AdminReducer
});
const rootStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={rootStore}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
