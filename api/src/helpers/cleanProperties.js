const cleanProperties = (array, location) => {
  if (array.length) {
    return array.map((item) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.background_image,
        location,
        release: item.release,
        genres: item.genres,
        rating: item.rating,
      };
    });
  } else return [];
};

module.exports = cleanProperties;
