import axios from "axios";
const getDetailVideogame = async (id) => {
  const videogame = await axios(`http://localhost:3001/videogames/${id}`);
  return videogame.data;
};

export default getDetailVideogame;
