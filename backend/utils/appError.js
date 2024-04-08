class AppError extends Error {
  constructor(message, statusCode) {
    super(message); //Error class only accepts the parameter error
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    //All of these are operational errors
    this.isOperational = true;
    //Also capture the stack (error stack trace)

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
