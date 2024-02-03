const express = require("express");
const ingridentsRouter = express.Router();


const {getAllIngridents, addIngridents} = require("./ingridents.controller");

ingridentsRouter.get("/ingridents", getAllIngridents);

ingridentsRouter.post("/addIngridents", addIngridents);

module.exports = ingridentsRouter;