const Recipes = require("../../models/Recipes");
const Ingrident = require("../../models/Ingridents");
const Steps = require("../../models/Steps");
const User = require("../../models/User");
const Category = require("../../models/Category");

const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipes.find()
      .populate("ingridents", "ingrident")
      .populate("steps", "step")
      .populate("category", "categoryName");
    return res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

const addRecipe = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const categoryID = await Category.findOne({
      categoryName: req.body.category,
    });

    if (categoryID) {
      req.body.category = categoryID._id;
    } else {
      const category = await Category.create({
        categoryName: req.body.category,
      });
      req.body.category = category._id;
    }

    req.body.ingredients = Array.isArray(req.body.ingredients)
      ? req.body.ingredients
      : [req.body.ingredients];
    req.body.steps = Array.isArray(req.body.steps)
      ? req.body.steps
      : [req.body.steps];

    req.body.ingredients = req.body.ingredients.map((ing) => {
      return { ingrident: ing };
    });
    req.body.steps = req.body.steps.map((step) => {
      return { step: step };
    });

    const ingredients = await Ingrident.insertMany(req.body.ingredients);
    console.log(ingredients);
    const steps = await Steps.insertMany(req.body.steps);

    req.body.ingridents = ingredients.map((ing) => ing._id);
    req.body.steps = steps.map((step) => step._id);

    const recipe = await Recipes.create(req.body);
    const updatedRecipe = await Recipes.findByIdAndUpdate(recipe._id, {
      user: req.user._id,
    });
    await User.findByIdAndUpdate(req.user._id, {
      $push: { recipes: recipe._id },
    });

    await Ingrident.updateMany(
      {
        _id: { $in: ingredients.map((ing) => ing._id) },
      },
      { $push: { recipe: recipe._id } }
    );
    await Steps.updateMany(
      {
        _id: { $in: steps.map((step) => step._id) },
      },
      { $push: { recipe: recipe._id } }
    );

    return res.status(201).json(updatedRecipe);
  } catch (error) {
    next(error);
  }
};

const recipeById = async (req, res, next) => {
  try {
    const recipe = await Recipes.findById(req.params._id)
      .populate("ingridents", "ingrident")
      .populate("steps", "step");
    return res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRecipes,
  addRecipe,
  recipeById,
};
