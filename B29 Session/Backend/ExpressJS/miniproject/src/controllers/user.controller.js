import Account from "../schema/user.schema.js";

export async function CreateUserAccount(req, res) {
  // Collection
  const userData = req.body; // name , email , password
  try {
    // Data Validation
    if (!userData) {
      return res
        .status(404)
        .json({ message: "Please fill all the required fields!" });
    }

    // db : store user data
    const queryRes = await Account.insertOne(userData);

    res.json({ message: "User Account Created..", data: req.body });
  } catch (error) {
    console.log(error);
  }
}

export async function RemoveUserAccount() {
  console.log("User Account Removed!");
}
