// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Restaurant", {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
};
