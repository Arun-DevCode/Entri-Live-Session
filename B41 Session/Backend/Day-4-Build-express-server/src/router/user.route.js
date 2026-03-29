const express = require("express");
const UserRouter = express.Router();

// Imports
const UserController = require("../controllers/user.controller");

// Route Paths

/*
  @Route - /user/register
  @Access - Public
  @Controller - createUserAccount
*/
UserRouter.post("/create-account", UserController.createUserAccount);

/*
@Route - /user/get-all-user , /user/get-user-byId/:userId
@Access - Private
@Controller - getAllUser , getUserById
*/
UserRouter.get("/get-all-user", UserController.getAllUsers);
UserRouter.get("/get-user/:userId", UserController.getUserProfile);

/*
  @Route - /user/update-email
  @Access - Private
  @Controller - updateUserEmailById
*/

/*
  @Route - /user/change-password
  @Access - Private
  @Controller - changePassword
*/

module.exports = UserRouter;
