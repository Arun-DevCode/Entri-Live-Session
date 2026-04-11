const UserRouter = require("express").Router();
const Account = require("../models/user.model");

// Define Routes
UserRouter.post("/sign-up", async (req, res) => {
  // User Data
  const { name, email, password } = req.body;

  //store in db
  const newUser = await Account.insertOne(req.body);

  res.json({ message: "Account created success", data: newUser });
});

module.exports = UserRouter;
