const express = require("express");

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
// app.use("/api/post", checkPermission, (req, res) => {
//   console.log("Post created!");
// });

module.exports = app;
