import mongoose from "mongoose";
import Image from "../Image.js";
import Address from "../Address.js";
import phoneRegex from "../../../utils/phoneRegex.js";

import { DEFAULT_REQUIRED_STRING_VALIDATION } from "../helper/defaultStringValidation.helper.js";

const CardsSchema = new mongoose.Schema({
  title: DEFAULT_REQUIRED_STRING_VALIDATION,
  subtitle: DEFAULT_REQUIRED_STRING_VALIDATION,
  description: {
    ...DEFAULT_REQUIRED_STRING_VALIDATION,
    maxLength: 1024,
  },
  phone: {
    type: String,
    required: true,
    match: RegExp(phoneRegex),
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
  },
  web: {
    type: String,
    match: RegExp(
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+/
    ),
  },
  image: Image,
  address: Address,
  bizNumber: {
    type: Number,
    minLength: 7,
    maxLength: 7,
    required: true,
  },
  likes: [String],
  createAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Cards = mongoose.model("card", CardsSchema);

export default Cards;
