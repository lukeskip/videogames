const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { videogames } = store.getState();
  if (videogames.videogames.length) {
    localStorage.setItem("reduxState", JSON.stringify(videogames));
  }
  return result;
};

export default localStorageMiddleware;
