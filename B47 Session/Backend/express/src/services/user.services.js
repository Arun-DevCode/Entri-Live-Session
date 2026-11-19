const User = require("../models/user.model");
const {genHash} = require("../utils/auth")

async function createNewUser(user) {
  try {
    // valid data
    if (!user) {
      return null;
    }
    //Generate Hash
    const hashedPassword = await genHash(user.password)
    
    // Create a new user
    const res = await User.insertOne({...user, password : hashedPassword});
    if(!res) throw new Error("Failed to Create account! Try again later")
    
    return res;
  } catch (error) {
    return error
  }
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

async function getUser(email) {
  try {
    // check user exist
    const isUserExist = await User.findOne({ email }).select(
      "email",
    ).lean();
    
    if (!isUserExist) {
      throw new Error("No User Found!");
    }
    return isUserExist;
  } catch (err) {
    return { success: false, message: err.message };
  }
}

module.exports = { createNewUser, getAllUsers, getUser };
