import errorHandler from "../utils/handleError.js";

const adminOrBizMiddleware = (req, res, next) => {
  if (!req.userData) {
    //!these functions should be in deferent place
    throw new Error("you must be logged in");
  }
  if (req.userData.isAdmin || req.userData.isBusiness) {
    next();
  } else {
    errorHandler(res, 401, "you not allowed to do this action");
  }
};
export default adminOrBizMiddleware;
