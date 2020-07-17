import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import Main from '../src/Common/Main';

const PORT = process.env.PORT || 3001;
const app = express();

// HTTP requests
app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<Main />);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

// All other asset requests
app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});