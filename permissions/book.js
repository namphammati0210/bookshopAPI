const { ADMIN_ROLE, SELLER_ROLE } = require("../constansts/role");

const canDeleteBook = (req, res, next) => {
  if (req.role === ADMIN_ROLE || req.role === SELLER_ROLE) {
    next();
  }

  return res.sendStatus(403);
};

module.exports = {
  canDeleteBook,
};
