const { Videogame, Genre, Platform } = require("../db.js");

const postVideogame = async (req, res) => {
  console.log("posting videogame...");
  const { name, description, platforms, image, release, rating, genres } =
    req.body;
  console.log([name, description, platforms, image, release, rating, genres]);
  if (
    [name, description, platforms, image, release, rating, genres].every(
      (x, index) => {
        return x !== undefined;
      }
    )
  ) {
    try {
      const [videogame, created] = await Videogame.findOrCreate({
        where: {
          name,
          release,
        },
        defaults: {
          description,
          image,
          rating,
        },
      });

      if (created) {
        for (genre of genres) {
          const [genreDB, createdGenre] = await Genre.findOrCreate({
            where: { name: genre },
          });
          videogame.addGenre(genreDB);
        }

        for (platform of platforms) {
          const [platformDB, createdPlatform] = await Platform.findOrCreate({
            where: { name: platform },
          });
          videogame.addPlatform(platformDB);
        }

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
