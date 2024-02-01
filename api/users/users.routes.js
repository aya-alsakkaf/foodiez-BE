const express = require("express");
const userRouter = express.Router();

const { register, login, getAllUsers } = require("./users.controller");
const passport  = require("passport");

userRouter.post("/register", register);
userRouter.post("/login", passport.authenticate("local", {session: false}) , login);
userRouter.get("/users", getAllUsers);

module.exports = userRouter;