const getGenresController = (videogames) => {
  const genres = [];
  videogames.map((element) => {
    element.genres.map((genre) => {
      if (!genres.includes(genre.name.toLowerCase())) {
        genres.push(genre.name.toLowerCase());
      }
    });
  });

  return genres;
};

export default getGenresController;
