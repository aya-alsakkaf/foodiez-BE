const express = require("express");
const recipesRouter = express.Router();
const multer = require("multer");
const upload = require("../../middleware/multer.js");
const passport = require("passport");
const {
  getAllRecipes,
  addRecipe,
  recipeById,
} = require("./recipes.controller");

recipesRouter.get("/recipes", getAllRecipes);
recipesRouter.post(
  "/addRecipe",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  addRecipe
);
recipesRouter.get("/recipes/:_id", recipeById);

module.exports = recipesRouter;
