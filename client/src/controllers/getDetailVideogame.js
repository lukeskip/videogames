import axios from "axios";
const getDetailVideogame = async (id) => {
  return await axios(`http://localhost:3001/videogames/${id}`);
};

export default getDetailVideogame;
