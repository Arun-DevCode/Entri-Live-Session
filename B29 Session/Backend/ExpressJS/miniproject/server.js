import Server from "./app.js";

const PORT = 4000;

// Server config
Server.listen(PORT, () => {
  console.log("Server running..");
});
