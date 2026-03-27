const express = require("express");
const logger = require("morgan");

//Import routers
const UserRouter = require("./src/routers/user.route");

// App Config
const app = express();

// middleware
app.use(express.json());
app.use(logger("dev"));
app.use(UserRouter);

app.listen(3000, () => {
  console.log("Server is running on port");
});

// http://localhost:3000/register
