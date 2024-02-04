const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
require("dotenv").config();

const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

const findUser = async (username) => {
  try {
    return await User.findOne({ username });
  } catch (error) {
    return error;
  }
};

const generateToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY);
  return token;
};

const register = async (req, res, next) => {
  try {
    const user = await findUser(req.body.username);
    if (user)
      return res.status(400).json({ message: "Username already exists" });
    const password = await hashPassword(req.body.password);
    req.body.password = password;
    const newUser = await User.create(req.body);
    const token = await generateToken(newUser);
    return res.status(201).json({ token: token });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const token = generateToken(req.user);
    return res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).json("Server Error");
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate("recipes");
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id).populate("recipes");

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const getUserRecipes = async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id).populate("recipes");
    return res.status(200).json(user.recipes);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  getUserRecipes,
};
