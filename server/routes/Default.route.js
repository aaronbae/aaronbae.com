const express = require('express');
const app = express();
const defaultRoutes = express.Router();

defaultRoutes.route('/').get(function (req, res) {
  console.log("/api/ : Successfully reached!");
  res.send("/api/ : Successfully reached!");
});


module.exports = defaultRoutes;