import mongoose, { Schema } from "mongoose";

// User Schema
const userSchema = Schema({
  name: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
    unique: true,
  },
  password: {
    require: true,
    type: String,
  },
});

// Model : Collection
const Account = mongoose.model("account", userSchema, "users");

// Index : Email Field
userSchema.index({ email: 1 });

export default Account;
