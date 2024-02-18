import express from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";

import logger from "./loggers/loggerAdapterr.js";
import * as url from "url";
import errorMiddleware from "./middlewares/error.mw.js";
import apiRouter from "./routes/api.js";
import cors from "cors";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let app = express();
app.use(cors());
app.use(helmet());
app.use(compression());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/", (req, res) => {
  res.json(req.body);
});

app.use(errorMiddleware);

app.use("/api", apiRouter);

export default app;
