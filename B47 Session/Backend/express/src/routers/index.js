const express = require("express");

// Declare router
const UserRouter = express.Router();

// User Router
const {
  getAllUserAccount,
  createUserAccount,
  UpdateUserAccount,
  forgetPassword,
  DeactiveAccount,
} = require("../controller/user.controller");

//Middlware
const { checkPermission } = require("../middleware/permission.middleware");

/*
  @route - GET
  @handler - createUserAccount
*/
UserRouter.get("/profile", getAllUserAccount);

UserRouter.post("/create-account", createUserAccount);

UserRouter.put("/update-account", checkPermission, UpdateUserAccount);

UserRouter.patch("/forget-password", forgetPassword);

UserRouter.delete("/deactive-account", DeactiveAccount);

module.exports = UserRouter;
