const filterVideogamesController = (videogames, property, value) => {
  if (value !== "all") {
    return videogames.filter(
      (element) => element[property].toLowerCase() === value.toLowerCase()
    );
  }

  return videogames;
};

export default filterVideogamesController;
