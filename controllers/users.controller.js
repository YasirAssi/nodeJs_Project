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
import nodemailer from "nodemailer";

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
    const transPorter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yasser3452@gmail.com",
        pass: process.env.Pass_nodeMailer,
      },
    });
    const mailOptions = {
      from: "yasser3452@gmail.com",
      to: userFromDB.email,
      subject: "nodemailer notification",
      text: "Welcome back to our website ,your login is successful",
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; background-color: #f5f5f5; padding: 20px;">
      <h2 style="color: #007bff;">Welcom ${
        userFromDB.name.first + " " + userFromDB.name.last
      }</h2>
      <p style="font-size: 16px;"> "Welcome aboard! We're thrilled to have you as a registered member, and we can't wait to provide you with exceptional service."!</p>
    </div>
  `,
    };
    transPorter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent:" + info.response);
      }
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
    const transPorter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yasser3452@gmail.com",
        pass: process.env.Pass_nodeMailer,
      },
    });
    const mailOptions = {
      from: "yasser3452@gmail.com",
      to: userFromDB.email,
      subject: "nodemailer notification",
      text: "Your registeration is successful",
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; background-color: #f5f5f5; padding: 20px;">
      <h2 style="color: #007bff;">Your registration is successful ${
        userFromDB.name.first + " " + userFromDB.name.last
      }</h2>
      <p style="font-size: 16px;"> Thank you for registering with us. We look forward to serving you!</p>
    </div>
  `,
    };
    transPorter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent:" + info.response);
      }
    });
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
