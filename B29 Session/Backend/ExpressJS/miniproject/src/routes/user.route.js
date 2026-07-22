import express from "express";

// Router config
const UserRouter = express.Router();

// Import : Controllers
import {
  CreateUserAccount,
  RemoveUserAccount,
} from "../controllers/user.controller.js";

// AuthRoutes
UserRouter.post("/create-account", CreateUserAccount);

export default UserRouter;
