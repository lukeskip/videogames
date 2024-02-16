const axios = require("axios");

const getApiResults = async (url, page = 1, results = []) => {
  const { API_LIMIT } = process.env;
  try {
    let videogames = await axios(`${url}&page=${page}`);
    console.log("Page", page);
    console.log("Next", videogames.data.next);
    results = [...videogames.data.results, ...results];
    if (results.length <= Number(API_LIMIT)) {
      return getApiResults(url, page + 1, results);
    } else {
      return results;
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getApiResults;
