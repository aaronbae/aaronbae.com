import path from 'path';
import fs from 'fs';

import express from 'express';

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux';
import store from '../src/Redux/Store';

import Main from '../src/Common/Main';

const PORT = process.env.PORT || 3001;
const app = express();

// All other asset requests
app.use(express.static('./build'));

// HTTP requests
app.get('*', (req, res) => {
  const main = renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <Main />
      </Provider>
    </StaticRouter>
  );
  console.log(req.url)
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${main}</div>`)
    );
  });
  
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});