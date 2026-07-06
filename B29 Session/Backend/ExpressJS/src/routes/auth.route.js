const express = require("express");

// Router Config
const authRouter = express.Router();

// Import controllers
const Account = require("../controllers/auth.controller");

// Auth Routes
authRouter.post("/register", Account);

authRouter.get("/profile", (req, res) => {
  res.json({ message: "User login Success" });
});

authRouter.post("/google-signin", (req, res) => {
  res.json({ message: "User Register Success" });
});

authRouter.post("/google-signup", (req, res) => {
  res.json({ message: "User Register Success" });
});

module.exports = authRouter;
