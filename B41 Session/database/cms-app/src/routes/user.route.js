const UserRouter = require("express").Router();
const Account = require("../models/user.model");

// Import:controller
const userController = require("../controller/user.controller");

// Define Routes
UserRouter.post("/sign-up", userController.createAccount);

module.exports = UserRouter;
