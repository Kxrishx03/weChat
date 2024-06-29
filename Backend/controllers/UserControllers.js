const { User } = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "7d" });
};

//LOGIN CONTROLLER
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  //CHECK FOR FIELDS
  if (!username || !password) {
    res.send(400);
    throw Error("All fields must be filled");
  }
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "All fields must be filled" });
    }
  
    const match = await bcrypt.compare(password, user.password);
  
    if (!match) {
      return res.status(404).json({ error: "wrong password" })
    }
  
    const token = createToken(user._id);
    return res.status(200).json({ username, token });
  } catch (error) {
    return res.status(400).json({ error: "some error occured inside login api" });
  }
};

//SIGNUP CONTROLLER
const signupUser = async (req, res) => {
  const { name: username, email, password } = req.body;
  console.log(username);

  //CHECK FOR FIELDS
  if (!username || !password || !email) {
    return res.status(404).json({ error: "All fields must be filled" });
  }

  // Email CHECK
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // Password CHECK
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ error: "Weak password" });
  }

  try {
    //Pre-existing user
    const exists = await User.findOne({ email });

    if (exists) {
      res.status(400);
      throw Error("Email already in use");
    }

    //Username already taken
    const usernameExists = await User.findOne({ username });

    if (usernameExists) {
      return res.status(400).json({ error: "Email already in use" });
    }

    //ENTRY IN DB FOR USER
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ username, email, password: hash });
    const token = createToken(user._id);

    return res.status(200).json({ username, token });
  } catch (error) {
    return res.status(400).json({ error: "some error occured inside signup api" });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
