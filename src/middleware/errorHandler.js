const {logger} = require("../../config/winston");

const errorHandler = (err, req, res, next) => {
  const status = err.status !== undefined ? err.status : 500;
  if (status === 500) {
    logger.error(err.stack || '');
  }
  res.status(status).json({
    error: {
      message: err.message,
      code: err.code,
    },
  });
};

module.exports = errorHandler;