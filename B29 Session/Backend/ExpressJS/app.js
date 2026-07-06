const express = require("express");

// Import Routers
const AuthRouter = require("./src/routes/auth.route");

// App config
const app = express();

// Body Parser - Middleware
app.use(express.json()); // JSON -> Object

// App Routers Config
app.use(AuthRouter);

// Server listen
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running...");
});
