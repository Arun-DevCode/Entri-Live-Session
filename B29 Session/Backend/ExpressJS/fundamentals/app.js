const express = require("express");
const Logger = require("morgan");

// Import Routers
const AuthRouter = require("./src/routes/auth.route");
const UserRouter = require("./src/routes/user.route");

// Utils : Helper function
const customLogger = require("./src/utils/Logger.utils");

// App config
const app = express();

// App Middleware
app.use(express.json()); // JSON -> Object
app.use(Logger("dev"));

// App Routers Config
app.use("/api/auth", AuthRouter);
app.use("/api/user", UserRouter);

// Server listen
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running...");
});
