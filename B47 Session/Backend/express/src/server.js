const server = require("./app");

// Config Modules
const dbConfig = require("./config/db.config");

// PORT
const PORT = process.env.PORT;

// Listen
server.listen(PORT, async () => {
  try {
    //* DB CONNECTION
    await dbConfig();
    console.log("SERVER CONNECTED", PORT);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
