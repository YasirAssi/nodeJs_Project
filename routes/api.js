import express from "express";
import usersRouter from "./api/users.router.js";
import cardsRouter from "./api/cards.router.js";
import errorHandler from "../utils/handleError.js";
const router = express.Router();

router.use("/users", usersRouter);

router.use("/cards", cardsRouter);

router.get("/", (req, res) => {
  res.send("api sub route");
});

router.use((req, res) => {
  errorHandler(res, 404, "not found");
});

export default router;
