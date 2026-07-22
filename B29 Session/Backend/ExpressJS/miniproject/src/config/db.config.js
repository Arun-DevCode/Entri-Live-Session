import mongoose from "mongoose";

// Database Connection
async function DBConnect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/MasterDB");

    if (mongoose.connection.readyState === 1) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Database Connection Error:", error);
    return false;
  }
}

export default DBConnect;
