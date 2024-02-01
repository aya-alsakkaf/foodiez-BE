const express = require("express");
const recipesRouter = express.Router();

const {getAllRecipes} = require("./recipes.controller");
const passport  = require("passport");

recipesRouter.get("/recipes", getAllRecipes);
// userRouter.post("/login", passport.authenticate("local", {session: false}) , login);
// userRouter.get("/users", getAllUsers);

module.exports = recipesRouter;