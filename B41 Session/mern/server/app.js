const express = require("express");

// Import routes
const UserRouter = require("./src/routes/user.route");
const productRouter = require("./src/routes/product.route");

// App configure
const app = express();

// App middleware
app.use(express.json()); // body parsing : JSON -> Object

// App Router
app.use("/api/auth", UserRouter);
app.use("/api/product", productRouter);

module.exports = app;
