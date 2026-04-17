const Account = require("../models/user.model");

// 1. Create-account
const createAccount = async (req, res) => {
  try {
    // collect incoming data
    const { name, email, password } = req.body;

    // validate data
    if ((!name || !email, !password)) {
      return res.json("fill all the required fields!");
    }

    // store in db
    const newUser = new Account(req.body); // user create , save , return
    console.log(newUser);
    if (!newUser) {
      throw new Error("failed to create user account!");
    }

    // send respond to client
    res.json({ message: "User Account Created", data: newUser });
  } catch (error) {
    if (error) {
      res.json({ message: error, error: true });
    }
  }
};

// 2. Login - User
const LoginUser = async () => {};

// 3. Get profile - user
const getUserProfile = async (req, res) => {};

// 4. Remove - account
const removeUserAccount = async (req, res) => {};

// 5. forget-Password
const forgetPassword = async (req, res) => {};

module.exports = { createAccount };
