import axios from "axios";

const LOADING_MODE = "LOADING_MODE";
const GET_VIDEOGAMES_SUCCESS = "GET_VIDEOGAMES_SUCCESS";
const GET_VIDEOGAMES_ERROR = "GET_VIDEOGAMES_ERROR";
const FILTER_VIDEOGAMES = "FILTER_VIDEOGAMES";

const loadingMode = (payload) => {
  return {
    type: LOADING_MODE,
    payload: payload,
  };
};

const filterVideogames = (payload) => {
  return {
    type: FILTER_VIDEOGAMES,
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
  FILTER_VIDEOGAMES,
  filterVideogames,
  loadingMode,
  getVideogamesSuccess,
  getVideogamesError,
};
