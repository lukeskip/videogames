const orderVideogames = (videogames, property, order) => {
  videogames.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });

  if (order === "desc") videogames.reverse();

  return videogames;
};

export default orderVideogames;
