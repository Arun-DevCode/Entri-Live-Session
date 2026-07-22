function GetUserProfile(req, res, next) {
  return res.json({ message: "fetch user profile success" });
}

module.exports = GetUserProfile;
