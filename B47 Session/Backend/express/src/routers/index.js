const express = require("express");

// Declare router
const UserRouter = express.Router();

const UserModel = require("../models/user.model");

// User Router
const {
  getAllAccounts,
  createUserAccount,
  forgetPassword,
  loginAccount,
  DeactiveAccount,
} = require("../controller/user.controller");

//Middlware
// const { checkPermission } = require("../middleware/permission.middleware");
const { reqValidator } = require("../middleware/validate");
/*
  @route - GET
  @handler - createUserAccount
*/
UserRouter.get("/profile", getAllAccounts);

UserRouter.post("/create-account", createUserAccount);

UserRouter.post("/login", loginAccount);

UserRouter.patch("/forget-password", reqValidator, forgetPassword);

UserRouter.delete("/deactive-account", DeactiveAccount);

UserRouter.get("/get-user", async (req, res) => {
  const email = "deepak@gmail.com";
  const user = await UserModel.find({ email });
  res.status(200).json(user);
});

module.exports = UserRouter;
