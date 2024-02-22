import axios from "axios";

const LOADING_MODE = "LOADING_MODE";
const GET_VIDEOGAMES_SUCCESS = "GET_VIDEOGAMES_SUCCESS";
const FILTER_VIDEOGAMES = "FILTER_VIDEOGAMES";
const SET_PAGE = "SET_PAGE";
const SET_CREDENTIALS = "SET_CREDENTIALS";
const RESET_STORE = "RESET_STORE";
const SET_VIDEOGAMES_ERROR = "SET_VIDEOGAMES_ERROR";

const loadingMode = (payload) => {
  return {
    type: LOADING_MODE,
    payload: payload,
  };
};

const setPage = (payload) => {
  return {
    type: SET_PAGE,
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

const setVideogamesError = (payload) => {
  return {
    type: SET_VIDEOGAMES_ERROR,
    payload: payload,
  };
};
const setCredentials = (payload) => {
  return {
    type: SET_CREDENTIALS,
    payload: payload,
  };
};
const resetStore = () => {
  return {
    type: RESET_STORE,
  };
};

export {
  LOADING_MODE,
  SET_PAGE,
  GET_VIDEOGAMES_SUCCESS,
  FILTER_VIDEOGAMES,
  SET_CREDENTIALS,
  RESET_STORE,
  SET_VIDEOGAMES_ERROR,
  setVideogamesError,
  resetStore,
  setPage,
  filterVideogames,
  loadingMode,
  getVideogamesSuccess,
  setCredentials,
};
