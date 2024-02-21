const { Genre } = require("../db");
const getGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    if (genres.length) {
      return res.json(genres);
    }

    return res.status(404).json({ message: "No se encontró ningún género" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = getGenres;
