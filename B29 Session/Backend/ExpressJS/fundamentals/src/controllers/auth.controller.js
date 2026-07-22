function CreateAccount(req, res) {
  res.json({ message: "User Register Success", data: req.body });
}

module.exports = CreateAccount;
