const { DataTypes } = require("sequelize");

const videogame = (sequelize) => {
  sequelize.defien("videogame", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platforms: {
      type: DataType.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    air_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataType.INTEGER,
      allowNull: false,
    },
  });
};

module.exports = videogame;
