const axios = require("axios");
const getApiResults = async (url, pages = 1) => {
  let results = [];
  for (let i = 1; i <= pages; i++) {
    try {
      const videogames = await axios(`${url}&page=${i}`);
      console.log(videogames.data.results);
      results = [...videogames.data.results, ...results];
    } catch (error) {
      throw new Error(error);
    }
  }
  return results;
};

module.exports = getApiResults;
