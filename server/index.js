import path from 'path';
import fs from 'fs';

// Backend 
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './DB';

// Routes
import defaultRoute from './routes/Default.route';
import postRoute from './routes/Post.route';
import userRoute from './routes/User.route';
import fileRoute from './routes/File.route';

// Frontend Processors
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux';
import store from '../src/Redux/Store';
import Main from '../src/Common/Main';
import Helmet from 'react-helmet';

import dotenv from 'dotenv';
dotenv.config();

// Configure Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, config.options).then(
  () => {
    console.log(config.DB)
    console.log('Database is connected')
  },
  err => { console.log('Cannot connect to the database\n' + err) }
);

const app = express();

// All other asset requests
app.use(express.static('./build'));
app.use(bodyParser.json());
app.use(cors());

// Back End Routes
app.use("/api", defaultRoute);
app.use('/api/posts', postRoute);
app.use('/api/users', userRoute);
app.use('/api/files', fileRoute);

// Front End Serving
app.get('*', (req, res) => {
  if (RegExp("^\/blog\/[0-9a-zA-Z\-\_]+").test(req.url)) {
    console.log("blog entry view detected")
  }
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


const PORT = process.env.NODE_ENV === "production" ? 3000 : 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});