const { verifySignToken } = require("../utils/auth");
const { getUser } = require("../services/user.services");

async function reqValidator(req, res, next) {
  try {
    // Get Access Token
    const accessToken = req.headers.authorization;
    if (!accessToken)
      throw new Error("Invalid login. Please try to login again!");

    // Validation : Token
    const validPayload = verifySignToken(accessToken ?? null);
    if (!validPayload) throw new Error("Access Denied! Please contact admin.");

    // check user exist
    const isUserFound = await getUser(validPayload.email ?? "");
    if (!isUserFound) throw new Error("No User Found! Pleasee register");

    next(); // req forward
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ code: "ERR_INVALID_ACCESS", message: err.message });
  }
}

module.exports = {reqValidator};
