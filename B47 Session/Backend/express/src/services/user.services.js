const User = require("../models/user.model");

async function createNewUser(user) {
  console.log(user);
  try {
    if (!user) {
      return null;
    }

    // Create a new user
    const res = await User.insertOne(user);
    console.log(res);
    return res;
  } catch (error) {}
}

async function getAllUsers() {
  try {
    //* retrieve all users
    const users = await User.find().select("name email");
    if (users.length <= 0) {
      throw new Error("No users found", { status: 404 });
    }
    return { success: true, message: "fetch Users Success", users };
  } catch (error) {
    console.log("Services", error);
    return { success: false, message: error.message };
  }
}

async function getUser(userId) {
  try {
    // check user exist
    const isUserExist = await User.findOne({ _id: userId }).select(
      "name email password",
    );
    if (!isUserExist) {
      throw new Error("No User Found!");
    }
    return isUserExist;
  } catch (err) {
    return { success: false, message: err.message };
  }
}
module.exports = { createNewUser, getAllUsers, getUser };
