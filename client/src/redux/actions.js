import axios from "axios";

const LOADING_MODE = "LOADING_MODE";
const GET_VIDEOGAMES_SUCCESS = "GET_VIDEOGAMES_SUCCESS";
const GET_VIDEOGAMES_ERROR = "GET_VIDEOGAMES_ERROR";

const getVideogames = () => {
  return async (dispatch) => {
    console.log("getting video games");
    dispatch(loadingMode(true));
    try {
      const videogames = await axios(`${HOST}/videogames`);
      console.log(videogames.data);
      dispatch(getVideogamesSuccess(videogames.data));
    } catch (error) {
      dispatch(getVideogamesError(error.message));
    }
  };
};

const loadingMode = (payload) => {
  return {
    type: LOADING_MODE,
    payload: payload,
  };
};

const getVideogamesSuccess = (payload) => {
  return {
    type: GET_VIDEOGAMES_SUCCESS,
    payload: payload,
  };
};

const getVideogamesError = (payload) => {
  return {
    type: GET_VIDEOGAMES_ERROR,
    payload: payload,
  };
};

export {
  LOADING_MODE,
  GET_VIDEOGAMES_SUCCESS,
  GET_VIDEOGAMES_ERROR,
  loadingMode,
  getVideogames,
  getVideogamesSuccess,
  getVideogamesError,
};
