const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
      geo: {
        lat: String,
        lng: String,
      },
    },
    phone: String,
    website: String,
    company: {
      name: String,
      catchPhrase: String,
      bs: String,
    },
  },
  {
    timestamps: true, 
  },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
