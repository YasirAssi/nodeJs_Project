import registerSchemaValidation from "./joi/users/register.js";
import loginSchemaValidation from "./joi/users/login.js";
import EditUserSchemaValidation from "./joi/users/EditUser.js";
import bizSchemaSchemaValidation from "./joi/users/PatchBiz.js";
import validateObjectId from "./joi/objectId.js";
import cardValidationSchema from "./joi/cards/cardValidation.js";
import cardBizNumSchemaValidation from "./joi/cards/PatchCardBiz.js";

const VALIDATION = "joi";

const registerValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return registerSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const logInnValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return loginSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const EditUserValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return EditUserSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const objectIdValidation = (id) => {
  if (VALIDATION === "joi") {
    return validateObjectId(id);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const bizValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return bizSchemaSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const creatCardValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return cardValidationSchema(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const updateCardValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return cardValidationSchema(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const patchCardValidation = (cardInput) => {
  if (VALIDATION === "joi") {
    return cardBizNumSchemaValidation(cardInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

export {
  registerValidation,
  logInnValidation,
  EditUserValidation,
  bizValidation,
  objectIdValidation,
  creatCardValidation,
  updateCardValidation,
  patchCardValidation,
};
