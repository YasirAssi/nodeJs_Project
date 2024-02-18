import { objectIdValidation } from "../validation/validationAdapter.js";
import errorHandler from "../utils/handleError.js";
const objectIdParamsValidation = async (req, res, next) => {
  try {
    const { id } = req.params;
    await objectIdValidation(id);
    next();
  } catch (err) {
    errorHandler(res, 400, err.message);
  }
};

export default objectIdParamsValidation;
