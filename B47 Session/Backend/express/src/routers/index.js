const express = require("express");

// Declare router
const UserRouter = express.Router();

const UserModel = require("../models/user.model")

// User Router
const {
  getAllAccounts,
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
UserRouter.get("/profile", getAllAccounts);

UserRouter.post("/create-account", createUserAccount);

UserRouter.put(
  "/update-account/:accountId",
  checkPermission,
  UpdateUserAccount,
);

UserRouter.patch("/forget-password", forgetPassword);

UserRouter.delete("/deactive-account", DeactiveAccount);

UserRouter.get("/get-user", async(req,res)=>{
     const email = "deepak@gmail.com";
     const user = await UserModel.find({email})
    res.json(user)
})


module.exports = UserRouter;
