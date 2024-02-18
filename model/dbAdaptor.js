import connectToMongo from "./mongodb/dbConnect.js";
import connectToMySQL from "./mysql/dbconnect.js";
import normalizeUser from "../normalize/user.normalize.js";
import normalizeCard from "../normalize/card.normalize.js";
import {
  createUser as createUserMongo,
  getAllUsers as getAllUsersMongo,
  getUserById as getUserByIdMongo,
  updateUser as updateUserMongo,
  patchIsBiz as patchIsBizMongo,
  deleteUser as deleteUserMongo,
  getUserByEmail as getUserByEmailMongo,
} from "./mongodb/users/userService.js";
import {
  createCard as createCardMongo,
  getAllCards as getAllCardsMongo,
  getCardById as getCardByIdMongo,
  updateCard as updateCardMongo,
  deleteCard as deleteCardMongo,
  getCardByBizNumber as getCardByBizNumberMongo,
  getAllMyCards as getAllMyCardsMongo,
  updateLikeCard as updateLikeCardMongo,
} from "./mongodb/cards/cardService.js";

const DB = "mongo";

const connectToDb = () => {
  if (DB === "mongo") {
    return connectToMongo();
  }
  if (DB === "mysql") {
    return connectToMySQL();
  }
};

const createUser = (user) => {
  user = normalizeUser(user);
  if (DB === "mongo") {
    return createUserMongo(user);
  }
};

const getUserById = (user) => {
  if (DB === "mongo") {
    return getUserByIdMongo(user);
  }
};

const getUserByEmail = (email) => {
  if (DB === "mongo") {
    return getUserByEmailMongo(email);
  }
};

const getAllUsers = (user) => {
  if (DB === "mongo") {
    return getAllUsersMongo(user);
  }
};

const updateUser = (id, user) => {
  user = normalizeUser(user);
  if (DB === "mongo") {
    return updateUserMongo(id, user);
  }
};

const patchIsBiz = (id, isBusiness) => {
  if (DB === "mongo") {
    return patchIsBizMongo(id, isBusiness);
  }
};

const deleteUser = (id) => {
  if (DB === "mongo") {
    return deleteUserMongo(id);
  }
};

const createCard = async (card) => {
  card = await normalizeCard(card);
  if (DB === "mongo") {
    return createCardMongo(card);
  }
};

const getCardById = (card) => {
  if (DB === "mongo") {
    return getCardByIdMongo(card);
  }
};

const getCardByBizNumber = (bizNumber) => {
  if (DB === "mongo") {
    return getCardByBizNumberMongo(bizNumber);
  }
};

const getAllCards = (card) => {
  if (DB === "mongo") {
    return getAllCardsMongo(card);
  }
};

const getAllMyCards = (user_id) => {
  if (DB === "mongo") {
    return getAllMyCardsMongo(user_id);
  }
};

const updateCard = async (id, cardData) => {
  cardData = await normalizeCard(cardData);
  if (DB === "mongo") {
    return updateCardMongo(id, cardData);
  }
};

const updateLikeCard = (card_id, likes) => {
  if (DB === "mongo") {
    return updateLikeCardMongo(card_id, likes);
  }
};

const deleteCard = (card) => {
  if (DB === "mongo") {
    return deleteCardMongo(card);
  }
};

export default connectToDb;
export {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  patchIsBiz,
  deleteUser,
  createCard,
  getAllCards,
  getCardById,
  getCardByBizNumber,
  updateCard,
  updateLikeCard,
  deleteCard,
  getAllMyCards,
};
