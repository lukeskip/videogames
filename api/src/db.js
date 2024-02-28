require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const { Videogame, Genre, User, Rating, Platform } = sequelize.models;

Videogame.belongsToMany(Genre, {
  through: "videogame_genre",
});
Genre.belongsToMany(Videogame, { through: "videogame_genre" });

Videogame.belongsTo(User);

User.hasMany(Videogame);
User.hasMany(Rating);

Videogame.belongsTo(User);
Videogame.hasMany(Rating);
Videogame.belongsToMany(Platform, { through: "videogame_platform" });

Rating.belongsTo(User);
Rating.belongsTo(Videogame);

Platform.belongsToMany(Videogame, { through: "videogame_platform" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
