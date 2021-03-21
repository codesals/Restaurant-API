const express = require("express");
const router = express.Router();

const {
  cuisineList,
  fetchCuisine,
} = require("../controllers/cuisineControllers");

router.get("/", cuisineList);
router.get("/:cuisineID", fetchCuisine);

module.exports = router;
