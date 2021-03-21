const express = require("express");
const router = express.Router();

const {
  restaurantList,
  fetchRestaurant,
} = require("../controllers/restaurantControllers");

router.get("/", restaurantList);
router.get("/:restaurantID", fetchRestaurant);

module.exports = router;
