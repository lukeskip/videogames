const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { videogames } = store.getState();
  localStorage.setItem("reduxState", JSON.stringify(videogames));
  return result;
};

export default localStorageMiddleware;
