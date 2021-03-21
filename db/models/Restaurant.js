// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Restaurant", {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    website: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
      // defaultScope: {
      //   attributes: { exclude: ["updatedAt", "createdAt"] },
      // },
    },
  });
};
