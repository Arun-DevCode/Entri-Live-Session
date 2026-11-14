const server = require("./app");

// Config Modules
const dbConfig = require("./config/db.config");

// PORT
const PORT = 3000;

// Listen
server.listen(PORT, async () => {
  try {
    //* DB CONNECTION
    await dbConfig();
    console.log("SERVER CONNECTED");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
