module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Cuisine", {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
  });
};
