const express = require("express");

// Import: Router
const UserRouter = require("./routers/index");

// App Config
const app = express();

// Middleware
app.use(express.json()); // Body Parser

// Routers
app.use("/api/user", UserRouter);



// app.use("/api/post", checkPermission, (req, res) => {
//   console.log("Post created!");
// });

// SERVER & PORT
const PORT = 3000;
app.listen(PORT, () => console.log("Server is running.."));
