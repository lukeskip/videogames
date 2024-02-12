const { Router } = require("express");
const getVideogames = require("../controllers/getVideogames");
const postVideogame = require("../controllers/postVideogame");
const getGenres = require("../controllers/getGenres");
const getVideogameDetail = require("../controllers/getVideogameDetail");

const routerVideogames = Router();

routerVideogames.get("/", getVideogames);
routerVideogames.post("/", postVideogame);

routerVideogames.get("/genres", getGenres);
routerVideogames.get("/videogames/:idVideogame", getVideogameDetail);

module.exports = routerVideogames;
