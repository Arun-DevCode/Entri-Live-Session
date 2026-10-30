import express from "express";

// Router config
const AuthRouter = express.Router();

// Import Controller
import { createUserAccount, getUserProfile } from "../controllers/user.controller.js";

// AuthRoutes
AuthRouter.post("/sign-up", createUserAccount);

AuthRouter.post("/sign-in", (req, res) => {
  res.json({ message: "User Signed in Success...", data: req.body });
});

AuthRouter.get("/get-profile", getUserProfile);



export default AuthRouter;
