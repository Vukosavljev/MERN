const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async store(req, res) {
    try {
      const { firstName, lastName, password, email } = req.body;
      const userExist = await User.findOne({ email });

      if (userExist)
        return res
          .status(400)
          .json("User/email already exist, do you want to login instead?");

      const hasPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        firstName,
        lastName,
        password: hasPassword,
        email,
      });

      return res.json(newUser);
    } catch (error) {
      throw Error(`Error while creating a new user: ${error}`);
    }
  },
};
