const axios = require("axios");
const getApiResults = require("./getApiResults");
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");
const cleanProperties = require("../helpers/cleanProperties");

const getVideogames = async (req, res) => {
  const { name } = req.query;
  const options = {};
  let videogames = [];
  let videogamesAPI = [];
  let videogamesDB = [];
  console.log("Getting Videogames...");

  // We serach in the API
  try {
    videogamesAPI = await getApiResults(
      "https://api.rawg.io/api/games?key=525d3e7efb4d4262a07941d31f29fafb&page_size=20"
    );
    videogamesAPI = cleanProperties(videogamesAPI);
  } catch (error) {
    // in case of error we send the error to the console
    console.log(error.message);
  }

  // We search in the DB
  try {
    if (name) {
      options.where = {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      };
    }
    videogamesDB = await Videogame.findAll({
      include: Genre,
      ...options,
    });
  } catch (error) {
    // in case of error we send the error to the console
    console.log(error.message);
  }

  // we apply filters
  if (name) {
    videogamesAPI = videogamesAPI.filter((element) => {
      return element.name.toLowerCase().includes(name.toLowerCase());
    });
  }

  // we combine array even if they're empty
  videogames = [...videogamesDB, ...videogamesAPI];

  if (videogames.length) {
    // if the final array is populated we send it to the client
    res.json(videogames);
  } else {
    // If the final array is empty we send a 404 error
    res.status(404).json({ message: "No se encontraron elementos" });
  }
};

module.exports = getVideogames;
