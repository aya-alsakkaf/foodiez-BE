const express = require("express");
const recipesRouter = express.Router();
const multer = require("multer");
const upload = require("../../middleware/multer.js");
const {
  getAllRecipes,
  addRecipe,
  recipeById,
} = require("./recipes.controller");
const passport = require("passport");

recipesRouter.get("/recipes", getAllRecipes);
recipesRouter.post("/addRecipe", upload.single("image"), addRecipe);
recipesRouter.get("/recipeByID/:_id", recipeById);

module.exports = recipesRouter;
