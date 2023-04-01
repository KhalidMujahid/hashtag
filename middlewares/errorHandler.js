// Page not found
module.exports.pageNotFound = (req, res, next) => {
  const error = new Error(`${req.originalUrl} not found!`);
  res.status(404);
  next(error.message);
};

// error handler
module.exports.errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.send(error);
};
