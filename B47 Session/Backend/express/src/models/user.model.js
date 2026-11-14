const mongoose = require("mongoose");

//* Create: Users Schema
const Account = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
  },
  { timestamps: true },
);

// Create Model
const UserModel = mongoose.model("User", Account, "users");

// Indexing
Account.index({email : 1});

module.exports = UserModel;
