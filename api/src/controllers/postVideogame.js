const { Videogame, Genre, Platform } = require("../db.js");

const postVideogame = async (req, res) => {
  const { name, description, platforms, image, release, rating, genres } =
    req.body;
  console.log(name, description, platforms, image, release, rating, genres);
  if (
    ![name, description, platforms, image, release, rating, genres].every(
      (x, index) => {
        return x !== undefined;
      }
    )
  ) {
    return res
      .status(500)
      .json({ status: false, message: "Fields are missing" });
  }

  if (Number(rating) < 0 || Number(rating) > 5) {
    return res
      .status(500)
      .json({ status: false, message: "Rating must be between 0 and 5" });
  }

  if (!Array.isArray(platforms) || !platforms.length) {
    return res.status(500).json({
      status: false,
      message: "Platforms should be an array with at least one element",
    });
  }

  if (!Array.isArray(genres) || !genres.length) {
    return res.status(500).json({
      status: false,
      message: "Platforms should be an array with at least one element",
    });
  }

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

      return res.status(201).json({
        status: true,
        message: `${videogame.name} created`,
        videogame: videogame,
      });
    }

    return res.status(200).json({
      status: false,
      message: `${videogame.name} already in the database`,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = postVideogame;
