// Check Permission
function checkPermission(req, res, next) {
  const accessValiditity = true;

  if (!accessValiditity) {
    return res.json({ message: "You don't have permission!!" });
  }
  next();
}

module.exports = { checkPermission };
