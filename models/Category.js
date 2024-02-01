const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  categoryName: String,
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipes",
    },
  ],
});

module.exports = model("Category", CategorySchema);