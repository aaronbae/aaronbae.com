const express = require('express');
const defaultRoutes = express.Router();

defaultRoutes.route("/").get(function (req, res) {
  res.status(200).json({message: "Default api route."})
});

module.exports = defaultRoutes;