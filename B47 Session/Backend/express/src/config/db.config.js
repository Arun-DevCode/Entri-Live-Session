const db = require("mongoose");

// DB Connection
const DB_URL = "mongodb://localhost:27017/Viao-DB";

async function DBConnect() {
  try {
    await db.connect(DB_URL);
    console.log("DB CONNECTED..");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = DBConnect;
