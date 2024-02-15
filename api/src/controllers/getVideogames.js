const axios = require("axios");
const getApiResults = require("./getApiResults");
const { Videogame, Genre } = require("../db");
const getVideogames = async (req, res) => {
  let videogames = [];
  console.log("getting Videogames...");
  try {
    const videogamesAPI = await getApiResults(
      "https://api.rawg.io/api/games?key=525d3e7efb4d4262a07941d31f29fafb&page_size=20"
    );

    const videogamesDB = await Videogame.findAll({
      include: Genre,
    });

    videogames = [...videogamesDB, ...videogamesAPI];

    res.json(videogames);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideogames;
