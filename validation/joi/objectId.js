import Joi from "joi";

const objectIdschema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

const validateObjectId = (id) => {
  return objectIdschema.validateAsync({ id });
};
export default validateObjectId;
