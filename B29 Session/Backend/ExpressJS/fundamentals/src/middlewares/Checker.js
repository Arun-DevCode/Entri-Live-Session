function Checker(req, res, next) {
  console.log("Request Received!");
  console.log("Request Forwarding...");

  const isValidPIN = "1234";
  if (isValidPIN) {
    next();
  } else {
    res.json({ message: "Your MPIN is invalid!" });
  }
}

module.exports = Checker;
