const { DataTypes } = require("sequelize");
const platform = (sequelize) => {
  sequelize.define("platform", {
    name: {
      type: DataTypes.STRING,
    },
  });
};

module.exports = platform;
