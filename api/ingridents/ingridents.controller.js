const Ingridents = require("../../models/Ingridents");

const getAllIngridents = async (req, res, next) => {
  try {
    const ingridents = await Ingridents.find();
    return res.status(200).json(ingridents);
  } catch (error) {
    next(error);
  }
};

const addIngridents = async (req, res, next) => {
  try {
    const ingridents = await Ingridents.create(req.body);
    return res.status(201).json(ingridents);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllIngridents,
  addIngridents,
};
