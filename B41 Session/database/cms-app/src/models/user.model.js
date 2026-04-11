const mongoose = require("mongoose");

// USER SCHEMA
const AccountSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timeStamp: true },
);

// MODAL : COLLECTION
const Account = mongoose.model("accounts", AccountSchema);

module.exports = Account;
