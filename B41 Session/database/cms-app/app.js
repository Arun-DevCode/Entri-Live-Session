const express = require("express");


// Import routes
const UserRouter = require("./src/routes/user.route");

// App configure
const app = express();


// App middleware
app.use(express.json()); // body parsing : JSON -> Object

// App Router
app.use("/api/auth", UserRouter);

module.exports = app;
