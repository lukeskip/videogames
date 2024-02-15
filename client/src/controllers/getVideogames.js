const HOST = "http://localhost:3001";
import axios from "axios";
import {
  getVideogamesRequest,
  getVideogamesSuccess,
  getVideogamesError,
} from "../redux/actions";

const getVideogames = async (dispatch) => {
  console.log("getting video games");
  dispatch(getVideogamesRequest());
  try {
    const videogames = await axios(`${HOST}/videogames`);
    dispatch(getVideogamesSuccess(videogames.data));
  } catch (error) {
    console.log(error.message);
    dispatch(getVideogamesError(error.message));
  }
};

export default getVideogames;
