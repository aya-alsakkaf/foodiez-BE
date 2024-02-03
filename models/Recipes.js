const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");

const RecipesSchema = new Schema({
  title: String,
  cookTime: {
    value: { type: String },
    type: { type: String },
  },
  prepTime: {
    value: { type: String },
    type: { type: String },
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  ingridents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingrident",
    },
  ],
  steps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Steps",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: { type: String, default: "media/defaultImagePicture.png" },
});

module.exports = model("Recipes", RecipesSchema);
