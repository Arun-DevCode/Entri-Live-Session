import express from "express";
import { config } from "dotenv";

import google from "./src/config/google.config.js";

config({ path: "./.env.local", debug: true }); // Loader env

//config app
const app = express();
app.use(
  google.session({
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);

app.get("/", (req, res) => {
  console.log("request triggered");
});

app.listen(4000, () => {
  console.log("Server is running..");
});
