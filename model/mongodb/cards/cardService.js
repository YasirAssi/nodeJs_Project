import Cards from "./Cards.js";
import debug from "debug";
const log = debug("app:model:cardService");

const createCard = (cardData) => {
  log(cardData);
  let card = new Cards(cardData);
  return card.save();
};

const getAllCards = () => {
  return Cards.find();
};

const getCardById = (id) => {
  return Cards.findById(id);
};

const getCardByBizNumber = (bizNumber) => {
  return Cards.findOne({ bizNumber });
};

const getAllMyCards = (user_id) => {
  return Cards.find({ user_id });
};

const updateCard = (id, cardData) => {
  return Cards.findByIdAndUpdate(id, cardData, { new: true });
};

const updateLikeCard = (id, likes) => {
  return Cards.findByIdAndUpdate(id, { likes }, { new: true });
};

const deleteCard = (id) => {
  return Cards.findByIdAndDelete(id);
};

export {
  createCard,
  getAllCards,
  getCardById,
  getCardByBizNumber,
  updateCard,
  updateLikeCard,
  deleteCard,
  getAllMyCards,
};
