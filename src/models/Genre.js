const { DataTypes } = require("sequelize");
const genre = (sequelize) => {
  sequelize.define({
    name: {
      type: DataTypes.STRING,
    },
  });
};

module.exports = genre;
