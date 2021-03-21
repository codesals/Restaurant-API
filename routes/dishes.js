const express = require("express");
const router = express.Router();

const {
  dishList,
  dishCreate,
  dishDelete,
  dishUpdate,
  fetchDish,
} = require("../controllers/dishControllers");

router.get("/", dishList);
router.post("/", dishCreate);
router.delete("/:dishID", dishDelete);
router.put("/:dishID", dishUpdate);
router.get("/:dishID", fetchDish);

module.exports = router;
