const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");

const RecipesSchema = new Schema({
  title: String,
  cookTime: String,
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  ingrident: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingrident",
    },
  ],
  steps: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Steps",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Recipes", RecipesSchema);
