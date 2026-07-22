import db, { Schema, model } from "mongoose";

// User Schema
const UserSchema = Schema({
  name: String,
  email: String,
  password: String,
});

// Model : User Model
const Account = model("account", UserSchema, "users");

export default Account;
