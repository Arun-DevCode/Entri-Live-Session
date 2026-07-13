import express from "express";

// Router config
const AuthRouter = express.Router();

// Import models
import User from "../models/staff.model.js";

// AuthRoutes
AuthRouter.post("/sign-up", (req, res) => {
  try {
    const account = req.body;

    // Validation : Incoming data
    if (Object.keys(account).length === 0) {
      return res.json({ message: "Please provide account details.." });
    }

    // store in model
    User.push(account);

    // respond to request
    res.json({ message: "User Sign up Success...", data: account });
  } catch (error) {}
});

AuthRouter.post("/sign-in", (req, res) => {
  res.json({ message: "User Signed in Success...", data: req.body });
});

export default AuthRouter;
