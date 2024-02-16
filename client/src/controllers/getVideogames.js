const HOST = "http://localhost:3001";
import axios from "axios";
import {
  getVideogamesRequest,
  getVideogamesSuccess,
  getVideogamesError,
} from "../redux/actions";

const getVideogames = async (dispatch, terms) => {
  console.log("getting video games");
  dispatch(getVideogamesRequest());
  try {
    // We receive the terms in an object so we transform it to a string to pass it in the url
    const queryString = new URLSearchParams(terms).toString();

    const videogames = await axios(`${HOST}/videogames?${queryString}`);
    dispatch(getVideogamesSuccess(videogames.data));
  } catch (error) {
    console.log(error.message);
    dispatch(getVideogamesError(error.message));
  }
};

export default getVideogames;
