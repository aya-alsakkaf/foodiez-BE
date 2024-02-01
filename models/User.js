const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipes",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
