//imports
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./database");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const passport = require("passport");
const userRouter = require("./api/users/users.routes");
const cors = require("cors");
const recipesRouter = require("./api/recipes/recipes.routes");
const categoriesRouter = require("./api/categories/categories.routes");
//init
const app = express();
const PORT = 8001;
app.use(express.json());
connectDB();

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(userRouter);
app.use(recipesRouter);
app.use(categoriesRouter);
app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
