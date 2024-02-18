import Chalk from "chalk";
import debug from "debug";
let log = debug("app:handleError");

const errorHandler = (res, status, message) => {
  log(Chalk.redBright(message));
  res.status(status).send(message);
};

export default errorHandler;
