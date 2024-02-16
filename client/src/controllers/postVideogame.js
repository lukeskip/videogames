import axios from "axios";
const postVideogame = async (object) => {
  try {
    const formData = new FormData();

    Object.keys(object).forEach((key) => {
      formData.append(key, object[key]);
    });

    const request = await axios.post(
      "http://localhost:3001/videogames",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(request.data);
  } catch (error) {
    console.log(error.message);
  }
};

export default postVideogame;
