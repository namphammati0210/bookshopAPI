const { hashPassword, checkPassword } = require("../utils/bcrypt");
const { createToken } = require("../utils/jwt");
const User = require("../database/models/User");

const register = async (req, res, next) => {
  try {
    let data = req.body;
    const user = await User.findOne({ email: data.email });

    if (user) return res.status(400).send("user already exist");

    const hashedPassword = await hashPassword(data.password);

    const newUser = await User.create({ ...data, password: hashedPassword });

    if (!newUser) return res.status(500).send("Internal server error");

    return res.status(200).send(newUser);
  } catch (error) {
    console.log("🚀 ~ file: auth.js ~ line 19 ~ router.post ~ error", error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return res.status(400).send("empty email or password");

    const foundUser = await User.findOne({ email });

    if (!foundUser) return res.status(403).send("Can't find any user");

    const isValidPassword = await checkPassword(password, foundUser.password);

    if (!isValidPassword) return res.status(401).send("Password is not valid");

    const { email: userEmail, role, fullname } = foundUser;

    const payload = { email: userEmail, role, fullname };

    const token = await createToken(payload);

    res.cookie("access_token", token, {
      httpOnly: true,
    });

    return res.status(200).send("Login successfully !!!");
  } catch (error) {
    console.log("🚀 ~ file: auth.js ~ line 47 ~ router.post ~ error", error);
    next(error);
  }
};

module.exports = {
  register,
  login,
};
