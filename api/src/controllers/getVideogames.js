const axios = require("axios");
const getApiResults = require("./getApiResults");
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");
const cleanProperties = require("../helpers/cleanProperties");

const getVideogames = async (req, res) => {
  const { name } = req.query;
  const options = {};
  let videogames = [];
  console.log("getting Videogames...");
  try {
    let videogamesAPI = await getApiResults(
      "https://api.rawg.io/api/games?key=525d3e7efb4d4262a07941d31f29fafb&page_size=20"
    );

    console.log(videogamesAPI);
    videogamesAPI = cleanProperties(videogamesAPI);

    if (name) {
      videogamesAPI = videogamesAPI.filter((element) => {
        return element.name.toLowerCase().includes(name.toLowerCase());
      });

      options.where = {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      };
    }

    const videogamesDB = await Videogame.findAll({
      include: Genre,
      ...options,
    });

    videogames = [...videogamesDB, ...videogamesAPI];
    if (videogames.length) {
      res.json(videogames);
    } else {
      res.status(404).json({ message: "no se encontraron elementos" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideogames;
