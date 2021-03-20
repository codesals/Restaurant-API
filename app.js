const express = require("express");
const db = require("./db/models");
const {Restaurant} = require("./db/models");
const {Cuisine, Dish} = require("./db/models");

const app = express();


const restaurantList = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      attributes: ["id", "name","phone","website","description"],
      include: {
        model: Cuisine,
        // as:"cuisines",
        attributes: { exclude: ["createdAt", "updatedAt","id","restaurantId"] },
      },
    });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const cuisineList = async (req, res) => {
  try {
    const cuisines = await Cuisine.findAll({
      attributes: ["id", "name"],
  include: [{
        model: Dish,
        attributes:  ["name",] ,
      },
    ]
    });
    res.json(cuisines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const dishList = async (req, res) => {
  try {
    const dishes = await Dish.findAll({
      attributes: ["id", "name","price"],
      include: {
        model: Cuisine,
        attributes: ["name"],
      },
    });
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


app.get("/Restaurant", restaurantList);
app.get("/Cuisine", cuisineList);
app.get("/Dish", dishList);

const run = async () => {
  try {
    await db.sequelize.sync({alter:true});
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
