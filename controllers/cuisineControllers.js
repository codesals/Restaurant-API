const { Dish, Cuisine } = require("../db/models");

exports.cuisineList = async (req, res) => {
  try {
    const cuisines = await Cuisine.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Dish,
          attributes: ["name"],
          as: "dishes",
        },
      ],
    });
    res.json(cuisines);
  } catch (error) {
    next(error);
  }
};

exports.fetchCuisine = async (req, res, next) => {
  const { cuisineID } = req.params;
  try {
    const cuisine = await Cuisine.findByPk(cuisineID);
    res.status(201).json(cuisine);
  } catch (error) {
    next(error);
  }
};
