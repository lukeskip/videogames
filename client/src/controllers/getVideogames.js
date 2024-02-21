const HOST = import.meta.env.VITE_HOST;
import axios from "axios";
import {
  loadingMode,
  getVideogamesSuccess,
  getVideogamesError,
  setPage,
} from "../redux/actions";

const getVideogames = async (terms, dispatch) => {
  dispatch(loadingMode(true));
  try {
    // We receive the terms in an object so we transform it to a string to pass it in the url
    const queryString = new URLSearchParams(terms).toString();
    const videogames = await axios(`${HOST}/videogames?${queryString}`);
    dispatch(getVideogamesSuccess(videogames.data));
  } catch (error) {
    const errorMessage = error.response.data
      ? error.response.data.message
      : error.message;
    dispatch(getVideogamesError(errorMessage));
  }
};

export default getVideogames;
