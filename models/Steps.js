const { Model, Schema } = require("mongoose");

const StepsSchema = new Schema({
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipes",
  },
  steps: [String],
});

module.exports = Model("Steps", CategorySchema);
