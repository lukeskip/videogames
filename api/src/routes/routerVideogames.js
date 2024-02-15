const { Router } = require("express");
const getVideogames = require("../controllers/getVideogames");
const getVideogameDetail = require("../controllers/getVideogameDetail");
const postVideogame = require("../controllers/postVideogame");
const getGenres = require("../controllers/getGenres");

const routerVideogames = Router();

routerVideogames.get("/", getVideogames);

routerVideogames.post("/", postVideogame);

routerVideogames.get("/genres", getGenres);
routerVideogames.get("/:id", getVideogameDetail);

module.exports = routerVideogames;
