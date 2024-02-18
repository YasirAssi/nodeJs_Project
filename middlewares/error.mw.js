import errorHandler from "../utils/handleError.js";

const errorMiddleware = (err, req, res, next) => {
  errorHandler(res, 500, err.message);
};

export default errorMiddleware;
