const express = require("./config/express");
const port = 3000;

const server = express().listen(port, () => {
  console.log("server is alive");
});
