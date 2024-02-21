import axios from "axios";
const HOST = import.meta.env.VITE_HOST;

const getPlatforms = async () => {
  try {
    const platforms = await axios(`${HOST}/platforms`);
    return platforms.data;
  } catch (error) {
    console.log(error);
  }
};
export default getPlatforms;
