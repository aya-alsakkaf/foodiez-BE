const { model, Schema } = require("mongoose");

const StepsSchema = new Schema({
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipes",
  },
  step: String,
});

module.exports = model("Steps", StepsSchema);
