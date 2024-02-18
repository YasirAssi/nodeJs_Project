import Joi from "joi";

const cardBizNumSchema = Joi.object({
  bizNumber: Joi.number().min(1000000).max(9999999).required(),
});

const cardBizNumSchemaValidation = (cardInput) => {
  return cardBizNumSchema.validateAsync(cardInput);
};

export default cardBizNumSchemaValidation;
