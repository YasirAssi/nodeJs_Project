import morgan from "./morgan/morganAdapter.js";

const LOGGER = "morgan";

const logger = () => {
  if (LOGGER === "morgan") {
    return morgan;
  }
  throw new Error(`logger ${LOGGER} is not supported`);
};

export default logger;
