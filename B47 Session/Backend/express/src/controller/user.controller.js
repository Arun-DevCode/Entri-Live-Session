const {
  createNewUser,
  getAllUsers,
  getUser,
} = require("../services/user.services");

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

async function UpdateUserAccount(req, res) {
  try {
    // Get AccountId
    const { accountId } = req.params;
    if (!accountId) {
      throw new Error("Please login again!");
    }

    // check account exist
    const isAccountFound = await getUser(accountId ?? null);
    console.log(isAccountFound);
  } catch (err) {
    return res.status(404).json({ message: err.message, success: false });
  }
}

function forgetPassword(req, res) {
  res.json({ message: "Password Updated.." });
}

function DeactiveAccount(req, res) {
  res.json({ message: "User account is deactived no longer available!" });
}

module.exports = {
  getAllAccounts,
  createUserAccount,
  UpdateUserAccount,
  forgetPassword,
  DeactiveAccount,
};
