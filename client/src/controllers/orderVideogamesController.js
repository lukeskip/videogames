const orderVideogames = (videogames, property, order) => {
  console.log(property, order);

  if (order === "desc") videogames.reverse();

  videogames.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });

  console.log(videogames);
  return videogames;
};

export default orderVideogames;
