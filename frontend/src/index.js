import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Common/Main';
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrate( 
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
