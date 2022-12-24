const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create a new User
const registerUser = async (req, res, next) => {
  // Create a new User with the appropriate Schema
  const { Name, Role, Email, Password } = req.body;
  try {
    const existingUser = await User.findOne({ Email: Email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const result = await User.create({
      Email: Email,
      Password: hashedPassword,
      Name: Name,
      Role: Role,
    });

    const token = jwt.sign(
      { Email: result.Email, id: result._id },
      process.env.SECRET_KEY
    );
    res
      .status(201)
      .json({ User: result, message: "User Created !", token: token });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const signinUser = async (req, res, next) => {
  const { Email, Password } = req.body;
  try {
    const existingUser = await User.findOne({ Email: Email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not Found" });
    }

    const matchPassword = await bcrypt.compare(Password, existingUser.Password);

    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { Email: existingUser.Email, id: existingUser._id },
      process.env.SECRET_KEY
    );

    res
      .status(201)
      .json({ User: existingUser, message: "User Logged in !", token: token });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const allUsers = async (req, res, next) => {
  try {
    const Users = await User.find().select("-Password");
    if (!Users) {
      return res.status(404).json({ message: "Users not Found" });
    }

    res.status(200).json({ message: `${Users.length} Users Found`, Users });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const allMembers = async (req, res, next) => {
  try {
    const Members = await User.find({ Role: "member" }).select("-Password");
    if (!Members) {
      return res.status(404).json({ message: "Members not Found" });
    }

    res.status(200).json({ message: `${Members.length} Members Found`, Members });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

const allManagers = async (req, res, next) => {
  try {
    const Managers = await User.find({ Role: "manager" }).select("-Password");
    if (!Managers) {
      return res.status(404).json({ message: "Managers not Found" });
    }

    res.status(200).json({ message: `${Managers.length} Managers Found`, Managers });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    next(error);
  }
};

module.exports = {
  registerUser,
  signinUser,
  allUsers,
  allMembers,
  allManagers,
};