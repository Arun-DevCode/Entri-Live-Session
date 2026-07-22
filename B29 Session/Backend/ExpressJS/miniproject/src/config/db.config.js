import mongoose from "mongoose";

// Database Connection
async function DBConnect(){
  try {
    await mongoose.connect("mongodb://localhost:27017/Pockio_Flash");

    if (mongoose.connection.readyState === 1) {
      console.log("Database Connected");
      return true;
    }

    console.log("Database Connection Failed");
    return false;
  } catch (error) {
    console.error("Database Connection Error:", error);
    return false;
  }
}

export default DBConnect;