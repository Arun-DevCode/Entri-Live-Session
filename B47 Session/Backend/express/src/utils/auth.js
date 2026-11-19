const jwt = require("jsonwebtoken"); // JWT Token
const bcrypt = require("bcrypt");

// JWT Functions
async function genSignToken(payload) {
  console.log(payload);
  try {
    // Payload Validation
    if (!payload) throw new Error("Payload is required!");

    // Generate Token
    const key = process.env.JWT_SECRET_KEY || "entri@26";
    const ValidToken = await jwt.sign(payload, key, { expiresIn: "20s" });
    if (!ValidToken) throw new Error("Failed to Generate Token");

    // Return token
    return ValidToken;
  } catch (err) {
    console.log(err.message);
    return err;
  }
}

async function verifySignToken(token) {
  try {
    //check token
    if (!token) throw new Error("No token Provided!");

    // Verify
    const isValidPayload = await jwt.verify(
      token,
      process.env.JWT_SECRET_KEY ?? null,
    );
    if (!isValidPayload)
      throw new Error("Unauthorized accesss! Please register");

    return isValidPayload;
  } catch (err) {
    return err
  }
}

// Hashing Functions

// Generate : Hashed Data
async function genHash(payload, salt = 10) {
  try {
    // Payload Validation
    if (!payload) throw new Error("Payload is required!");

    // Generate Hash Data
    const isValidHash = await bcrypt.hash(payload, salt);
    if (!isValidHash) throw new Error("Failed to generate hash password!");

    // Return hash
    return isValidHash;
  } catch (error) {
    console.log(err.message);
    return err;
  }
}

// Verify: Compare Data with hased
async function withHashCompare() {
  try {
  } catch (error) {}
}

module.exports = { genSignToken, genHash, withHashCompare,verifySignToken };
