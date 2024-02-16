const axios = require("axios");
const getApiResults = async (url, pages = 1) => {
  let results = [];
  for (let i = 1; i <= pages; i++) {
    try {
      const videogames = await axios(`${url}&page=${i}`);
      results = [...videogames.data.results, ...results];
    } catch (error) {
      console.error(`Error fetching data for page ${i}:`, error.message);
    }
  }
  return results;
};

module.exports = getApiResults;
