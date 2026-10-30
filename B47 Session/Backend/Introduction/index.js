const http = require("http");

// Server config
const server = http.createServer(apiHandle);

function apiHandle(req, res) {
  // API Handle - Request & Response
}

server.listen(3000);
