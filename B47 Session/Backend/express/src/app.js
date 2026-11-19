const express = require("express");
require("dotenv").config(); // Load Env Variable

// Import: Router
const UserRouter = require("./routers/index");
const ProductRouter = require("./routers/productRoutes");

// App Config
const app = express();

// Middleware
app.use(express.json()); // Body Parser

// Routers
app.use("/api/user", UserRouter);
app.use("/api/product", ProductRouter);

module.exports = app;
