const { Restaurant, Cuisine } = require("../db/models");

exports.restaurantList = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      attributes: ["id", "name", "phone", "website", "description"],
      include: {
        model: Cuisine,
        as: "cuisines",
        attributes: {
          exclude: ["createdAt", "updatedAt", "id", "restaurantId"],
        },
      },
    });
    res.json(restaurants);
  } catch (error) {
    next(error);
  }
};

exports.fetchRestaurant = async (req, res, next) => {
  const { restaurantID } = req.params;
  try {
    const restaurant = await Restaurant.findByPk(restaurantID);
    res.status(201).json(restaurant);
  } catch (error) {
    next(error);
  }
};
