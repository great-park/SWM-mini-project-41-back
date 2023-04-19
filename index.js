const express = require("./config/express");
const port = 3000;
const { logger } = require("./config/winston");

const server = express().listen(port, () => {
  logger.info(`environment : ${process.env.NODE_ENV} - Server Start At Port ${port}`);
});
