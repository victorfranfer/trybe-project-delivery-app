class ErrorHandler {
  static handle(
    error,
    _req,
    res,
    next,
  ) {
    const errObj = JSON.parse(error.message);
    res.status(errObj.status).json({ message: errObj.message });
    next();
  }
}

module.exports = ErrorHandler;