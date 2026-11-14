const jwt = require("jsonwebtoken");

// Signature
async function createToken() {
  const token = await jwt.sign(
    { id: 1, email: "deepak@gmail.com" },
    "entri@2026",
  );
  console.log(token);
}

// Verify
async function VerifToken() {
  const token =    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJkZWVwYWtAZ21haWwuY29tIiwiaWF0IjoxNzk0Njc0Mzg1fQ.WMAJ2zZd6r_w7dPHeHsUGpBGf-yEDl9T8Le0RqfmAuS";


  const isVerified = await jwt.verify(token,'entri@2026');

  if(!isVerified){
    return console.log("Not Verified!!")
  }

  console.log("Verified..")
}

// createToken();

VerifToken()
