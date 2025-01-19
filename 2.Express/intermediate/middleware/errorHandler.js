//custom error class
export class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = "APIError"; //set the error type to API Error
  }
}
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
export const globalErrorhandler = (err, req, res, next) => {
  console.log(err.stack); //log the error stack
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      status: "Error",
      message: err.message,
    });
  } else if (err.name == "validationError") {
    return res.status(err.statusCode).json({
      status: "Error",
      message: "validation Error",
    });
  } else {
    return res.status(err.statusCode).json({
      status: "Error",
      message: "An unexpected error occured",
    });
  }
};
