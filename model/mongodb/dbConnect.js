import mongoose from "mongoose";
import chalk from "chalk";
import debug from "debug";
let log = debug("app:dbConnect");

const connectToMongo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.MONGODB_CON_STR + "nodeProject")
      .then(() => {
        log(chalk.magentaBright.bold("Connected to MongoDB"));
        resolve();
      })
      .catch((err) => {
        log(chalk.redBright.bold("Error connecting to MongoDB: ", err));
        reject(err);
        process.exit(1);
      });
  });
};

export default connectToMongo;
