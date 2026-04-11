const server = require("./app");
const connectWithDB = require("./src/config/db.config");

// Start Server
server.listen(3000, async (err) => {
  await connectWithDB();
  if (err) {
    console.log(err);
  }
  console.log("App running..");
});
