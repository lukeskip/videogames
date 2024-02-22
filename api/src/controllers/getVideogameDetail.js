const axios = require("axios");
const { Videogame, Genre, Platform } = require("../db");
const { API_KEY, API_HOST } = process.env;
const getVideogameDetail = async (req, res) => {
  const { id } = req.params;
  let videogame = undefined;
  try {
    if (Number(id)) {
      console.log("buscamos en la API");
      const { data } = await axios(`${API_HOST}/games/${id}?${API_KEY}`);
      videogame = { ...data, image: data.background_image, location: "api" };
    } else {
      videogame = await Videogame.findByPk(id, { include: [Genre, Platform] });
      videogame = { ...videogame.dataValues, location: "db" };
    }
  } catch (error) {
    console.log(error.message);
  }

  if (!videogame) {
    return res.status(404).json({ message: "Video juego no encontrado" });
  }
  console.log(videogame);
  return res.json(videogame);
};

module.exports = getVideogameDetail;
