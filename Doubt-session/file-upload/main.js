import express from "express";

//imports
import file from "./helper/upload.js";

// App config
const app = express();

//App middleware
app.use(express.json());

// API Endpoints
app.post("/upload", file.single("avatar"), (req, res) => {
  console.log(req.file || "File Not received!!");// mongodb store

  // Third party - CMS storage provider
});

app.listen(3000, () => {
  console.log("App running..");
});
