const express = require("express");
const logger = require("morgan");

//Import routers
const UserRouter = require("./src/router/user.route");

// App Config
const app = express();

// middleware
app.use(express.json());
app.use(logger("dev"));

// Router Middleware
app.use("/api/user", UserRouter);

app.listen(3000, () => {
  console.log("Server is running on port");
});

// http://localhost:3000/api/user/get-user-profile/:userId
