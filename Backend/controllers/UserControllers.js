const { User } = require('../models/UserModel.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '7d' });
}

// LOGIN CONTROLLER
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  // CHECK FOR FIELDS
  if (!username || !password) {
    return res.status(400).json({ message: "Missing username or password!" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = createToken(user._id);
    return res.status(200).json({ username, token });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
}

// SIGNUP CONTROLLER
const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  // CHECK FOR FIELDS
  if (!username || !password || !email) {
    return res.status(400).json({ message: "Missing username or password or email!" });
  }

  try {
    // Check if email already exists
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Check if username already exists
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // ENTRY IN DB FOR USER
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({ username, email, password: hash });

    const token = createToken(user._id);
    return res.status(200).json({ username, token });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  loginUser,
  signupUser
}
