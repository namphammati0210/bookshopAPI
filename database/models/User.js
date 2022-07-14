const mongoose = require("mongoose");
const { ADMIN_ROLE, USER_ROLE, SELLER_ROLE } = require("../../constansts/role");

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: String,
  password: String,
  fullname: String,
  role: {
    type: String,
    enum: [USER_ROLE, ADMIN_ROLE, SELLER_ROLE],
    default: USER_ROLE,
  },
});

// tạo model
const User = mongoose.model("User", UserSchema);

module.exports = User;
