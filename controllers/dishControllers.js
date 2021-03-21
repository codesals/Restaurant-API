const { Dish, Cuisine } = require("../db/models");

exports.dishList = async (req, res, next) => {
  try {
    const dishes = await Dish.findAll({
      order: ["id"],
      attributes: ["id", "name", "price"],
      include: {
        model: Cuisine,
        as: "cuisine",
        attributes: ["name"],
      },
    });
    res.json(dishes);
  } catch (error) {
    next(error);
  }
};

exports.dishCreate = async (req, res, next) => {
  try {
    const newDish = await Dish.create(req.body);
    res.status(201).json(newDish);
  } catch (error) {
    next(error);
  }
};

exports.dishDelete = async (req, res, next) => {
  const { dishID } = req.params;
  try {
    const foundDish = await Dish.findByPk(dishID);
    if (foundDish) {
      await foundDish.destroy();
      res.status(200).json({ message: "Dish deleted successfully!" });
    } else res.status(404).json({ message: "Dish not found!" });
  } catch (error) {
    next(error);
  }
};

exports.dishUpdate = async (req, res, next) => {
  const { dishID } = req.params;
  try {
    const foundDish = await Dish.findByPk(dishID);
    if (foundDish) {
      await foundDish.update(req.body);
      res.status(200).json({ message: "Dish updated successfully!" });
    } else res.status(404).json({ message: "Dish not found!" });
  } catch (error) {
    next(error);
  }
};

exports.fetchDish = async (req, res, next) => {
  const { dishID } = req.params;
  try {
    const dish = await Dish.findByPk(dishID);
    res.status(201).json(dish);
  } catch (error) {
    next(error);
  }
};
