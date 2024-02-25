import mysql from "mysql2/promise";
import chalk from "chalk";
import debug from "debug";
const log = debug("app:dbConnect");

const connectToMySQL = async () => {
  try {
    const conf = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "mydb",
    });
    const connection = await conf.getConnection();
    log(chalk.magentaBright.bold("Connected to MySQL"));
    return connection;
  } catch (err) {
    log(chalk.redBright.bold("Error connecting to MySQL: ", err));
    process.exit(1); //drop the server
  }
};

export default connectToMySQL;
