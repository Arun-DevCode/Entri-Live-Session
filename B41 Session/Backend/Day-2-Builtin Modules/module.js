// Import built-in modules
const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const EventEmitter = require("events");
const url = require("url");

// // OS
// console.log("Platform:", os.platform());
// console.log("CPU Cores:", os.cpus().length);

// // Path
// const filePath = "/users/arun/project/index.js";
// console.log("File Name:", path.basename(filePath));
// console.log("Extension:", path.extname(filePath));

// // FS
// fs.writeFileSync("demo.txt", "Hello from NodeJS Built-in Modules Demo");
// console.log("File created: demo.txt");

// // Events
// const event = new EventEmitter();

// event.on("welcome", () => {
//   console.log("Welcome Event Triggered!");
// });

// event.emit("welcome");

// // Http

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);

//   res.writeHead(200, { "Content-Type": "text/plain" });

//   res.write("Path: " + parsedUrl.pathname + "\n");
//   res.write("Query: " + JSON.stringify(parsedUrl.query) + "\n");

//   res.end("Server Response Completed");
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });
