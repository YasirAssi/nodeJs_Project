import Cards from "../model/mongodb/cards/Cards.js";

const checkCardBizNum = async (bizNumber) => {
  let sameBizNum = await Cards.findOne({ bizNumber });
  return sameBizNum;
};

export default checkCardBizNum;
