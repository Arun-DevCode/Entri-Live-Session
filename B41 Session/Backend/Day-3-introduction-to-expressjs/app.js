const express = require("express");
const logger = require("morgan");
const db = require("./src/config/db.config");

//Import Modal
const User = require("./src/models/User.model");

//Import routers
// const UserRouter = require("./src/routers/user.route");

// App Config
const app = express();

// middleware
app.use(express.json());
app.use(logger("dev"));

// filter - product , users , etc
// http://localhost:3000/users - GET
app.get("/users", (req, res) => {
  try {
    // filter - query
    const filter = req.query;
    console.log(filter);
    console.log(typeof filter);
    console.log("Before Compare:");
    console.log(JSON.stringify(filter));
    console.log(typeof JSON.stringify(filter));
    console.log("After Comparison");
    console.log();
    const isFilterApplied = Object.keys(filter).length;

    if (JSON.stringify(filter) === "{}") {
      return res.json({ error: true, message: "Please search something" });
    }
    // findMany - Indexing (fields)

    if (req.query.username) {
      return res.json({
        message: "User fetched success..",
        data: req.query.username,
      });
    }
    res.json({ message: "fetched data success..", data: req.query });
  } catch (err) {}
});

app.listen(3000, async () => {
  try {
    console.log("App running..");
    await db();
  } catch (error) {
    process.exit(1);
  }
});

// http://localhost:3000/register
