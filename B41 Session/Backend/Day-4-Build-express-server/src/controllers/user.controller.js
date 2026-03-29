const UserModel = require("../models/user.model");

// Create User
const createUserAccount = async (req, res) => {
  // 1. Collect Data
  const userData = req.body;

  // 2. Validate user data
  if (!userData) {
    return res.status(404).json({ message: "Please fill all required fields" });
  }

  // 3. If user data available then store via array
  UserModel.push(userData);

  // 4. Send response back to
  res.json({ message: "User Account Created.", data: userData });
};

// Get All Users
const getAllUsers = async (req, res) => {
  const filterQuery = req.query;
  //1. Check array contains data or not
  if (UserModel.length === 0) {
    return res.json("No User Found. Please create user first!"); // First + Header
  }

  //2. get data from array
  res.json({
    message: "fetch success..",
    data: UserModel,
    filter: filterQuery,
  }); // Second + Header
};

// Get User By ID / Profile
const getUserProfile = async (req, res) => {
  // 1. Get user id from params + validation
  const userId = req.params.userId;
  if (!userId) {
    return res.json("Please provide user ID.");
  }

  //2. Check array contains data or not
  if (UserModel.length === 0) {
    return res.json("No User Found. Please create user first!"); // First + Header
  }

  //3. get data from array
  res.json(UserModel[0][userId - 1]); // 1-1 = 0
};

// Update Email
const updateUserEmailById = async (req, res) => {};

// Change Password
const changePassword = async (req, res) => {};

module.exports = {
  createUserAccount,
  getAllUsers,
  getUserProfile,
  updateUserEmailById,
  changePassword,
};
