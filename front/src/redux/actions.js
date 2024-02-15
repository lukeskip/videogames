import axios from "axios";
const HOST = "http://localhost:3001";

const GET_VIDEOGAMES_REQUEST = "GET_VIDEOGAMES_REQUEST";
const GET_VIDEOGAMES_SUCCESS = "GET_VIDEOGAMES_SUCCESS";
const GET_VIDEOGAMES_ERROR = "GET_VIDEOGAMES_ERROR";

const getVideogames = () => {
  return async (dispatch) => {
    console.log("getting video games");
    dispatch(getVideogamesRequest());
    try {
      const videogames = await axios(`${HOST}/videogames`);
      console.log(videogames.data);
      dispatch(getVideogamesSuccess(videogames.data));
    } catch (error) {
      dispatch(getVideogamesError(error.message));
    }
  };
};

const getVideogamesRequest = (payload) => {
  return {
    type: GET_VIDEOGAMES_REQUEST,
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
  GET_VIDEOGAMES_REQUEST,
  GET_VIDEOGAMES_SUCCESS,
  GET_VIDEOGAMES_ERROR,
  getVideogames,
  getVideogamesRequest,
  getVideogamesSuccess,
  getVideogamesError,
};
