import { GET_VIDEOGAMES_SUCCESS, FILTER_VIDEOGAMES } from "../actions";
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    action.type === GET_VIDEOGAMES_SUCCESS ||
    action.type === FILTER_VIDEOGAMES
  ) {
    const { videogames } = store.getState();
    localStorage.setItem("reduxState", JSON.stringify(videogames));
  }
  return result;
};

export default localStorageMiddleware;
