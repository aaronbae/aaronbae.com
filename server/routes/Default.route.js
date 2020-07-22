
import path from 'path';
import fs from 'fs';

// Frontend Processors
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux';
import store from '../../src/Redux/Store';
import { storeWithInitial } from '../../src/Redux/Store';
import Main from '../../src/Common/Main';
import Helmet from 'react-helmet';
import Post from '../models/Post';
import { Console } from 'console';


const express = require('express');
const defaultRoutes = express.Router();

function serveFrontend(req, res, post) {
  if ("title" in post && "content" in post && "_id" in post) {
    const initialState = {
      "BlogReducer": {
        posts: [post]
      }
    }
    // TODO: THIS FUNCTION 'STOREWITHINITIAL' IS NOT WORKING
    //store = storeWithInitial(initialState)
  }
  const main = renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <Main />
      </Provider>
    </StaticRouter>
  );
  const finalState = store.getState()
  let helmet = Helmet.renderStatic();
  let meta = `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.log(`${req.url} : Failed to serve the page!`)
      console.error(err);
      return res.status(500).send('Oops, better luck next time!');
    }
    data = data.replace('<div id="root"></div>', `<div id="root">${main}</div>`)
    data = data.replace('<meta react-meta-document>', `${meta}`)
    data = data.replace('__REDUX_PRELOAD__', `${finalState}`)
    console.log(`${req.url} : Successfully served the page!`)
    return res.send(data);
  });
}

defaultRoutes.route("/blog/[a-zA-Z0-9]+").get(function (req, res) {
  let post_id = req.url.split("/")[2]
  Post.findById(post_id, function (err, post) {
    if (err) {
      console.log(`Front End : Could not fetch post ${post_id}!`)
      console.log(err);
    }
    else {
      serveFrontend(req, res, post);
    }
  });
});

defaultRoutes.route("/*").get(function (req, res) {
  serveFrontend(req, res, {});
});

export default defaultRoutes;