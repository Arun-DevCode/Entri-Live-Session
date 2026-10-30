import jwt from "jsonwebtoken";

// JWT Encoder - Generate Signature Token

/*
  1. Sign(Function/Method) - Generate Token (Payload , secret, expire)
  2. verify (Token,secret) - decode payload (User Information)
  3. Decode ()
*/
const payload = {
  name: "Arun Kumar",
  age: 12,
  admin: true,
};

const secretKey = "entri@2026";

async function generateToken() {
  const token = await jwt.sign(payload, secretKey, { expiresIn: "60 * 60 * 3" });
  console.log("Generated Token : ", token);
  return token;
}

// generateToken()

const key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXJ1biBLdW1hciIsImFnZSI6MTIsImFkbWluIjp0cnVlLCJpYXQiOjE3ODUzMDY4MDAsImV4cCI6MTc4NTM5MzIwMH0.nZ1sslDOzf0rHKRFQwh7DAd5RBqXiEaF-OheVOWu1lQ";

async function verifier() {
  const isValidKey = await jwt.verify(key, secretKey);

  // Verify Logic
  if (Object.keys(isValidKey).length !== 0) {
    return console.log("Access Granted..");
  }
  console.log("Invalid Access!");
}

verifier();
