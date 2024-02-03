const { model, Schema } = require("mongoose");

const IngridentSchema = new Schema({
  ingrident: { type: String },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipes",
  },
});

module.exports = model("Ingrident", IngridentSchema);
