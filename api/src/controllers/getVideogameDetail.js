const axios = require("axios");
const getVideogameDetail = async (req, res) => {
  const { id } = req.params;
  let videogame = undefined;
  console.log(id);
  if (Number(id)) {
    console.log("buscamos en la API");
    const { data } = await axios(
      `https://api.rawg.io/api/games/${id}?key=525d3e7efb4d4262a07941d31f29fafb`
    );
    videogame = data;
  } else {
    console.log("buscamos en la base de datos");
  }

  if (!videogame) {
    return res.status(404).json({ message: "Video juego no encontrado" });
  }

  return res.json(videogame);
};

module.exports = getVideogameDetail;
