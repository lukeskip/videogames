const { Videogame, Genre } = require("../db.js");

const postVideogame = async (req, res) => {
  console.log("posting videogame...");
  const { name, description, platforms, image, release, rating, genre } =
    req.body;

  try {
    genreDB = await Genre.findOrCreate({ where: { name: genre } });

    const videogame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      release,
      rating,
      genre: genreDB.id,
    });

    res.status(201).json({ message: "Videogame created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postVideogame;
