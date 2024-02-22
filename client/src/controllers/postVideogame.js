import axios from "axios";
const postVideogame = async (object) => {
  const checkImage = (string) => {
    const validFormats = ["jpg", "jpeg", "png", "webp"];
    string = string.split(".");

    if (validFormats.some((item) => item === string[string.length - 1])) {
      return true;
    }

    return false;
  };
  const checkDate = (string) => {
    return !isNaN(new Date(string));
  };

  let results = { status: false, errors: {} };
  console.log(object);
  try {
    console.log(object);

    [
      "name",
      "release",
      "image",
      "rating",
      "description",
      "genres",
      "platforms",
    ].forEach((element) => {
      if (!object[element]) {
        results = {
          ...results,
          errors: {
            ...results.errors,
            [element]: { message: `Este campo es requerido` },
          },
        };
      } else {
        if ((element === "rating" && object.rating < 1) || object.rating > 5) {
          results = {
            ...results,
            errors: {
              ...results.errors,
              rating: { message: "rating tiene que estar entre 1 y 5" },
            },
          };
        }

        if (element === "platforms" && !object.platforms.length) {
          console.log(object.platforms.length);
          results = {
            ...results,
            errors: {
              ...results.errors,
              platforms: { message: "Debes elegir al menos una plataforma" },
            },
          };
        }

        if (element === "genres" && !object.genres.length) {
          results = {
            ...results,
            errors: {
              ...results.errors,
              genres: { message: "Debes elegir al menos un género" },
            },
          };
        }

        if (element === "image" && !checkImage(object[element])) {
          results = {
            ...results,
            errors: {
              ...results.errors,
              image: { message: "La imagen debe ser formato jpg o png" },
            },
          };
        }
        if (element === "release" && !checkDate(object[element])) {
          results = {
            ...results,
            errors: {
              ...results.errors,
              release: {
                message: "La fecha debe seguir el formato mm/dd/aaaa",
              },
            },
          };
        }
      }
    });

    if (!Object.keys(results.errors).length) {
      const request = await axios.post(
        "http://localhost:3001/videogames",
        object
      );
      if (request.data.status) {
        results = {
          ...results,
          status: request.data.status,
          message: request.data.message,
          videogame: request.data.videogame,
        };
      } else {
        results = {
          ...results,
          status: request.data.status,
          errors: { api_error: request.data.message },
        };
      }
    }

    return results;
  } catch (error) {
    return {
      ...results,
      status: false,
      errors: { api_error: error },
    };
  }
};

export default postVideogame;
