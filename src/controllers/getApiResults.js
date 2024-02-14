const axios = require("axios");
const getApiResults = async (url, pages = 5) => {
  let results = [];
  for (let i = 1; i <= pages; i++) {
    try {
      const videogames = await axios(`${url}&page=${i}`);

      results = [...videogames.data.results, ...results];
    } catch (error) {
      throw new Error(error);
    }
  }
  return results;
};

module.exports = getApiResults;
