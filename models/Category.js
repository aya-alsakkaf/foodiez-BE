const { Model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  categoryName: String,
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipes",
    },
  ],
});

module.exports = Model("Category", CategorySchema);