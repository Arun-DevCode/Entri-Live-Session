const {
  createNewUser,
  getAllUsers,
  getUser,
} = require("../services/user.services");

// Security
const { genSignToken } = require("../utils/auth");

async function getAllAccounts(req, res) {
  try {
    // Get all users
    const accounts = await getAllUsers();
    if (!accounts.success) {
      throw new Error("No accounts found!. Create a account");
    }

    // Respond
    res
      .json({ message: "fetched accounts success..", accounts: accounts.users })
      .status(200);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}

async function createUserAccount(req, res) {
  const data = req.body; // Data Receive
  // Validation
  if (!data) {
    return res.status(404).json({
      errorCode: "ERR_NO_DATA_FOUND",
      errorMessge: "No Users Found!!",
    });
  }

  // DB : Store
  const newUser = await createNewUser(data);
  if (!newUser) {
    return res.json({ message: "Can't Create an account. Try again later!" });
  }

  // Respond
  res.json({ message: "User Account Created..", users: newUser });
}

// Login
async function loginAccount(req, res) {
  try {
    // Validate Data
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        Code: "USER_DATA_NOT_FOUND",
        message: "Fill all the require fields",
      });
    }

    // check user account exits
    const isAccountFound = await getUser(email);
    if (!isAccountFound) throw new Error("No User Found!");

    // Generate accessToken
    const accessToken = await genSignToken(isAccountFound);
    if (!accessToken)
      throw new Error("Failed to login. Please try again later!");

    // Response
    res.status(200).json({
      success: true,
      message: "User LoggedIn Success..",
      accessKey : accessToken
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ code: "ERR_TOKEN_GEN", message: err.message });
  }
}

function forgetPassword(req, res) {
  res.json({ message: "Password Updated..", user : req.body });
}

function DeactiveAccount(req, res) {
  res.json({ message: "User account is deactived no longer available!" });
}

module.exports = {
  getAllAccounts,
  createUserAccount,
  loginAccount,
  forgetPassword,
  DeactiveAccount,
};
