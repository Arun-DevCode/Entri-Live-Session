const http = require("http");

// Request & Response - Function
function APIRequestHandler(req, res) {
  if (req.url === "/") {
    res.end("Welcome to Flipkart Server. Thanks for reaching out us..");
  }
  if (req.url === "/register") {
    res.end("User Registered Successfully..");
  }
  if (req.url === "/login") {
    res.end("User Logged In Success...");
  }
}

//* Create a server
const server = http.createServer(APIRequestHandler);

//! PORT - SERVER PORT
const PORT = 4000;

//* Run Server
server.listen(PORT, () => {
  console.log("Server is running on http://localhost:4000/");
});
