const axios = require("axios");
const { Videogame, Genre, Platform } = require("../db");
const { API_KEY, API_HOST } = process.env;
const getVideogameDetail = async (req, res) => {
  const { id } = req.params;
  let videogame = undefined;
  const errors = [];
  try {
    if (Number(id)) {
      console.log("buscamos en la API");
      const { data } = await axios(`${API_HOST}/games/${id}?${API_KEY}`);
      videogame = { ...data, image: data.background_image, location: "api" };
    } else if (id.length >= 16) {
      videogame = await Videogame.findByPk(id, { include: [Genre, Platform] });
      videogame = { ...videogame.dataValues, location: "db" };
    }
  } catch (error) {
    errors.push(error);
  }

  if (!videogame) {
    return res
      .status(404)
      .json({ message: "Video juego no encontrado", errors });
  }
  return res.json(videogame);
};

module.exports = getVideogameDetail;
