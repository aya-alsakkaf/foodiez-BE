const { Model, Schema } = require("mongoose");

const IngridentSchema = new Schema({
  ingridentName: String,
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipes",
    },
  ],
});

module.exports = Model("Ingrident", IngridentSchema);
