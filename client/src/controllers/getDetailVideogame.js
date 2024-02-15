import axios from "axios";
const getDetailVideogame = async (id) => {
  let videogame = {};
  if (Number(id)) {
    console.log("buscamos en la base de datos");
    videogame = await axios(
      `https://api.rawg.io/api/games/${id}?key=525d3e7efb4d4262a07941d31f29fafb`
    );
    return videogame;
  } else {
    console.log("buscamos en la base de datos");
  }
};

export default getDetailVideogame;
