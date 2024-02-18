// all the CRUD (create, read, delete, update) that is relevant for the data base(db)
//how to create a new user in mongoose
//before saving data its better to normalize it
// new User - mongoose creates classes, every model behind the scenes is a class

import User from "./User.js";

//the syntax of monggose for #creating user
// save() - saves the user inside mongoose.
const createUser = (userData) => {
  let user = new User(userData);
  return user.save();
};

// Read
const getAllUsers = () => {
  return User.find({}, { password: 0 });
};

// Read
const getUserById = (id) => {
  return User.findById(id, { password: 0 });
};

const getUserByEmail = (email) => {
  return User.findOne({ email });
};

//Update (what to update, which data to update)
const updateUser = (id, userData) => {
  return User.findByIdAndUpdate(id, userData, { new: true });
};

const patchIsBiz = (id, isBusiness) => {
  // return User.findByIdAndUpdate(id, isBusiness, { new: true });
  return User.updateOne({ _id: id }, { isBusiness: isBusiness });
};

//delete
const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

export {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  patchIsBiz,
  deleteUser,
  getUserByEmail,
};
