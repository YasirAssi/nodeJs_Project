import express from "express";
import {
  getAllCardsController,
  getCardByIdController,
  getAllMyCardsController,
  creatCardController,
  updateCardController,
  patchLikeController,
  patchBizNumberController,
  deleteCardController,
} from "../../controllers/cards.controller.js";
import objectIdParamsValidation from "../../middlewares/objectIdParams.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isBizMiddleware from "../../middlewares/isBiz.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.js";
import {
  creatCardValidation,
  updateCardValidation,
} from "../../validation/validationAdapter.js";
import adminOrBizMiddleware from "../../middlewares/adminOrBiz.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
const router = express.Router();

router.get("/", getAllCardsController);

router.get("/my-cards", authMiddleware, getAllMyCardsController);

router.post(
  "/",
  authMiddleware,
  isBizMiddleware,
  bodyValidationMiddleware(creatCardValidation),
  creatCardController
);

router.get("/:id", objectIdParamsValidation, getCardByIdController);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidation,
  adminOrBizMiddleware,
  bodyValidationMiddleware(updateCardValidation),
  updateCardController
);

router.patch(
  "/:id",
  authMiddleware,
  objectIdParamsValidation,
  patchLikeController
);

router.patch(
  "/biz-number/:id",
  authMiddleware,
  objectIdParamsValidation,
  isAdminMiddleware,
  patchBizNumberController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidation,
  adminOrBizMiddleware,
  deleteCardController
);
export default router;
