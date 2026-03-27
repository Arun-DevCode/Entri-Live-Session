const express = require("express");

const userRouter = express.Router();
console.log("Router Level Request : Received!!!");
// Api Endpoint
userRouter.post("/register", (request, response) => {
  response.json({ message: "User registered success" });
});

//middleware : Router level middleware function
function greetings(req, res, next) {
  req.entri = { message: "Happy ending.." };
  console.log("Thanks for reaching out this router! You request forwarded!!");
  next();
}

userRouter.get("/get-all-user", greetings, (req, res) => {
  console.log(`request Received:`, req.entri.message);
  res.json({ message: "fetched user data success.." });
});

module.exports = userRouter;
