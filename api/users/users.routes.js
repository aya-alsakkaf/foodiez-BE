const express = require("express");
const userRouter = express.Router();

const {
  register,
  login,
  getAllUsers,
  getUserById,
  getUserRecipes,
} = require("./users.controller");
const passport = require("passport");

userRouter.post("/register", register);
userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);
userRouter.get("/users", getAllUsers);
userRouter.get("/user/:_id", getUserById);
userRouter.get(
  "/user/:_id/recipes",
  passport.authenticate("jwt", { session: false }),
  getUserRecipes
);

module.exports = userRouter;
