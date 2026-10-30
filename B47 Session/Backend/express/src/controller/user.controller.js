const { createNewUser } = require("../services/user.services");
const db = require("../schema/db");

function getAllUserAccount(req, res) {
  // const id = req.params.profileId;

  // Validation
  // if (!id) {
  //   return res.status(404).json({ message: "Provide valid user id!!" });
  // }

  // get : specific user data
  // const user = db[id];

  // Query : Logic
  const searchKeywords = req.query;
  const isUserFound = searchKeywords.filter((user) => user.name === "kumar");

  res.json({ message: "No Users found!", user: isUserFound });
}

function createUserAccount(req, res) {
  const data = req.body; // Data Receive

  // Validation
  if (!data) {
    return res.status(404).json({
      errorCode: "ERR_NO_DATA_FOUND",
      errorMessge: "No Users Found!!",
    });
  }

  // DB : Store
  createNewUser(data);

  // Respond
  res.json({ message: "User Account Created..", users: data });
}

function UpdateUserAccount(req, res) {
  res.json({ message: "Updated User Account.." });
}

function forgetPassword(req, res) {
  res.json({ message: "Password Updated.." });
}

function DeactiveAccount(req, res) {
  res.json({ message: "User account is deactived no longer available!" });
}

module.exports = {
  getAllUserAccount,
  createUserAccount,
  UpdateUserAccount,
  forgetPassword,
  DeactiveAccount,
};
