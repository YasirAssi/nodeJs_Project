import { createUser } from "../model/dbAdaptor.js";
import { createCard } from "../model/dbAdaptor.js";
import generateUniqueNumber from "../utils/generateUniqueNumber.js";

const initialUsers = async () => {
  let users = [
    {
      name: {
        first: "kenny",
        last: "mc",
      },
      phone: "0500000000",
      email: "kender@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: false,
      isAdmin: false,
    },
    {
      name: {
        first: "john",
        last: "wick",
      },
      phone: "0500000000",
      email: "jone@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: true,
      isAdmin: true,
    },
    {
      name: {
        first: "jame",
        last: "bond",
      },
      phone: "0500000000",
      email: "james@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: true,
      isAdmin: false,
    },
  ];
  try {
    let bizId = "";
    for (let user of users) {
      let userFromDb = await createUser(user);
      if (!user.isAdmin && user.isBusiness) {
        bizId = userFromDb._id;
      }
    }
    return bizId;
  } catch (err) {
    return "";
  }
};

const initialCards = async (bizId) => {
  let cards = [
    {
      title: "First Card",
      subtitle: "node.js mongo",
      description: "mongoose",
      phone: "0500000000",
      email: "kk@gmail.com",
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "Second Card",
      subtitle: "node.js mongo",
      description: "mongoose",
      phone: "0500000000",
      email: "je@gmail.com",
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "Third Card",
      subtitle: "node.js mongo",
      description: "mongoose",
      phone: "0500000000",
      email: "ja@gmail.com",
      web: "http://www.google.com",
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
  ];
  try {
    for (let card of cards) {
      console.log("card", card);
      await createCard(card);
    }
  } catch (err) {
    console.log(err);
  }
};

export { initialUsers, initialCards };
