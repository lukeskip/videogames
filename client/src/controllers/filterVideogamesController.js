const filterVideogamesController = (videogames, property, value) => {
  if (property === "origin") {
    if (value !== "all") {
      return videogames.filter(
        (element) => element[property].toLowerCase() === value.toLowerCase()
      );
    }
  }

  if (property === "genre") {
    if (value !== "all") {
      return videogames.filter((element) => {
        return element.genres.some(
          (genre) => genre.name.toLowerCase() === value.toLowerCase()
        );
      });
    }
  }

  return videogames;
};

export default filterVideogamesController;
