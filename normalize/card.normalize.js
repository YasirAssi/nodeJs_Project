import generateUniqueNumber from "../utils/generateUniqueNumber.js";

const normalizeCard = async (card) => {
  try {
    let image = {
      url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      alt: "Business card image",
    };
    if (card.image && card.image.url) {
      image.url = card.image.url;
    }
    if (card.image && card.image.alt) {
      image.alt = card.image.alt;
    }

    return {
      ...card,
      image,
      address: {
        ...card.address,
        state: card.address.state || undefined,
      },
      web: card.web || undefined,
      zip: card.zip || 0,
      bizNumber: card.bizNumber || (await generateUniqueNumber()),
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

export default normalizeCard;
