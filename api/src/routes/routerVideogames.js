const { Router } = require("express");
const getVideogames = require("../controllers/getVideogames");
const getVideogameDetail = require("../controllers/getVideogameDetail");
const postVideogame = require("../controllers/postVideogame");

const routerVideogames = Router();

routerVideogames.get("/", getVideogames);
routerVideogames.post("/", postVideogame);
routerVideogames.get("/:id", getVideogameDetail);

module.exports = routerVideogames;
