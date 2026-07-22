import Server from "./app.js";

// Database Connection
import DBConnect from "./src/config/db.config.js";

const PORT = 4000;

Server.listen(PORT, async () => {
  try {
    const isConnected = await DBConnect();

    if (!isConnected) {
      throw new Error("Database connection failed.");
    }

    console.log("Database Connected");
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error(error.message);

    // Stop the server if the database connection fails
    process.exit(1);
  }
});
