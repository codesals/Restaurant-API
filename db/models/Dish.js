module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Dish", {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
      },
    },
  });
};
