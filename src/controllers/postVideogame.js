const { Videogame, Genre } = require("../db.js");

const postVideogame = async (req, res) => {
  console.log("posting videogame...");
  const { name, description, platforms, image, release, rating, genre } =
    req.body;
  if (
    [name, description, platforms, image, release, rating, genre].every(
      (x) => x !== undefined
    )
  ) {
    try {
      const [genreDB, createdGenre] = await Genre.findOrCreate({
        where: { name: genre },
      });
      const [videogame, created] = await Videogame.findOrCreate({
        where: {
          name,
          release,
        },
        defaults: {
          description,
          platforms,
          image,
          rating,
        },
      });

      if (created) {
        videogame.addGenre(genreDB);
        return res.status(201).json({ message: `${videogame.name} created` });
      }

      return res
        .status(200)
        .json({ message: `${videogame.name} already in the database` });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(500).json({ message: "Fields are missing" });
  }
};

module.exports = postVideogame;
