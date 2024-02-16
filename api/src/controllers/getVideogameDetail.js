const axios = require("axios");
const { Videogame, Genre } = require("../db");
const getVideogameDetail = async (req, res) => {
  const { id } = req.params;
  let videogame = undefined;
  try {
    // if((isNaN(id)) && (id.length === 36)) checa esto
    if (Number(id)) {
      console.log("buscamos en la API");
      const { data } = await axios(
        `https://api.rawg.io/api/games/${id}?key=525d3e7efb4d4262a07941d31f29fafb`
      );
      videogame = { ...data, image: data.background_image, location: "API" };
    } else {
      console.log("buscamos en la En la base de datos");
      videogame = await Videogame.findByPk(id, { include: Genre });
    }
  } catch (error) {
    console.log(error.message);
  }

  if (!videogame) {
    return res.status(404).json({ message: "Video juego no encontrado" });
  }

  return res.json(videogame);
};

module.exports = getVideogameDetail;
