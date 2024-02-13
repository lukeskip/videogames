const { DataTypes } = require("sequelize");

const videogame = (sequelize) => {
  sequelize.define("videogame", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};

module.exports = videogame;
