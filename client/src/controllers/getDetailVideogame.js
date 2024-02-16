import axios from "axios";
import { loadingMode } from "../redux/actions";
const getDetailVideogame = async (id, dispatch) => {
  dispatch(loadingMode(true));
  const videogame = await axios(`http://localhost:3001/videogames/${id}`);
  dispatch(loadingMode(false));
  return videogame.data;
};

export default getDetailVideogame;
