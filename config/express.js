const express = require("express");
const compression = require("compression");
const methodOverride = require("method-override");
const cors = require("cors");
const router = require("../src/router/index");

module.exports = function () {
  const app = express();

  app
    .use(compression())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(methodOverride())
    .use(cors())
    .use(router);
    
  return app;
}