import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Common/Main';
import { BrowserRouter } from "react-router-dom";
import * as Sentry from '@sentry/react';
Sentry.init({ dsn: "https://eafc03ce34b94dd98b03f1fc08903681@o418535.ingest.sentry.io/5321569" });

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
