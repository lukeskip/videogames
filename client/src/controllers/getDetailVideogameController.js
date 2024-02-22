import axios from "axios";
import { loadingMode, setVideogamesError } from "../redux/actions";
const getDetailVideogame = async (id, dispatch) => {
  try {
    dispatch(loadingMode(true));
    const videogame = await axios(`http://localhost:3001/videogames/${id}`);
    dispatch(loadingMode(false));
    return videogame.data;
  } catch (error) {
    dispatch(setVideogamesError(error.message));
  }
};

export default getDetailVideogame;
