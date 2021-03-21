const express = require("express");
const cors = require("cors");

const db = require("./db/models");

const restaurantRoutes = require("./routes/restaurants");
const cuisineRoutes = require("./routes/cuisines");
const dishRoutes = require("./routes/dishes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/restaurants", restaurantRoutes);
app.use("/cuisines", cuisineRoutes);
app.use("/dishes", dishRoutes);

//path not found middleware
app.use((_, response, __) => {
  response.status(404).json({ message: "Path not found" });
});

//error handling middleware
app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({
    message: error.message || "Internal Server Error",
  });
});

const run = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
