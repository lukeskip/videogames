const cleanProperties = (array) => {
  return array.map((item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.background_image,
      location: item.location,
      release: item.release,
      genres: item.genres,
    };
  });
};

module.exports = cleanProperties;
