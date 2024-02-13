const { DataTypes } = require("sequelize");
const user = (sequelize) => {
  sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
};

module.exports = user;
