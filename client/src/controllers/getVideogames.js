const HOST = import.meta.env.VITE_HOST;
import axios from "axios";
import {
  loadingMode,
  getVideogamesSuccess,
  getVideogamesError,
  setPage,
} from "../redux/actions";

const getVideogames = async (terms, dispatch) => {
  console.log("getting video games");
  dispatch(loadingMode(true));
  try {
    // We receive the terms in an object so we transform it to a string to pass it in the url
    const queryString = new URLSearchParams(terms).toString();

    const videogames = await axios(`${HOST}/videogames?${queryString}`);
    dispatch(getVideogamesSuccess(videogames.data));
    dispatch(setPage(1));
  } catch (error) {
    dispatch(getVideogamesError(error.response.data.message));
  }
};

export default getVideogames;
