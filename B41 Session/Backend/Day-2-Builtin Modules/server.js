// const fs = require("fs");
const http = require("http");

// __dirname - Current location/path return
// Directory - Folder
// console.log("Current Path :", __dirname);
// console.log("Current Path include file:", __filename);

// Fs Methods - Functions

// File Write - Create and insert content
// fs.writeFile(
//   "index.txt",
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Node Created</title>
// </head>
// <body>
// </body>
// </html>
//     `,
//   (err) => {
//     console.log(err);
//   },
// );

// File read - read content from file (Chunks)
// fs.readFile("text.txt", (err, data) => {
//   if (err) {
//     console.log("Failed to read file!");
//     return;
//   }
//   console.log("File Content:", data);
// });

// HTTP - Hyper text transfer Protocol

function handleReqAndRes(request, response) {
  // Request Handling
  console.log("Incoming Request:", request.url);
  if (request.url === "/search" && request.method === "POST") {
    response.end("Thank you so much for calling me...");
  } else {
    response.end("No API endpoint found with this method!");
  }

  if (request.url === "/product") {
    response.end("All of your product are loading..");
  }
}

const server = http.createServer(handleReqAndRes);

// Server listener
server.listen(4000, (err) => {
  if (err) {
    console.log("Server Error:", err);
  }

  console.log("Server running...");
});

// http://localhost:4000
