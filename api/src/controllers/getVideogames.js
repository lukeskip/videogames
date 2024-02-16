const axios = require("axios");
const getApiResults = require("./getApiResults");
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");
const cleanProperties = require("../helpers/cleanProperties");
const { API_HOST, API_KEY } = process.env;

const getVideogames = async (req, res) => {
  const { name } = req.query;
  const options = {};
  let videogames = [];
  let videogamesAPI = [];
  let videogamesDB = [];
  console.log("Getting Videogames...");

  // We serach in the API
  try {
    let queryString;

    // if name is defined we build a object and pass it as a string in the url
    if (name) {
      const terms = {
        search: name,
      };
      queryString = new URLSearchParams(terms).toString();
    }

    videogamesAPI = await getApiResults(`${API_HOST}/games?${API_KEY}`);
    console.log(videogamesAPI.length);
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
