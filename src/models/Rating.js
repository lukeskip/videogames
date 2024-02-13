const { DataTypes } = require("sequelize");
const rating = (sequelize) => {
  sequelize.define("rating", {});
};

module.exports = rating;
