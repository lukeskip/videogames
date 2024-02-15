const axios = require("axios");
const getApiResults = require("./getApiResults");
const { Videogame } = require("../db");
const getVideogames = async (req, res) => {
  let videogames = [];
  const videogamesDB = [];
  console.log("getting Videogames...");
  try {
    const videogamesAPI = await getApiResults(
      "https://api.rawg.io/api/games?key=`525d3e7efb4d4262a07941d31f29fafb`&page_size=20"
    );
    videogames = [...videogamesDB, ...videogamesAPI];

    res.json(videogames);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideogames;
