const { DataTypes } = require("sequelize");
const genre = (sequelize) => {
  sequelize.define("genre", {
    name: {
      type: DataTypes.STRING,
    },
  });
};

module.exports = genre;
