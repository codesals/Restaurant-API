module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Dish", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
      },
    },
    img: {
      type: DataTypes.STRING,
    },
    // defaultScope: {
    //   attributes: { exclude: ["updatedAt", "createdAt"] },
    // },
  });
};
