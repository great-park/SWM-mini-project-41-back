const express = require("./config/express");
const dotenv = require("dotenv");
const port = 3000;
const { logger } = require("./config/winston");
dotenv.config();
const conn = require("./config/database");

const server = express().listen(port, () => {
  logger.info(`environment : ${process.env.NODE_ENV} - Server Start At Port ${port}`);
});
