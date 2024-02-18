import errorHandler from "../utils/handleError.js";
import debug from "debug";
let log = debug("app:isBiz");

const isBizMiddleware = async (req, res, next) => {
  if (!req.userData) {
    throw new Error("error 0x123");
  }
  log("biz account", req.userData.isBusiness);
  if (!req.userData.isBusiness) {
    return errorHandler(res, 401, "you are not biz user");
  }
  next();
};
export default isBizMiddleware;
