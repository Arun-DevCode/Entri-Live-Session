import Server from "./app.js";

// DB : Connect
import DBCONNECT from "./src/config/db.config.js";

const PORT = 4000;

// Server config
Server.listen(PORT, async () => {
  try {
    const isConnected = await DBCONNECT();
    if (isConnected) {
      process.exit(1);
      throw new Error("Status : Server is Disconnected!!");
    }

    console.log("Server is running..");
  } catch (error) {
    if (error) return console.log(error.message);
  }
});
