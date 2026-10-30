const db = require("../schema/db");

function createNewUser(user) {
  // Validation
  if (!user) {
    return null;
  }

  // DB : Store
  db.push(user);
}

module.exports = { createNewUser };