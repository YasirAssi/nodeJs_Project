import express from "express";
import errorHandler from "../utils/handleError.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("api sub route");
});

router.use((req, res) => {
  errorHandler(res, 404, "not found");
});

export default router;
