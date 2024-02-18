import {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUser,
  patchIsBiz,
  deleteUser,
  getUserById,
} from "../model/dbAdaptor.js";
import errorHandler from "../utils/handleError.js";
import { generateHash, cmpHash } from "../utils/bcrypt.js";
import { generateToken } from "../token/jwt.js";

const logInController = async (req, res) => {
  try {
    let userFromDB = await getUserByEmail(req.body.email);
    // console.log(userFromDB);
    if (!userFromDB) throw new Error("invalid email or password");
    let passwordMatch = await cmpHash(req.body.password, userFromDB.password);
    if (!passwordMatch) throw new Error("invalid email or password");
    let token = await generateToken({
      _id: userFromDB._id,
      isAdmin: userFromDB.isAdmin,
      isBusiness: userFromDB.isBusiness,
    });
    res.json(token);
  } catch (err) {
    console.log(err);
    errorHandler(res, 400, err.message);
  }
};

const registerController = async (req, res) => {
  try {
    let userFromDB = await getUserByEmail(req.body.email);
    if (userFromDB) throw new Error("user already exists");
    let passwordHash = await generateHash(req.body.password);
    req.body.password = passwordHash;
    let newUser = await createUser(req.body);
    newUser.password = undefined;
    res.json(newUser);
  } catch (err) {
    console.log(err);
    errorHandler(res, 400, err.message);
  }
};

const getAllUsersController = async (req, res) => {
  try {
    let users = await getAllUsers();
    res.json(users);
  } catch (err) {
    console.log(err);
    errorHandler(res, 400, err.message);
  }
};

const getUserByIdController = async (req, res) => {
  try {
    let users = await getUserById(req.params.id);
    res.json(users);
  } catch (err) {
    console.log(err);
    errorHandler(res, 400, err.message);
  }
};

const updateUserController = async (req, res) => {
  try {
    let userFromDB = await updateUser(req.params.id, req.body);
    userFromDB.password = undefined;
    res.json(userFromDB);
  } catch (err) {
    console.log(err);
    errorHandler(res, 400, err.message);
  }
};

const deleteUserController = async (req, res) => {
  try {
    let userFromDB = await deleteUser(req.params.id);
    userFromDB.password = undefined;
    res.json(userFromDB);
  } catch (err) {
    console.log(err);
    errorHandler(res, 400, err.message);
  }
};

const patchBizController = async (req, res) => {
  try {
    let userFromDB = await patchIsBiz(req.params.id, req.body.isBusiness);
    userFromDB.password = undefined;
    res.json(userFromDB);
  } catch (err) {
    console.log(err);
    errorHandler(res, 400, err.message);
  }
};

export {
  registerController,
  logInController,
  getAllUsersController,
  updateUserController,
  patchBizController,
  deleteUserController,
  getUserByIdController,
};
