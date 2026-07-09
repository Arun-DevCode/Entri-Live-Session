const UserRouter = require("express").Router();

//Import Controllers
const Profile = require("../controllers/user.controller");

//Import middleware
const Checker = require("../middlewares/Checker");

function verifyUser(req, _, next) {
  console.log("User Not Verified!");
  next();
}

// User Routes
UserRouter.get("/profile", verifyUser, Checker, Profile);

module.exports = UserRouter;
