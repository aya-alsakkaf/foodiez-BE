const express = require("express");
const categoriesRouter = express.Router();

const { getAllCategories, addCategory } = require("./categories.controller");

categoriesRouter.get("/getCategories", getAllCategories);

categoriesRouter.post("/addCategory", addCategory);

module.exports = categoriesRouter;
