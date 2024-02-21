const filterVideogamesController = (videogames, filters) => {
  if (filters.location !== "all") {
    videogames = videogames.filter(
      (element) =>
        element.location.toLowerCase() === filters.location.toLowerCase()
    );
  }

  if (filters.genre !== "all") {
    videogames = videogames.filter((element) => {
      return element.genres.some(
        (genre) => genre.name.toLowerCase() === filters.genre.toLowerCase()
      );
    });
  }

  return videogames;
};

export default filterVideogamesController;
