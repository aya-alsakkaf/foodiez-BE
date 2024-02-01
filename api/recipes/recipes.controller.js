const Recipes = require("../../models/Recipes");

const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipes.find();
    return res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllRecipes,
};
