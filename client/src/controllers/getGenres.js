import axios from "axios";
const HOST = import.meta.env.VITE_HOST;

const getGenres = async () => {
  try {
    const genres = await axios(`${HOST}/genres`);
    return genres.data;
  } catch (error) {
    console.log(error);
  }
};
export default getGenres;
