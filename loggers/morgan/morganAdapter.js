import chalk from "chalk";
import morgan from "morgan";

export default morgan(function (tokens, req, res) {
  const log = [
    tokens.date(req, res, "iso"),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "ms",
    "-",
    tokens["response-time"](req, res),
    "byte",
  ].join(" ");
  if (tokens.status(req, res) > 399) return chalk.redBright(log);
  else return chalk.blueBright(log);
});
