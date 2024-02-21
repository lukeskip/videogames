const getApiResults = require("../controllers/getApiResults");
const { Genre, Platform } = require("../db");
const { API_HOST, API_KEY } = process.env;
const saveGenresToDB = async () => {
  try {
    const videogames = await getApiResults(`${API_HOST}/games?${API_KEY}`);
    console.log(videogames.length);
    for (videogame of videogames) {
      console.log(`looking ${videogame}`);
      for (genre of videogame.genres) {
        const [newGenre, created] = await Genre.findOrCreate({
          where: { name: genre.name },
        });

        if (created) {
          console.log(`${newGenre} was created`);
        }
      }

      for (platform of videogame.platforms) {
        const [newPlatform, created] = await Platform.findOrCreate({
          where: { name: platform.platform.name },
        });

        if (created) {
          console.log(`${newPlatform} was created`);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }

  return true;
};

module.exports = saveGenresToDB;
