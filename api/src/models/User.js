const { DataTypes } = require("sequelize");
const user = (sequelize) => {
  sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = user;
