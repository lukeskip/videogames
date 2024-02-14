const axios = require("axios");
const getApiResults = require("./getApiResults");
const { Videogame } = require("../db");
const getVideogames = async (req, res) => {
  console.log("getting Videogames...");
  try {
    const resultsAPI = await getApiResults(
      "https://api.rawg.io/api/games?key=525d3e7efb4d4262a07941d31f29fafb"
    );

    res.json(resultsAPI.length);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideogames;
