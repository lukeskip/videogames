import axios from "axios";
import "dotenv/config.js";

const getVideogamesController = async () => {
  try {
    const videogames = await axios(`${HOST}/videogames`);
    return videogames.data;
  } catch (error) {
    console.log(error);
  }
};
