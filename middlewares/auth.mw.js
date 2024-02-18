import debug from "debug";
const log = debug("app:authmw");
import { verifyToken } from "../token/jwt.js";
import errorHandler from "../utils/handleError.js";

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers["x-auth-token"]) throw new Error("token not found");
    const payload = await verifyToken(req.headers["x-auth-token"]);
    req.userData = payload;
    log(payload);
    next();
  } catch (err) {
    console.log(err);
    log(err.message);
    errorHandler(res, 400, err.message);
  }
};

export default authMiddleware;
