import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux';
import store from '../src/Redux/Store';
import Main from '../src/Common/Main';
import DocumentMeta  from 'react-document-meta';
import Helmet from 'react-helmet';

const PORT = process.env.PORT || 3000;
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
  console.log("Serving out " + req.url)
  let helmet = Helmet.renderStatic();
  let meta = `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    data = data.replace('<div id="root"></div>', `<div id="root">${main}</div>`)
    data = data.replace('<meta react-meta-document>', `${meta}`)
    return res.send(data);
  });
  
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});