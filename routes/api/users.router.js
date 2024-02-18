import express from "express";
import {
  logInController,
  registerController,
  updateUserController,
  getAllUsersController,
  patchBizController,
  deleteUserController,
  getUserByIdController,
} from "../../controllers/users.controller.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.js";
import {
  registerValidation,
  logInnValidation,
  EditUserValidation,
  bizValidation,
} from "../../validation/validationAdapter.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import adminOrOwnUser from "../../middlewares/adminOrOwnUser.mw.js";
import objectIdParamsValidation from "../../middlewares/objectIdParams.mw.js";
const router = express.Router();

router.get("/", getAllUsersController);

router.post(
  "/register",
  bodyValidationMiddleware(registerValidation),
  registerController
);

router.post(
  "/login",
  bodyValidationMiddleware(logInnValidation),
  logInController
);

router.get("/:id", getUserByIdController);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidation,
  adminOrOwnUser,
  bodyValidationMiddleware(EditUserValidation),
  updateUserController
);

router.patch(
  "/:id",
  authMiddleware,
  objectIdParamsValidation,
  adminOrOwnUser,
  bodyValidationMiddleware(bizValidation),
  patchBizController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidation,
  adminOrOwnUser,
  deleteUserController
);

export default router;
